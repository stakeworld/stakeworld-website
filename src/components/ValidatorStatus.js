import React, { useEffect, useState } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import validatorsConfig from '../config/validatorsConfig'; // Import validators config
import collatorsConfig from '../config/collatorsConfig';   // Import collators config
import '../css/validatorStatus.css';  // Import CSS file

const ValidatorStatus = () => {
  const [kusamaValidators, setKusamaValidators] = useState([]);
  const [polkadotValidators, setPolkadotValidators] = useState([]);
  const [stashVisibility, setStashVisibility] = useState({}); // State to manage visibility of stashes
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Toggle stash visibility when name is clicked
  const toggleStash = (key) => {
    setStashVisibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const getValidatorData = async () => {
    try {
      console.log('Connecting to WebSocket providers...');

      // Providers for validator status
      const dotProvider = new WsProvider('wss://dot-rpc.stakeworld.io');
      const ksmProvider = new WsProvider('wss://ksm-rpc.stakeworld.io');

      // Connect to the APIs
      const [dotApi, ksmApi] = await Promise.all([
        ApiPromise.create({ provider: dotProvider }),
        ApiPromise.create({ provider: ksmProvider }),
      ]);

      console.log('Connected to APIs.');

      const fetchValidatorStatus = async (chainApi, stashes) => {
        // Get the active validator stashes
        const activeValidatorStashes = await chainApi.query.session.validators();

        return stashes.map(({ name, stash }) => {
          const isActive = activeValidatorStashes.some((activeStash) => activeStash.toString() === stash);
          return { name, stash, isActive };
        });
      };

      // Fetch validator status using the configuration file
      const kusamaValidatorData = await fetchValidatorStatus(ksmApi, validatorsConfig.kusama);
      const polkadotValidatorData = await fetchValidatorStatus(dotApi, validatorsConfig.polkadot);

      setKusamaValidators(kusamaValidatorData);
      setPolkadotValidators(polkadotValidatorData);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching validator data:', err);
      setError('Failed to fetch validator data. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    getValidatorData();
  }, []);

  if (loading) {
    return <p>Loading validator status...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="features">
      {/* Kusama Validators */}
      <div className="validator-column">
        <h2>Kusama Validators</h2>
        {kusamaValidators.map((validator, index) => {
          const key = `Kusama-${validator.name}`; // Create a unique key for Kusama validators
          const stakingUrl = `https://polkadot.js.org/apps/#/staking/targets?rpc=wss%3A%2F%2Fksm-rpc.stakeworld.io&filter=stakeworld`; // Link for Kusama
          return (
            <div key={index} className={validator.isActive ? 'green' : 'red'}>
              <span onClick={() => toggleStash(key)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                {validator.name} - {validator.isActive ? 'Active' : 'Inactive'}
              </span>
              {stashVisibility[key] && (
                <div>
                  <a href={stakingUrl} target="_blank" rel="noopener noreferrer">
                    {validator.stash}
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Polkadot Validators */}
      <div className="validator-column">
        <h2>Polkadot Validators</h2>
        {polkadotValidators.map((validator, index) => {
          const key = `Polkadot-${validator.name}`; // Create a unique key for Polkadot validators
          const stakingUrl = `https://polkadot.js.org/apps/#/staking/targets?rpc=wss%3A%2F%2Fdot-rpc.stakeworld.io&filter=stakeworld`; // Link for Polkadot
          return (
            <div key={index} className={validator.isActive ? 'green' : 'red'}>
              <span onClick={() => toggleStash(key)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                {validator.name} - {validator.isActive ? 'Active' : 'Inactive'}
              </span>
              {stashVisibility[key] && (
                <div>
                  <a href={stakingUrl} target="_blank" rel="noopener noreferrer">
                    {validator.stash}
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Kusama Collators */}
      <div className="validator-column">
        <h2>Kusama Collators</h2>
        {collatorsConfig.kusama.map((collator, index) => (
          <div key={index} className="green">
            {collator}
          </div>
        ))}
      </div>

      {/* Polkadot Collators */}
      <div className="validator-column">
        <h2>Polkadot Collators</h2>
        {collatorsConfig.polkadot.map((collator, index) => (
          <div key={index} className="green">
            {collator}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValidatorStatus;

