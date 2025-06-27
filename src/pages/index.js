import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures'; // opcional si no lo necesitas

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header
      className={clsx('hero', styles.fullScreenHero)}
    >
      <div className={styles.centerContent}>
        <Link
          className={clsx('button button--primary button--lg', styles.customButton)}
          to="/docs/Hello"
        >
          Empezar tutorial
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Bienvenido a ${siteConfig.title}`}
      description="Tutorial introductorio al sitio"
    >
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
