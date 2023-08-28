import React from "react";
import HorizontalBar from "./BarComponents/HorizontalBar";
import Project from "./PortfolioComponents/Project";
import ProjectAlt from "./PortfolioComponents/ProjectAlt";

export default function Portfolio() {
  return (
    <main className="mt-96">
      <div className="flex items-center gap-3">
        <h2 className="font-bold text-2xl text-neutral-400">
          <span className="text-cyan-500 text-xl align-text-top font-normal">
            03.
          </span>{" "}
          {`Things I've Built`}
        </h2>
        <HorizontalBar />
      </div>
      <Project title="First Project" />
      <ProjectAlt title="Second Project" />
      <Project title="Third Project" />
      <ProjectAlt title="Fourth Project" />
      <Project title="Fifth Project" />
      <ProjectAlt title="Sixth Project" />
    </main>
  );
}
