import React, { use } from "react";
import { BlitzPage, useParam } from "@blitzjs/next";

const TeamPage: BlitzPage = () => {
  const id = useParam("id", "string");
  return <div>{id} is the best team member</div>;
};

export default TeamPage;
