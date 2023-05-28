import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Validator nodes',
    Svg: require('@site/static/img/software.svg').default,
    description: (
      <>
        Stakeworld runs reliable, dedicated <a href="http://stakeworld.io/docs/nominate">validator nodes</a> with low commission. 
      </>
    ),
  },
  {
    title: 'RPC servers',
    Svg: require('@site/static/img/nominate.svg').default,
    description: (
      <>
      Stakeworld runs multiple public archive RPC servers which give access to the blockchain network.
      </>
    ),
  },
  {
    title: 'Share information',
    Svg: require('@site/static/img/agree.svg').default,
    description: (
      <>
        We try to exchange and share information to strengthen the ecosystem.
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
