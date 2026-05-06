'use client';
import Banner from "@/components/banner/banner";
import BlockTitle from "@/components/blockTitle/blockTitle";
import Data from "@/api/data.json";
import ServiceCard from "@/components/cards/serviceCard";
import AchivementCard from "@/components/cards/achivementCard";
import TrainingCard from "@/components/cards/trainingCard";
import TestimonialCard from "@/components/cards/testimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Mousewheel, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import TechStackCard from "@/components/cards/techStackCard";

export default function Home() {

  const [activeFilter, setActiveFilter] = useState(
    Data.accordionButtonData?.[0]?.accordionBtn || 'All Programs'
  )
  const filteredTrainingData =
    activeFilter === 'All Programs'
      ? Data.trainingData
      : Data.trainingData.filter(
        (item) => item.category === activeFilter
      )

  // Pagination Code
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 6
  const totalPages = Math.ceil(filteredTrainingData.length / itemsPerPage)


  const paginatedData = filteredTrainingData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )
  useEffect(() => {
    setCurrentPage(1)
  }, [activeFilter])
  return (
    <>
      <Banner />
      {/* End Banner Section */}
      <section className="bg-linear-to-b from-secondary to-dark-blue">
        {/* <div className="container"> */}
        <BlockTitle
        customClass="py-7 text-center text-white/90 [&_h2]:mb-1"
          title="Technologies"
          orangeText="We Master"
          description="Cutting-edge tools and frameworks to build the future"
        />
        <Swiper
          allowTouchMove={true}
          simulateTouch={true}
          slidesPerView={3}
          spaceBetween={25}
          grabCursor={true}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          // pagination={{ clickable: true }}
          keyboard={true}
          modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
          className="testimonial"
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 25,
            },
          }}
          data-aos="fade-right"
        >
          {Data.techStackData.map((item, index) => (
            <SwiperSlide key={index} className="h-auto! pb-8">
              <TechStackCard
                imgSrc={item.imgSrc}
                imgWidth={item.imgWidth}
                imgHeight={item.imgHeight}
                imgAlt={item.imgAlt}
                iconTitle={item.iconTitle}
              />
            </SwiperSlide >
          ))}
        </Swiper>
        {/* </div> */}
      </section>
      {/* Techstack */}
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
              <div className="w-full md:w-1/2 lg:w-1/3 px-3" key={index}>
                <ServiceCard
                  cardTitle={item.cardTitle}
                  cardDescription={item.cardDescription}
                  ctaText={item.ctaText}
                  ctaLink={item.ctaLink}
                  iconClass={item.iconClass}
                  bgColor={item.bgColor}
                  borderColor={item.borderColor}
                  learnIconClass={item.learnIconClass}
                  currentPage={currentPage}
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
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3" data-aos="fade-right" key={index}>
                <AchivementCard
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
          <div className="flex gap-6 mb-10 overflow-auto custom-scroll-blue pt-4 pb-6">
            {Data.accordionButtonData.map((item, index) => (
              <button onClick={() => setActiveFilter(item.accordionBtn)} className={`accordion-btn btn btn-blue ${activeFilter === item.accordionBtn ? 'active' : ''
                }`} key={index}>{item.accordionBtn}</button>
            ))}
          </div>
          <div className="flex gap-y-7 flex-wrap -mx-3">
            {filteredTrainingData.length === 0 ? (
              <div className="w-full text-center py-2">
                <h3 className="text-xl mb-0 font-semibold text-red">
                  No training found
                </h3>
                <p className="text-secondary mt-2">
                  Try selecting another category
                </p>
              </div>
            ) : (
              paginatedData.map((item, index) => (
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3" data-aos="fade-right" key={index}>
                  <TrainingCard
                    cardTitle={item.cardTitle}
                    time={item.time}
                    timeIcon={item.timeIcon}
                    userIcon={item.userIcon}
                    students={item.students}
                    cardLink={item.cardLink}
                    currentPage={currentPage}
                  />
                </div>
              ))
            )}
          </div>
          {/* Pagination Code */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-10">
              {/* Prev */}
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="pagination-btn"
              >
                Prev
              </button>

              {/* Pages */}
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-2 rounded ${currentPage === i + 1
                    ? 'pagination-number'
                    : 'cursor-pointer bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300'
                    }`}
                >
                  {i + 1}
                </button>
              ))}

              {/* Next */}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="pagination-btn"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
      {/* End Achivements Section */}

      <section className="bg-white py-14 md:py-16 lg:py-20" data-aos="fade-up">
        <div className="container">
          <BlockTitle
            title="What Our"
            orangeText="Clients Say"
            description="Real feedback from real people who trusted us with their vision"
            customClass="text-center max-w-3xl mx-auto mb-10 text-dark"
          />
          <Swiper
            allowTouchMove={true}
            simulateTouch={true}
            slidesPerView={3}
            spaceBetween={25}
            grabCursor={true}
            pagination={{ clickable: true }}
            keyboard={true}
            modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
            className="testimonial"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
            }}
            data-aos="fade-right"
          >
            {Data.testimonialData.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <TestimonialCard
                  clientName={item.clientName}
                  rating={item.rating}
                  description={item.description}
                  nameText={item.nameText}
                  post={item.post}
                />
              </SwiperSlide >
            ))}
          </Swiper>
        </div>
      </section >
    </>
  );
}
