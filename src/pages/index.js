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
          style={{ width: "300px" }}
        />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/portfolio"
          >
            Check out our projects
          </Link>
        </div>
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
              Open Source with SLU is Saint Louis University's open source program office, initially funded by the Alfred P. Sloan Foundation, that provides students with practical software development experience on real-world projects, delivers workforce-ready graduates with industry-standard skills, and advances open science by helping researchers navigate open source software practices to secure funding and increase research impact. Through experiential learning programs, free consulting services, and advocacy initiatives, we connect student developers with faculty and external clients to build custom software solutions while championing open source practices across the university and broader community.
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