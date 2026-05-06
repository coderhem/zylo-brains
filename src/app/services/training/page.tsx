'use client';
import ServiceCard from '@/components/cards/serviceCard'
import Data from '@/api/data.json'
import { useEffect, useState } from 'react'

const Training = () => {
  const [activeFilter, setActiveFilter] = useState(
    Data.accordionButtonData?.[0]?.accordionBtn || 'All Programs'
  )
  const filteredData =
    activeFilter === 'All Programs'
      ? Data.trainingPageData
      : Data.trainingPageData.filter(
        (item) => item.category === activeFilter
      )

  // Pagination Code
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [activeFilter])

  return (
    <>
      <section className='bg-linear-to-bl from-primary/10 via-white to-secondary/20 py-16'>
        <div className="container">
          <div className="max-w-3xl mb-10">
            <h1 className='h3'>Upgrade Your Skills with {' '} <span className='text-primary'>Industry-Focused Training</span></h1>
            <p>Learn practical, job-ready skills from experienced mentors. Join our hands-on training programs and build your career with confidence.</p>
          </div>
          <div className="flex -mx-3 gap-y-7 flex-wrap">
            <div className="px-3 w-full lg:w-1/5">
              <div className="bg-white rounded shadow p-3">
                <div className="flex lg:flex-wrap gap-3 overflow-x-auto custom-scroll pb-6">
                  {Data.accordionButtonData.map((item, index) => (
                    <button onClick={() => setActiveFilter(item.accordionBtn)} className={`accordion ${activeFilter === item.accordionBtn ? 'active' : ''
                      }`} key={index}>{item.accordionBtn}</button>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-3 lg:w-[80%]">
              <div className="flex flex-wrap gap-y-4 -mx-2">
                {filteredData.length === 0 ? (
                  <div className="w-full text-center py-2" data-aos="fade-down">
                    <h3 className="text-xl mb-0 font-semibold text-red">
                      No training found
                    </h3>
                    <p className="text-secondary mt-2">
                      Try selecting another category
                    </p>
                  </div>
                ) : (
                  paginatedData.map((item, index) => (
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-2" key={index} data-aos="fade-right">
                      <ServiceCard
                        cardTitle={item.cardTitle}
                        cardDescription={item.cardDescription}
                        ctaText={item.ctaText}
                        ctaLink={item.ctaLink}
                        iconText={item.iconText}
                        bgColor={item.bgColor}
                        borderColor={item.borderColor}
                        learnIconClass={item.learnIconClass}
                        category={item.category}
                        cardTitleClass={item.cardTitleClass}
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
                        ? 'cursor-pointer bg-primary text-white'
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
          </div>
        </div>
      </section>
    </>
  )
}

export default Training