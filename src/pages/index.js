import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        {/*<h1 className="hero__title">{siteConfig.title}</h1>*/}
        <img
          src="img/oss-logo-white.png"
          alt="Open Source with SLU logo"
          className={styles.heroLogo}
        />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/connect_with/community"
          >
            Join our community
          </Link>
        </div> */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/projects/portfolio"
          >
            Check out our projects
          </Link>
        </div>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/connect_with/donate"
          >
            Consult with OSS
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`}>
      <HomepageHeader />
      <main>
        <div className={styles.homeSectionContainer}>
          <div className={styles.homeSectionText}>
            <h2>What is Open Source with SLU?</h2>
            <p>
            Open Source with SLU is the open source program office of Saint Louis University, funded by the Alfred P. Sloan Foundation. We connect students with real-world software development projects while preparing workforce-ready graduates. Our work advances open science and helps researchers increase impact. New software engineers develop solutions for clients. Through service, mentoring, and consulting we are opening innovation with future leaders.
            </p>
          </div>
          <div className={styles.homeSectionCarousel}>
            <Carousel showThumbs={false} infiniteLoop autoPlay>
              <div>
                <img src="img/20240909_223329667.jpeg" alt="OSS developers at work" />
              </div>
              {/* <div> Additional image
                <img src="img/something/.jpeg" alt="OSS developers at work" />
              </div> */}
            </Carousel>
          </div>
        </div>

        <HomepageFeatures />
      </main>
    </Layout>
  );
}