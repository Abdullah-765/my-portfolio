import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/contact";
export default function Home() {
  return (
    <div>
      <section id="hero"><Hero/></section>
      <section id="about"><About/></section>
      <section id="skills"><Skills/></section>
      <section id="projects"><Projects/></section>
      <section id="contact"><ContactMe/></section>
    </div>
  );
}
