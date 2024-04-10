function Testimonial({ testimonial }) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 px-4 sm:px-0 lg:flex-row">
      <figure className="basis-1/2 overflow-hidden rounded-3xl lg:basis-2/6">
        <img src={testimonial.image} alt={testimonial.name} />
      </figure>
      <div className="flex basis-1/2 flex-col pl-2 pr-8 sm:pr-20 lg:basis-3/5 lg:pr-12">
        <p className="mb-6 text-xl font-semibold text-blue-950 md:text-2xl">
          &ldquo;{testimonial.testimonial}&rdquo;
        </p>
        <p className="mb-1 text-lg font-semibold text-blue-950">
          {testimonial.name}
        </p>
        <p className="text-blue-900 ">{testimonial.jobTitle}</p>
      </div>
    </div>
  );
}

export default Testimonial;
