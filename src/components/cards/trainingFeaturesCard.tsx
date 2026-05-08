import Image from 'next/image'
import React from 'react'

type Props = {
 cardLogoSrc?: string,
 logoWidth?: number
 logoHeight?: number
 logoAlt: string
 cardTitle?: string
 description?: string
 cardIconClass?: string
}

const TtrainingFeaturesCard = ({ cardLogoSrc, logoWidth, logoHeight, logoAlt, cardTitle, description, cardIconClass }: Props) => {
 return (
  <div className='bg-white h-full shadow-xl shadow-blue/10 overflow-hidden rounded-md border border-primary/10 px-4 py-5 relative before:absolute before:-bottom-14 before:-right-6 before:rounded-full before:bg-blue/10 before:size-24'>
   <div className="bg-primary/10 p-2 rounded-md inline-block mb-5">
    {cardLogoSrc &&
     <Image
      src={cardLogoSrc}
      width={logoWidth}
      height={logoHeight}
      alt={logoAlt}
     />
    }
    {cardIconClass &&
     <i className={cardIconClass}></i>
    }
   </div>
   <div className="">
    {cardTitle &&
     <h3 className='h4 font-semibold mb-1'>{cardTitle}</h3>
    }
    {description &&
     <div dangerouslySetInnerHTML={{ __html: description }} />
    }
   </div>
  </div>
 )
}

export default TtrainingFeaturesCard