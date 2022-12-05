import Projects from "../components/Projects";
import axios from "axios";
import { useEffect, useState } from "react";
import ContainerBlock from "../components/ContainerBlock";

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

export default function ProjectsPage({ projects }) {
  return (
    <ContainerBlock title="Projects - Marianna Di Vito">
      <Projects projects={projects} />
    </ContainerBlock>
  );
}
