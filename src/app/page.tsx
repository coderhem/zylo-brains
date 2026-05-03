'use client';
import Banner from "@/components/banner/banner";
import BlockTitle from "@/components/blockTitle/blockTitle";
import Data from "@/api/data.json";
import ServiceCard from "@/components/cards/serviceCard";
import AchivementCard from "@/components/cards/achivementCard";
import TrainingCard from "@/components/cards/trainingCard";

export default function Home() {
  return (
    <>
      <Banner />
      {/* End Banner Section */}
      <section className="py-16 bg-linear-to-tr from-primary/5 to-transparent">
        <div className="container" data-aos="fade-up">
          <BlockTitle
            title="Our"
            orangeText="Services"
            description="We are a forward-thinking IT solutions company specializing in web development, mobile applications, UI/UX design, and digital transformation services. Our mission is to empower businesses with cutting-edge technology and deliver high-quality digital experiences that create real impact."
            customClass="text-center max-w-3xl mx-auto text-dark mb-10"
          />
          <div className="flex flex-wrap gap-y-6 -mx-3">
            {Data.serviceData.map((item, index) => (
              <div className="w-full md:w-1/2 lg:w-1/3 px-3">
                <ServiceCard key={index}
                  cardTitle={item.cardTitle}
                  cardDescription={item.cardDescription}
                  ctaText={item.ctaText}
                  ctaLink={item.ctaLink}
                  iconClass={item.iconClass}
                  bgColor={item.bgColor}
                  borderColor={item.borderColor}
                  learnIconClass={item.learnIconClass}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Service Section */}

      <section className="py-14 md:py-16 lg:py-20 bg-linear-to-r from-secondary to-primary/80 text-white" data-aos="fade-up">
        <div className="container">
          <BlockTitle
            title="Our Achievements"
            // orangeText="Services"
            description="Numbers that speak for our excellence"
            customClass="text-center max-w-3xl mx-auto text-white mb-10"
          />
          <div className="flex gap-y-7 flex-wrap -mx-3">
            {Data.achivementData.map((item, index) => (
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3" data-aos="fade-right">
                <AchivementCard key={index}
                  bgColor={item.bgColor}
                  iconBgColor={item.iconBgColor}
                  headingContent={item.headingContent}
                  content={item.content}
                  iconClass={item.iconClass}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Achivements Section */}

      <section className="py-14 md:py-16 lg:py-20" data-aos="fade-up">
        <div className="container">
          <BlockTitle
            title="Professional"
            orangeText="Training Programs"
            description="Industry-oriented courses with hands-on experience and placement support"
            customClass="text-center max-w-3xl mx-auto mb-10 text-dark"
          />
          <div className="flex gap-6 mb-10 overflow-auto py-4">
            <button className="btn btn-blue">All</button>
            <button className="btn btn-blue">Frontend</button>
            <button className="btn btn-blue">Backend</button>
            <button className="btn btn-blue">Full Stack</button>
            <button className="btn btn-blue">AI / Machine Learning</button>
            <button className="btn btn-blue">Data Analytics</button>
            <button className="btn btn-blue">DevOps</button>
            <button className="btn btn-blue">UI/UX</button>
          </div>
          <div className="flex gap-y-7 flex-wrap -mx-3">
            {Data.trainingData.map((item, index) => (
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3" data-aos="fade-right">
                <TrainingCard key={index}
                  cardTitle={item.cardTitle}
                  time={item.time}
                  timeIcon={item.timeIcon}
                  userIcon={item.userIcon}
                  students={item.students}
                  cardLink={item.cardLink}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
