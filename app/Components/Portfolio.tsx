import React from "react";
import HorizontalBar from "./BarComponents/HorizontalBar";
import Project from "./PortfolioComponents/Project";
import ProjectAlt from "./PortfolioComponents/ProjectAlt";

// Images
import photographyPortfolio from "../../public/photography-portfolio.png";
import etchASketch from "../../public/etch-a-sketch.png";
import adminDashboard from "../../public/admin-dashboard.png";

export default function Portfolio() {
  return (
    <main id="work" className="mt-96">
      <div className="flex items-center gap-3">
        <h2 className="font-bold text-2xl text-neutral-400">
          <span className="text-secondaryColor text-xl align-text-top font-normal">
            03.
          </span>{" "}
          {`Things I've Built`}
        </h2>
        <HorizontalBar />
      </div>
      <div className="hidden 2xl:block">
        <Project
          title="Photography Portfolio"
          image={photographyPortfolio}
          repoLink="https://github.com/Voltz7788/sylva-photography-portfolio"
          liveLink="https://sylva-photography-portfolio-voltz7788.vercel.app/"
          tools={["React", "Next.js", "Tailwind", "Typescript"]}
          description="This site was commissioned by a professional photographer named Sylva Madu (he happens to be my brother). The site is complete with a masonary-style image portfolio and contact form."
        />
        <ProjectAlt
          title="Etch-a-Sketch"
          image={etchASketch}
          repoLink="https://github.com/Voltz7788/etch-a-sketch"
          liveLink="https://voltz7788.github.io/etch-a-sketch/"
          tools={["HTML", "CSS", "Javascript"]}
          description="This etch-a-sketch allows you to change the color of each grid on the canvas. There is also a rainbow mode which randomly generates a color code for each box on hover, and a slider that lets you change the grid size."
        />
        <Project
          title="Admin Dashboard"
          image={adminDashboard}
          repoLink="https://github.com/Voltz7788/admin-dashboard"
          liveLink="https://voltz7788.github.io/admin-dashboard/"
          tools={["HTML", "CSS", "Javascript"]}
          description="This project is a mockup of an admin dashboard. The layout is made from a combination of Flexbox and CSS Grid."
        />
        <ProjectAlt title="Fourth Project" />
        <Project title="Fifth Project" />
        <ProjectAlt title="Sixth Project" />
      </div>
      <div className="block 2xl:hidden">
        <Project
          title="Photography Portfolio"
          image={photographyPortfolio}
          repoLink="https://github.com/Voltz7788/sylva-photography-portfolio"
          liveLink="https://sylva-photography-portfolio-voltz7788.vercel.app/"
          tools={["React", "Next.js", "Tailwind", "Typescript"]}
          description="This site was commissioned by a professional photographer named Sylva Madu (he happens to be my brother). The site is complete with a masonary-style image portfolio and contact form."
        />
        <Project
          title="Etch-a-Sketch"
          image={etchASketch}
          repoLink="https://github.com/Voltz7788/etch-a-sketch"
          liveLink="https://voltz7788.github.io/etch-a-sketch/"
          tools={["HTML", "CSS", "Javascript"]}
          description="This etch-a-sketch allows you to change the color of each grid on the canvas. There is also a rainbow mode which randomly generates a color code for each box on hover, and a slider that lets you change the grid size."
        />
        <Project
          title="Admin Dashboard"
          image={adminDashboard}
          repoLink="https://github.com/Voltz7788/admin-dashboard"
          liveLink="https://voltz7788.github.io/admin-dashboard/"
          tools={["HTML", "CSS", "Javascript"]}
          description="This project is a mockup of an admin dashboard. The layout is made from a combination of Flexbox and CSS Grid."
        />
        <Project title="Fourth Project" />
        <Project title="Fifth Project" />
        <Project title="Sixth Project" />
      </div>
    </main>
  );
}
