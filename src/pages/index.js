import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import NetworkFeatures from '@site/src/components/NetworkFeatures';
import styles from './index.module.css';
import ValidatorStatus from '../components/ValidatorStatus';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
	  <strong>Stakeworld</strong> offers <strong>reliable</strong> validators and public <strong>RPC</strong> endpoints on the <strong>polkadot</strong> and <strong>kusama</strong> network 
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Reliable validators for polkadot and kusama">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ValidatorStatus />
      </main>
    </Layout>
  );
}
