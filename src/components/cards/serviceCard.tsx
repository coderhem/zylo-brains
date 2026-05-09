import React from 'react'
import PopupForm from '../forms/popupForm';
import FancyboxWrapper from '@/hooks/fancyBox';

type Props = {
 cardTitle?: string,
 cardTitleClass?: string,
 cardDescription: string,
 ctaText?: string,
 ctaLink?: string,
 learnIconClass?: string,
 iconClass?: string,
 bgColor?: string,
 borderColor?: string;
 category?: string;
 iconText?: string;
 currentPage: number;
}

const ServiceCard = ({ cardTitle, currentPage, cardTitleClass, cardDescription, ctaText, ctaLink, learnIconClass, iconClass, bgColor, borderColor, category, iconText, }: Props) => {

 return (
  <div className={`shadow rounded-md bg-white p-8 border-t-4 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group h-full ${borderColor}`}>
   {iconClass &&
    <div className={`${bgColor} inline-flex justify-center items-center size-14 lg:size-16 mb-5 rounded-md transition-all duration-300 group-hover:scale-110 group-hover:shadow`}>
     {iconClass &&
      <i className={`${iconClass || ""} text-2xl`}></i>
     }
    </div>
   }
   {iconText &&
    <div className={`${bgColor} inline-flex justify-center items-center min-w-20 p-3 w-max mb-5 rounded-md transition-all duration-300 group-hover:scale-110 group-hover:shadow`}>
     {iconText &&
      <span className={`font-extrabold text-xl`}>{iconText}</span>
     }
    </div>
   }
   {cardTitle &&
    <h4 className={`mb-2 ${cardTitleClass}`}>{cardTitle}</h4>
   }
   {cardDescription &&
    <div dangerouslySetInnerHTML={{ __html: cardDescription }} />
   }
   {ctaText &&
    <div className="mt-7">
     <a href={ctaLink} className={`learn-more ${learnIconClass}`} data-fancybox>{ctaText}</a>
    </div>
   }
   <FancyboxWrapper currentPage={currentPage}>
    <div className="hidden max-w-full mx-auto p-2!" id='inquery'>
     <PopupForm
      formTitle="Inquiry Form"
      orangeText="Fill Out the"
      description="<p>Please fill in your details and let us know your service requirements. Our team will contact you shortly.</p>"
     />
    </div>
   </FancyboxWrapper>
  </div>
 )
}

export default ServiceCard;