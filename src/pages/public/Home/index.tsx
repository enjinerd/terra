import Layout from "components/layout/Layout";
import { Contact, Faq, Features, Hero } from "components/public/home";

export default function Home() {
  let featureDetails = {
    title: "Integrate effortlessly with any technology stack",
    description:
      "Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon.",
  };
  return (
    <Layout>
      <Hero />
      <Features {...featureDetails} />
      <Faq />
      <Contact />
    </Layout>
  );
}
