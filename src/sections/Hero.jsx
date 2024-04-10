import Button from "../components/Button";
import Container from "../components/Container";
import Heading from "../components/Heading";

function Hero() {
  return (
    <section id="hero-section" className="h-screen">
      <Container extraStyles="flex items-center justify-center">
        <div className="relative flex flex-col items-center gap-16 pb-20 pt-32 text-center md:mt-20 md:gap-12 md:pt-0">
          <div className="clip-path-hero sm:clip-path-hero-sm lg:clip-path-hero-lg absolute left-1/2 top-56 z-0 h-full w-4/5 -translate-x-1/2 -translate-y-1/2 bg-blue-50/80"></div>
          <Heading type="secondary">Routing forms</Heading>
          <Heading type="primary">Make higher quality connections</Heading>
          <p className="texl-lg z-10 font-light leading-7 text-blue-900/90 sm:text-xl lg:w-3/5 lg:leading-8">
            Request information form website visitors or invitees and &mdash;
            based on their responses &mdash; route them to the right person or
            resource.
            <br />
            <em>Available on Professional plans and up</em>
          </p>
          <div className="z-10 mt-2 flex items-center justify-center gap-3 md:mt-0 md:gap-6">
            <Button variation="primary" size="large">
              Start for free
            </Button>
            <Button
              variation="secondary"
              size="large"
              secCol="text-blue-950 ring-blue-950 hover:bg-gray-50"
            >
              Talk with sales
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
