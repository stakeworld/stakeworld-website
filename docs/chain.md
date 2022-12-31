---
id: chain
title: Chain info
sidebar_label: Chain info
description: Stakeworld chain info
keywords: [stakeworld, chain]
slug: /chain
---

import RPC from "./../src/components/RPC-Connection";

Polkadot current era = <RPC network="polkadot" path="query.staking.currentEra" defaultValue="0"/> with <RPC network="polkadot" path="query.staking.validatorCount" defaultValue={0}/> validators and maximum <RPC network="polkadot" path="consts.staking.maxNominatorRewardedPerValidator" defaultValue={0}/> nominators per validator

Kusama current era = <RPC network="kusama" path="query.staking.currentEra" defaultValue="0"/> with <RPC network="kusama" path="query.staking.validatorCount" defaultValue={0}/> validators and maximum <RPC network="kusama" path="consts.staking.maxNominatorRewardedPerValidator" defaultValue={0}/> nominators per validator

