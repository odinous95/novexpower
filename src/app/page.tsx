import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Team from "@/components/TeamMembers";
import Collaboration from "@/components/Collaborations";
import LineSep from "@/components/LineSep";


const HomePage: React.FC = () => {
  return (
    <>
      <Section
        id="home"
        title=""
        description=""
      >
        <Hero />
      </Section>
      <Container>
        <Section
          id="team"
          title="Our Team"
          description="A glimpse of our team roles and backgrounds."
        >
          <Team />
          <LineSep />
        </Section>
        <Section
          id="Collaborations"
          title="Collaborations"
          description="We are proud to collaborate with these amazing teams and organizations."
        >
          <Collaboration />
          <LineSep />
        </Section>
        <FAQ />
      </Container>
    </>
  );
};

export default HomePage;
