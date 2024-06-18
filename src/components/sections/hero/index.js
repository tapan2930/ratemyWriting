import Image from "next/image";

const Hero = () => {
  const heroData = [
    {
      title: "Get Accurate score!",
      description:
        "Your writing will be scored by AI algorithm and you will get most accurate score for your writing.",
      icon: "/assets/icons/ai.svg",
    },
    {
      title: "Works for both Task I and II",
      description:
        "Our AI algorithm works for both Task I and Task II. You can get score for both tasks and overall writing band.",
      icon: "/assets/icons/both.svg",
    },
    {
      title: "Upload your writing",
      description:
        "You can copy paste your writing or upload your writing in docx format or take a photo of your hand written task. Our AI algorithm will analyze your writing and give you score.",
      icon: "/assets/icons/files.svg",
    },
  ];
  return (
    <section className=" lg:h-[90vh]  bg-secondary-500 py-6">
      <div className="container  h-full ">
        <div className=" flex  flex-col lg:flex-row items-center h-full">
          <div className=" flex-1  ">
            <h1 className=" font-bold text-xl lg:text-3xl mb-6 lg:mb-10">
              The Ultimate IELTS Writing Task I and II Analysis tool
            </h1>
            <div className="">
              <ul class="flex flex-col w-full">
                {heroData.map((data) => (
                  <li class="relative flex flex-col gap-2">
                    <div class="flex items-center gap-4">
                      <span class="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-2 text-white">
                        <Image src={data.icon} width={20} height={20} />
                      </span>
                      <h5 class="block font-sans text-lg lg:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {data.title}
                      </h5>
                    </div>
                    <div class="flex gap-4 pb-8">
                      <span class="flex-shrink-0 invisible h-full pointer-events-none"></span>
                      <div>
                        <p class="block font-sans text-sm lg:text-base antialiased font-normal leading-relaxed text-gray-600">
                          {data.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" flex justify-center items-center flex-1">
            <Image
              src="/assets/img/hero-illustration.png"
              className=" lg:w-[400px] lg:h-[400px"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
