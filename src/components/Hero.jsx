import Button from "../ui/Button";
import Container from "../ui/Container";

function Hero() {
  return (
    <section id="hero-section">
      <Container>
        <div className="mb-10 mt-16 flex flex-col items-center gap-8 text-center md:mt-20 md:gap-12">
          <div className="clip-path-hero sm:clip-path-hero-sm lg:clip-path-hero-lg absolute left-1/2 top-52 z-0 h-full w-4/5 -translate-x-1/2 -translate-y-1/2 bg-blue-50/70"></div>
          <h2 className="z-10 font-bold uppercase tracking-wide text-blue-500">
            Routing forms
          </h2>
          <h1 className="z-10 text-4xl font-bold text-blue-950 lg:mb-2 lg:text-5xl">
            Make higher quality connections
          </h1>
          <p className="z-10 text-xl font-light text-blue-900/90 lg:w-3/5 lg:leading-8">
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
            <Button variation="secondary" size="large">
              Talk with sales
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
