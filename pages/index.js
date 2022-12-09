import ContainerBlock from "../components/ContainerBlock";
import axios from "axios";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import ContactForm from "../components/Contact";

export const vercelApi = axios.create({
  baseURL: process.env.VERCEL_URL ?? "http://localhost:3000/",
});

export async function getServerSideProps() {
  try {
    const projects = (await vercelApi.get("/api/get-projects")).data;
    return { props: { projects } };
  } catch (err) {
    return { props: {} };
  }
}

export default function Home({ projects }) {
  return (
    <ContainerBlock>
      <Hero />

      <Projects projects={projects} />
      <About />
      <ContactForm />
    </ContainerBlock>
  );
}
