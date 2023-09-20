import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Polkadot',
    Svg: require('@site/static/img/polkadot.svg').default,
    description: (
      <>
        RPC, Validator
      </>
    ),
  },
  {
    title: 'Assethub Polkadot',
    Svg: require('@site/static/img/assethub.svg').default,
    description: (
      <>
        RPC, Collator
      </>
    ),
  },
  {
    title: 'Bridgehub Polkadot',
    Svg: require('@site/static/img/bridgehub.svg').default,
    description: (
      <>
        RPC, Collator
      </>
    ),
  },
  {
    title: 'Kusama',
    Svg: require('@site/static/img/kusama.svg').default,
    description: (
      <>
        RPC, Validator
      </>
    ),
  },
  {
    title: 'Assethub Kusama',
    Svg: require('@site/static/img/assethub.svg').default,
    description: (
      <>
        RPC, Collator
      </>
    ),
  },
  {
    title: ' Bridgehub Kusama',
    Svg: require('@site/static/img/bridgehub.svg').default,
    description: (
      <>
        RPC, Collator
      </>
    ),
  },
  {
    title: 'Westend',
    Svg: require('@site/static/img/westend.svg').default,
    description: (
      <>
       RPC
      </>
    ),
  },
  {
    title: 'Assethub Westmint',
    Svg: require('@site/static/img/assethub.svg').default,
    description: (
      <>
        RPC
      </>
    ),
  },
  {
    title: 'Encointer',
    Svg: require('@site/static/img/encointer.svg').default,
    description: (
      <>
        RPC
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

export default function NetworkFeatures() {
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
