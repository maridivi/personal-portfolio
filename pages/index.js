import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container>
      <Hero />
    </Container>
  );
}
