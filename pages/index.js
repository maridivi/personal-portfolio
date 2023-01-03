import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import ContactForm from "../components/Contact";
import getProjects from "../utils/getProjects";

export async function getServerSideProps() {
  try {
    const projects = await getProjects();
    return { props: { projects } };
  } catch (err) {
    console.log(err);
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
