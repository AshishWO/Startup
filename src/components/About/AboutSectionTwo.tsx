import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Bug free code
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Premier support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Next.js
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                  consectetur adipiscing elit setim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-12 flex w-[1450px] flex-wrap gap-4">
        <video
          src="https://assets.ign.com/videos/zencoder/2025/08/02/1920/b6a24277-29ad-42f4-b112-bdaa97c4992d-1754148199.mp4"
          controls
          width={700}
          height={400}
        />
        <video
          src="https://assets.ign.com/videos/zencoder/2025/08/07/1920/dbe26a20-3606-4e66-82ba-06f360da828a-1754592650.mp4"
          controls
          width={700}
          height={400}
        />
        <video
          src="https://assets.ign.com/videos/zencoder/2025/05/19/1920/4f948a09-8b90-47a4-abef-4d6429d1c9a7-1747660588.mp4"
          controls
          width={700}
          height={400}
        />
        <video
          src="https://assets.ign.com/videos/zencoder/2025/08/06/1920/828d334c-6537-4ce8-af4a-8dd6054006ca-1754521511.mp4"
          controls
          width={700}
          height={400}
        />
        <video
          src="https://assets.ign.com/videos/zencoder/2025/08/05/1920/9307bd2d-295d-487b-b70d-f2786892a047-1754405477.mp4"
          controls
          width={700}
          height={400}
        />
      </div>
    </section>
  );
};

export default AboutSectionTwo;
