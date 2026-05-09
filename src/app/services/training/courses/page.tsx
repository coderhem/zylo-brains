'use client';
import BlockTitle from '@/components/blockTitle/blockTitle';
import React, { useState } from 'react';
import Data from '@/api/data.json';
import Accordion from '@/components/accordions/accordion';
import { tuple } from 'zod';
import FancyboxWrapper from '@/hooks/fancyBox';
import PopupForm from '@/components/forms/popupForm';
type Props = {
  currentPage: number
}

const Courses = ({ currentPage }: Props) => {
  const [activeFilter, setActiveFilter] = useState(
    Data.accordionButtonData?.[0]?.accordionBtn || 'Internship'
  )
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  return (
    <>
      <section className='pt-10'>
        <div className="container">
          <BlockTitle
            title='Course'
            orangeText='Details'
          />
          <div className="flex gap-6 mb-10 overflow-auto custom-scroll-blue pt-4 pb-6">
            {Data.accordionButtonData.map((item, index) => (
              <button onClick={() => setActiveFilter(item.accordionBtn)} className={`accordion-btn btn btn-blue ${activeFilter === item.accordionBtn ? 'active' : ''
                }`} key={index}>{item.accordionBtn}</button>
            ))}
          </div>
        </div>
      </section>
      <section className='bg-white py-6'>
        <div className="container">
          <BlockTitle
            title='Course'
            orangeText='Overview'
            description='The DSA with AI Engineer Program at Naresh IT is designed to build strong algorithmic foundations while preparing learners for modern AI-driven careers. This program combines Data Structures & Algorithms (DSA) with practical exposure to Artificial Intelligence concepts, enabling students to solve complex problems efficiently and build intelligent solutions. Learners will strengthen their coding skills, logical thinking, and analytical abilities while understanding how AI systems are structured and optimized. The course follows industry-relevant standards and real-world scenarios to ensure learners are prepared for technical interviews and AI-focused development roles. It is an ideal pathway for aspiring AI Engineers who want both core programming strength and future-ready skills.'
            customClass='[&_h2]:text-2xl text-sm'
          />
        </div>
      </section>
      <section className='py-9'>
        <div className="container">
          <BlockTitle
            title='Motive'
            description='The DSA with AI Engineer Program at Naresh IT is designed to build strong algorithmic foundations while preparing learners for modern AI-driven careers. This program combines Data Structures & Algorithms (DSA) with practical exposure to Artificial Intelligence concepts, enabling students to solve complex problems efficiently and build intelligent solutions. Learners will strengthen their coding skills, logical thinking, and analytical abilities while understanding how AI systems are structured and optimized. The course follows industry-relevant standards and real-world scenarios to ensure learners are prepared for technical interviews and AI-focused development roles. It is an ideal pathway for aspiring AI Engineers who want both core programming strength and future-ready skills.'
            customClass='[&_h2]:text-2xl text-sm'
          />
        </div>
      </section>
      <section className='bg-white py-4'>
        <div className="container">
          <BlockTitle
            title='Prerequisites'
            description='The DSA with AI Engineer Program at Naresh IT is designed to build strong algorithmic foundations while preparing learners for modern AI-driven careers. This program combines Data Structures & Algorithms (DSA) with practical exposure to Artificial Intelligence concepts, enabling students to solve complex problems efficiently and build intelligent solutions. Learners will strengthen their coding skills, logical thinking, and analytical abilities while understanding how AI systems are structured and optimized. The course follows industry-relevant standards and real-world scenarios to ensure learners are prepared for technical interviews and AI-focused development roles. It is an ideal pathway for aspiring AI Engineers who want both core programming strength and future-ready skills.'
            customClass='[&_h2]:text-2xl text-sm'
          />
        </div>
      </section>
      <section className='py-5 lg:py-7'>
        <div className="container">
          <BlockTitle
            title='Course'
            orangeText='Content'
            description='<p>Full Stack Development</p>'
            customClass='[&_h2]:mb-0 [&_p]:text-black/70 [&_h2]:text-2xl text-sm'
          />
        </div>
        <div className="container">
          <div className="border border-dark-blue/60 rounded">
            {Data.accordionData?.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                content={item.content}
                listData={item.listData}
                isOpen={activeIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="#inquery" className='btn btn-primary' data-fancybox>Join Now</a>
          </div>
          <FancyboxWrapper currentPage={currentPage}>
            <div className="hidden max-w-full mx-auto" id='inquery'>
              <PopupForm
                orangeText="Fill Out the"
                formTitle="Inquiry Form"
                description="Please fill in your details and let us know your service requirements. Our team will contact you shortly."
              />
            </div>
          </FancyboxWrapper>
        </div>
      </section>
    </>
  )
}

export default Courses