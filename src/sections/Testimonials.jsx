import Container from "../components/Container";
import Testimonial from "../components/Testimonial";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { dataTestimonials } from "../data/data-testimonials";

const items = dataTestimonials.map((testimonial) => (
  <Testimonial testimonial={testimonial} key={testimonial.id} />
));

function Testimonials() {
  return (
    <section id="testimonials-section" className="bg-blue-50 pb-20 pt-32">
      <Container>
        <AliceCarousel
          mouseTracking
          items={items}
          controlsStrategy="alternate"
          autoPlay={true}
          animationDuration={3500}
          infinite
          autoPlayStrategy="default"
          disableButtonsControls={true}
        />
      </Container>
    </section>
  );
}

export default Testimonials;
