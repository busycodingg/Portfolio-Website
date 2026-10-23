import ProjectClient from "./ProjectClient";

const description =
  "The website for Drive45, Nigeria's first vehicle subscription platform, designed to explain rent-to-own in plain terms and route individuals, enterprise employees and businesses to the right way to sign up.";

export const metadata = {
  title: "Drive45 Mobility Case Study | Grace",
  description,
  openGraph: {
    title: "Drive45 Mobility Case Study | Grace",
    description,
    images: ["/projects/drive45/hero.jpg"],
  },
};

export default function Page() {
  return <ProjectClient />;
}
