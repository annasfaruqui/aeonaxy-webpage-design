import Heading from "./Heading";

function Feature({ feature, position }) {
  return (
    <div className="flex flex-col justify-between gap-6 min-[964px]:flex-row min-[964px]:items-center lg:gap-20">
      <div
        className={`${position % 2 === 0 ? "order-1" : "order-1 min-[964px]:order-2"} flex basis-1/4 flex-col gap-4 px-0 sm:px-6 md:basis-1/2 md:gap-6 md:py-8`}
      >
        <Heading type="secondary">{feature.heading}</Heading>
        <Heading type="tertiary">{feature.subHeading}</Heading>
        <p className="w-full leading-relaxed text-gray-700 lg:w-[90%]">
          {feature.description}
        </p>
      </div>
      <figure
        className={`${position % 2 === 0 ? "order-2" : "order-2 min-[964px]:order-1"} ${position !== 1 && "rounded-xl shadow-lg"} relative mx-0 my-6 flex basis-3/4 items-center justify-center sm:mx-12 min-[964px]:mx-0 min-[964px]:my-0 lg:basis-1/2`}
      >
        <div className="absolute z-0 h-4/6 w-[110%] -rotate-45 rounded-full bg-blue-300/50"></div>
        <img
          src={feature.image}
          alt={feature.heading}
          className="z-10 h-full w-full rounded-xl object-cover"
        />
      </figure>
    </div>
  );
}

export default Feature;
