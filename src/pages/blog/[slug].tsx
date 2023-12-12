import { useParam } from "@blitzjs/next";
import React from "react";
import { useStringParam } from "src/utils/utils";

const BlogPostPage = () => {
  const slug = useStringParam("id");
  return <div>Blog post: {slug} </div>;
};

export default BlogPostPage;
