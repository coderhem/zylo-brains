'use client';
import BlockTitle from '@/components/blockTitle/blockTitle'
import InnerBanner from '@/components/innerBanner/innerBanner'
import Image from 'next/image'
import Link from 'next/link'
import Data from '@/api/data.json'
import FancyboxWrapper from '@/hooks/fancyBox'
import CareerPopupForm from '@/components/forms/careerPopupForm'
import { useState } from 'react'

type Props = {
  imgSrc?: string
  imgWidth: number
  imgHeight: number
  imgAlt: string
  imgCustomClass?: string
  position?: string
  description?: string
  btnText?: string
  btnLink?: string
  jobCategory?: string
  jobType?: string
  experienceTime?: string
  time?: string
  location?: string
  jobLocation?: string
  currentPage: number
  vacancyNumber: number
  vacancyNumberType: string
  salary: string
  qualificationTitle: string
  qualification: string
  listText: string
}

const Careers = ({ currentPage, vacancyNumber, imgSrc, imgWidth, imgHeight, imgAlt, imgCustomClass, description, btnText, btnLink, jobType, jobCategory, experienceTime, time, location, jobLocation, vacancyNumberType, salary, qualificationTitle, qualification, listText }: Props) => {

  const [position, setPosition] = useState("");
  const [selectedJob, setSelectedJob] = useState("");
  return (
    <>
      <InnerBanner
        imgSrc='/images/banner-image.jpg'
        imgWidth={300}
        imgHeight={300}
        imgAlt='Inner Banner Image'
        bannerTitle='Careers'
        // bannerOrangeTitle='Us'
        description='<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sit sapiente ad rem quam velit odio ullam. Alias obcaecati nam fugit minima maxime voluptates vitae dolorem. Expedita illum asperiores praesentium?</p>'
      />
      <section className='py-10 md:py-16 lg:py-20'>
        <div className="container">
          <BlockTitle
            orangeText='Open Positions'
            title='Recent'
            description='We’re looking for talented and motivated individuals to join our growing team. Discover opportunities where you can develop your skills, work on meaningful projects, and grow your career in a collaborative environment.'
            customClass='max-w-3xl mb-10'
          />
          <div className="flex flex-wrap gap-y-4 -mx-2">
            {Data.careerCardData.map((item, index) => (
              <div className="w-full sm:w-1/2 lg:w-1/3 px-2" key={index}>
                <div className="border border-secondary/20 px-4 pt-5 rounded position-card relative before:absolute before:inset-0 before:-z-1 before:bg-[url('/images/card-corner.png')] before:opacity-10 before:bg-cover h-full">
                  {item?.position && (
                    <h2 className='h4 mb-3'>{item.position}</h2>
                  )}
                  <strong className='text-base font-semibold underline mb-1 inline-block text-secondary'>Key Responsibilities</strong>
                  <ul className='check-list mb-5'>
                    {item?.responsibilities?.map((Repitem, index) => (
                      <li className='before:text-blue! text-xs mb-1!' key={index}>{Repitem.listText}</li>
                    ))}
                  </ul>

                  <div className="pb-5 text-dark/80 text-xs flex flex-wrap gap-y-2 -mx-3">
                    {item?.listContent?.map((Listitem, index) => (
                      <div className='px-3' key={index}>
                        {Listitem?.titleText && (
                          <strong className='text-blue'> {Listitem.titleText} : </strong>
                        )}
                        {Listitem?.descriptionText && (
                          <span className='text-[10px]'>{Listitem.descriptionText}</span>
                        )}
                      </div>
                    ))
                    }
                  </div>
                  {item?.btnLink && (
                    <div className="mb-5">
                      <a href={item.btnLink} onClick={() => {
                        setSelectedJob(item.position)
                      }} data-fancybox className='btn btn-blue flex items-center gap-2'>
                        {item.btnText}
                        <i className="icon-arrow-right"></i></a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <FancyboxWrapper currentPage={currentPage}>
            <div className="hidden max-w-full mx-auto" id='apply'>
              <CareerPopupForm
                orangeText="Apply for"
                formTitle="This Position"
                description="Submit your application by filling out the form below. Please provide your updated details and resume. Our hiring team will review your application and contact shortlisted candidates shortly."
                position={selectedJob}
              />
            </div>
          </FancyboxWrapper>
        </div>
      </section>
    </>
  )
}

export default Careers