import ProjectClient from "./ProjectClient";

const description =
  "The website for Waystream, an audio live-streaming platform — designed to speak to broadcasters and listeners separately and get both to start for free.";

export const metadata = {
  title: "Waystream Case Study — Grace",
  description,
  openGraph: {
    title: "Waystream Case Study — Grace",
    description,
    images: ["/projects/waystream/hero.jpg"],
  },
};

export default function Page() {
  return <ProjectClient />;
}
