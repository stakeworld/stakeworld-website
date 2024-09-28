#!/bin/bash

# Define chains array
chains=(
    "ksmcc3" "asset-hub-kusama" "bridge-hub-kusama" "coretime-kusama"
    "encointer-kusama" "people-kusama" "polkadot" "asset-hub-polkadot"
    "bridge-hub-polkadot" "collectives_polkadot" "coretime-polkadot"
    "people-polkadot" "paseo" "asset-hub-paseo" "westend2" "asset-hub-westend"
)

# Prometheus server address
prometheus_server="http://localhost:9090"

# Create associative arrays to store results
declare -A requests_6_months requests_per_month requests_per_day

# Loop through each chain and run the query
for chain in "${chains[@]}"; do
    # Run the query with curl and store the response
    response=$(curl -s -G --data-urlencode "query=sum(increase(substrate_rpc_calls_started{chain=~\"$chain\",name=~\"rpc.+|.+rpc.+\"}[182d]))" "$prometheus_server/api/v1/query")

    # Extract the value using jq (make sure jq is installed)
    value=$(echo "$response" | jq -r '.data.result[0].value[1]')

    # Store the values if data is available
    if [ "$value" != "null" ]; then
        requests_6_months["$chain"]=$(printf "%.0f" $(echo "$value / 1000000" | bc -l))
        requests_per_month["$chain"]=$(printf "%.0f" $(echo "$value / 6 / 1000000" | bc -l))
        requests_per_day["$chain"]=$(printf "%.0f" $(echo "$value / 182 / 1000000" | bc -l))
    else
        requests_6_months["$chain"]="N/A"
        requests_per_month["$chain"]="N/A"
        requests_per_day["$chain"]="N/A"
    fi
done

# Print table header in Docusaurus Markdown format
echo "| Chain              | Requests in millions (6 months) | Requests in millions (per month) | Requests in millions (per day) |"
echo "|--------------------|---------------------------------|----------------------------------|--------------------------------|"

# Loop through each chain to print the results in Markdown table format
for chain in "${chains[@]}"; do
    echo "| $chain | ${requests_6_months["$chain"]} | ${requests_per_month["$chain"]} | ${requests_per_day["$chain"]} |"
done

