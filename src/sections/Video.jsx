import Heading from "../components/Heading";
import videoImg from "../assets/img2.jpg";

function Video() {
  return (
    <section
      id="video-section"
      className="mb-20 bg-blue-950 pb-6 pt-20 text-center sm:pb-10 lg:mb-96 lg:pb-64 min-[1700px]:mb-[30rem]"
    >
      <div className="relative flex w-full flex-col items-center gap-6 px-4 sm:px-6 lg:mx-auto lg:w-4/6 min-[1105px]:w-3/6">
        <div className="absolute -right-[51%] -top-[44%] hidden h-40 w-48 rounded-bl-full border-b-[12px] border-l-[12px] border-teal-400 min-[1105px]:block"></div>
        <div className="absolute -bottom-[144%] -left-[48%] hidden h-60 w-72 grid-cols-5 gap-3 rounded-tr-full min-[1105px]:grid">
          {Array.from({ length: 25 }, (_, i) => (
            <div className="h-4 w-4 rounded-full bg-blue-800"></div>
          )).map((_, i) => {
            if (
              i === 1 ||
              i === 2 ||
              i === 3 ||
              i === 4 ||
              i === 7 ||
              i === 8 ||
              i === 9 ||
              i === 13 ||
              i === 14 ||
              i === 19
            )
              return (
                <div
                  key={i}
                  className="h-4 w-4 rounded-full bg-blue-800 opacity-0"
                ></div>
              );
            else {
              return (
                <div key={i} className="h-4 w-4 rounded-full bg-blue-800"></div>
              );
            }
          })}
        </div>
        <Heading type="secondary" color="text-teal-300">
          Video
        </Heading>
        <Heading type="tertiary-big">
          See what you can do with Routing Forms
        </Heading>
        <figure className="mt-10 h-auto lg:absolute lg:top-[110%] min-[1700px]:h-[32rem]">
          <img
            src={videoImg}
            alt="Video preview"
            className="h-full w-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}

export default Video;
