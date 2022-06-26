import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Reliable validator node',
    Svg: require('@site/static/img/software.svg').default,
    description: (
      <>
        STAKEWORLD runs it nodes on dedicated hardware, monitors its nodes and participates in the polkadot ecosystem. 
      </>
    ),
  },
  {
    title: 'Nominate STAKEWORLD',
    Svg: require('@site/static/img/nominate.svg').default,
    description: (
      <>
      Polkadot offers 13%-15% APR and Kusama 18%-20% APR. You can nominate STAKEWORLD as one of your validators.
      </>
    ),
  },
  {
    title: 'Share information',
    Svg: require('@site/static/img/agree.svg').default,
    description: (
      <>
        We offers an install instruction and an example node/monitoring setup with configuration files.
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
