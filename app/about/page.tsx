import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center gap-6 !mt-12">
      <section className="flex flex-col items-center">
        <div className="flex justify-center items-center rounded-full overflow-hidden w-[240px] h-[240px]">
          <Image
            width={400}
            height={400}
            src="/images/profile.png"
            alt="profile image"
            className="scale-120 pt-7"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
