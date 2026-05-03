import React from 'react'

type Props = {
 cardTitle?: string,
 cardDescription: string,
 ctaText?: string,
 ctaLink?: string,
 learnIconClass?: string,
 iconClass?: string,
 bgColor?: string,
 borderColor?: string;
}

const ServiceCard = ({ cardTitle, cardDescription, ctaText, ctaLink, learnIconClass, iconClass, bgColor, borderColor }: Props) => {

 return (
  <div className={`shadow rounded-md bg-white p-8 border-t-4 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group ${borderColor}`} data-aos="fade-up">
   {iconClass &&
    <div className={`${bgColor} inline-flex justify-center items-center size-14 lg:size-16 mb-5 rounded-md transition-all duration-300 group-hover:scale-110 group-hover:shadow`}>
     <i className={`${iconClass || ""} text-2xl`}></i>
    </div>
   }
   {cardTitle &&
    <h3 className='h4 mb-2'>{cardTitle}</h3>
   }
   {cardDescription &&
    <div dangerouslySetInnerHTML={{ __html: cardDescription }} />
   }
   {ctaText &&
    <div className="mt-7">
     <a href={ctaLink} className={`learn-more ${learnIconClass}`}>{ctaText}</a>
    </div>
   }
  </div>
 )
}

export default ServiceCard;