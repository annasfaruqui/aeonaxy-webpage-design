import Container from "../components/Container";
import Feature from "../components/Feature";

import { dataFeatures } from "../data/data-features";

function Features() {
  return (
    <section id="features-section" className="mb-40">
      <Container>
        <div className="flex flex-col gap-28">
          {dataFeatures.map((feature, i) => (
            <Feature key={feature.id} feature={feature} position={i + 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
