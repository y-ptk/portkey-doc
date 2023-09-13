import React from "react";
import Layout from "@theme/Layout";
import { Blocks } from "../components/Blocks";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import pageData from "../../config/homepage/index.json";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={pageData && pageData.title ? pageData.title : siteConfig.title}
      description={
        pageData && pageData.description
          ? pageData.description
          : siteConfig.tagline
      }
    >
      {pageData && pageData.blocks ? <Blocks blocks={pageData.blocks} /> : null}
    </Layout>
  );
}
