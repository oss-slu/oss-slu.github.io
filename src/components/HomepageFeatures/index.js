import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Our Mission",
    Svg: require("@site/static/img/undraw_counting_stars_re_smvv.svg").default,
    description: (
      <>
        <p>We support <strong>open science</strong> and sustainable innovation 
        by delivering <strong>value for researchers</strong> with software and tools
        and providing students with <strong>realistic software development </strong> 
        experience.</p>
      </>
    ),
  },
  {
    title: "Our Portfolio",
    Svg: require("@site/static/img/undraw_teamwork_hpdk.svg").default,
    description: (
      <>
        <p>We build tools that support research.</p> 
        <p>We have built desktop, web, and mobile apps, IoT libraries, 
        web services, networking tools, AI/ML tools, and other utilities. 
        Check out the {" "}<Link to="/docs/portfolio">portfolio of projects </Link> 
        that we have developed and maintained, and continue to sustain.</p>
      </>
    ),
  },
  {
    title: "Project Requests",
    Svg: require("@site/static/img/undraw_data_processing_yrrv.svg").default,
    description: (
      <>
        <p>We are open to new project requests. Learn more on our{" "}
        <a href="docs/about/software">software request page</a>.<br/>
          We are especially interested in projects<br/>
            supporting researchers,<br/>
            focused on research outcomes,<br/>
            meeting unmet needs.<br/>
        </p>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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
