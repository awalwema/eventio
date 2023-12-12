import Layout from "@/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";
import React from "react";

const AboutPage: BlitzPage = () => {
  return (
    <Layout title="About">
      <div>This is the about page</div>
    </Layout>
  );
};

export default AboutPage;
