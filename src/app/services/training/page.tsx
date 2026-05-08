'use client';
import Data from '@/api/data.json'
import { useEffect, useState } from 'react'
import TrainingCard from '@/components/cards/trainingCard';
import BlockTitle from '@/components/blockTitle/blockTitle';
import TtrainingFeaturesCard from '@/components/cards/trainingFeaturesCard';

const Training = () => {
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
                    popupCtaText={item.popupCtaText}
                    popupCtaClass={item.popupCtaClass}
                    popupCtaLink={item.popupCtaLink}
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
      <section className='bg-white py-10 md:py-16 lg:py-20'>
        <div className="container">
          <BlockTitle
            title='Training'
            orangeText='Benefits & Outcomes'
            description='Explore the key features of our training program, designed to provide practical skills, hands-on learning, and real-world experience to help you grow in your career.'
            customClass='mb-10 max-w-4xl'
          />
          <div className="flex flex-wrap gap-y-6 -mx-3">
            {Data.trainingFeatureCard.map((item, index) => (
              <div className="w-full md:w-1/2 lg:w-1/3 px-3">
                <TtrainingFeaturesCard key={index}
                  cardLogoSrc={item.cardLogoSrc}
                  logoWidth={item.logoWidth}
                  logoHeight={item.logoHeight}
                  logoAlt={item.logoAlt}
                  cardTitle={item.cardTitle}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Training