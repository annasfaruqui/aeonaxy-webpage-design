import Container from "../components/Container";
import Heading from "../components/Heading";
import aboutImg from "../assets/img1.jpg";

function About() {
  return (
    <section id="about-section">
      <Container extraStyles="my-16 sm:pt-10 md:my-32 md:pt-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row lg:gap-20">
          <div className="flex basis-2/4 flex-col gap-4 lg:gap-8">
            <Heading type="secondary">Better Conversions</Heading>
            <Heading type="tertiary">
              Screen and qualify website visitors or invitees
            </Heading>
            <p className="mt-2 w-full leading-7 text-gray-700 md:w-5/6">
              Prioritize scheduling with high-value leads based on industry,
              company size, and other requirements. Send people who aren't a fit
              to a referral page or other resource.
            </p>
          </div>

          <figure className="relative flex basis-2/4 items-center justify-center md:mt-10  ">
            <div className="absolute left-32 top-16 z-0 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-400/20 md:left-20 md:top-24 md:block md:h-48 md:w-48 lg:left-20 lg:top-12 lg:h-72 lg:w-72"></div>
            <div className="absolute bottom-16 right-16 z-0 hidden h-24 w-24 translate-x-1/2 translate-y-1/2 rounded-full border border-blue-500 bg-transparent md:block lg:bottom-36 lg:right-28 lg:h-56 lg:w-56"></div>
            <img
              src={aboutImg}
              alt="about"
              className="z-10 w-full rounded-lg object-cover shadow-xl md:w-4/5"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}

export default About;
