import Button from "../components/Button";
import Heading from "../components/Heading";

function Cta() {
  return (
    <section id="cta-section" className="bg-blue-950 py-16">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-12 px-10 text-center sm:items-center">
        <Heading type="tertiary-small">
          Win more business with less work.
        </Heading>
        <p className="w-full font-light leading-loose text-white md:w-4/6">
          Routing forms help you screen and qualify website visitors, automate
          scheuling, and offer a seamless customer experience.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button variation="primary" size="large">
            Start for free
          </Button>
          <Button
            variation="secondary"
            size="large"
            secCol="ring-gray-200 text-gray-200 hover:bg-blue-900/40 hover:text-blue-100"
          >
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Cta;
