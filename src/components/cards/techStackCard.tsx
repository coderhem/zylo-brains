import Image from 'next/image'
import React from 'react'

type Props = {
  imgSrc: string,
  imgWidth: number,
  imgHeight: number,
  imgAlt: string,
  iconSvg?: string,
  svgClass?: string,
  iconTitle?: string,
}

const TechStackCard = ({ imgSrc, imgWidth, imgHeight, imgAlt, iconSvg, svgClass, iconTitle }: Props) => {
  return (
    <div className='shadow bg-white h-full hover:shadow-primary/20 hover:bg-white hover:scale-105 group px-4 py-3 rounded border border-primary/20 transition-all duration-500 hover:shadow-xl'>
      {imgSrc &&
        <div className="flex justify-center mb-3">
          <Image
            src={imgSrc}
            width={imgWidth}
            height={imgHeight}
            alt={imgAlt}
            className='group-hover:grayscale-0 transition-all duration-500'
          />
        </div>
      }
      {iconSvg &&
        <span className={svgClass}>{iconSvg}</span>
      }
      <div className="text-center font-semibold">
        <span>{iconTitle}</span>
      </div>
    </div>
  )
}

export default TechStackCard