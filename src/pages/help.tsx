import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "@docsearch/css";
import { Articles as HelpCenterContainer } from "../components/HelpCenterContainer";
import HelpCenterHeader from "../components/HelpCenterHeader";

const pageData = require("../../config/homepage/helpCenter.json");

export default function helpCenter() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      wrapperClassName="help-center"
      title={pageData && pageData.title ? pageData.title : siteConfig.title}
      description={
        pageData && pageData.description
          ? pageData.description
          : siteConfig.tagline
      }>
      {pageData && pageData.helpCenterHeader ? (
        <HelpCenterHeader {...pageData.helpCenterHeader} />
      ) : null}
      {pageData && pageData.helpCenterContainer ? (
        <HelpCenterContainer data={pageData.helpCenterContainer} />
      ) : null}
    </Layout>
  );
}
