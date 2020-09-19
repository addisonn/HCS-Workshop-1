import React from "react";
import Project from "../../components/Project/Project";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project
        title="Personal Portfolio"
        description="This website!!"
        link="https://github.com/addisonn/HCS-Workshop-1"
      />
      <Project title="Other Projects" description="Coming Soon :)" />
    </div>
  );
}
