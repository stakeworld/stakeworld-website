import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Reliable validator node',
    Svg: require('@site/static/img/software.svg').default,
    description: (
      <>
        Stakeworld runs it nodes on dedicated hardware and actively monitors its nodes. 
      </>
    ),
  },
  {
    title: 'Nominate Stakeworld',
    Svg: require('@site/static/img/nominate.svg').default,
    description: (
      <>
      Stakeworld uses low commissions (Polkadot 1% Kusama 3%), gives daily nominator payouts and has never had a slash.
      </>
    ),
  },
  {
    title: 'Share information',
    Svg: require('@site/static/img/agree.svg').default,
    description: (
      <>
        We try to exchange and share information with other validators to strengthen the polkadot ecosystem.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
