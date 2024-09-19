// StakeworldValidators.js

import React, { useEffect, useState } from 'react';
import fetchValidators from './validators';

function StakeworldValidators() {
  const [validators, setValidators] = useState([]);

  useEffect(() => {
    async function getValidators() {
      const data = await fetchValidators();
      setValidators(data);
    }
    getValidators();
  }, []);

  return (
    <div>
      <h2>Stakeworld.io Validators</h2>
      <table>
        <thead>
          <tr>
            <th>Stash ID</th>
            <th>Display Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {validators.map((validator) => (
            <tr key={validator.accountId}>
              <td>{validator.accountId}</td>
              <td>{validator.displayName}</td>
              <td style={{ color: validator.isActive ? 'green' : 'red' }}>
                {validator.isActive ? 'Active' : 'Not Active'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StakeworldValidators;

