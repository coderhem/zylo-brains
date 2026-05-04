import React from 'react'

type Props = {
 rating: number
 description: string,
 nameText: string,
 clientName: string,
 post: string,
}

const TestimonialCard = ({ rating, description, nameText, clientName, post }: Props) => {
 const fullStars = Math.floor(rating)
 const hasHalfStar = rating % 1 !== 0
 const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

 return (
  <div className="h-full shadow-lg shadow-secondary/10 border border-secondary/10 rounded-md py-6.5 px-4 relative before:absolute before:right-4 before:top-1 before:content-['\e978'] before:font-icomoon before:text-6xl before:text-secondary/20">
   {rating &&
    <div className="flex gap-2 text-star-gold mb-5">
     {/* Full Stars */}
     {Array.from({ length: fullStars }).map((_, i) => (
      <i key={`full-${i}`} className="icon-star-full"></i>
     ))}

     {/* Half Star */}
     {hasHalfStar && (
      <i className="icon-star-half"></i>
     )}

     {/* Empty Stars */}
     {Array.from({ length: emptyStars }).map((_, i) => (
      <i key={`empty-${i}`} className="icon-star-empty"></i>
     ))}
    </div>
   }
   {description &&
    <div dangerouslySetInnerHTML={{ __html: description }} className='text-dark/90' />
   }
   <div className="flex items-center gap-4">
    {nameText &&
     <span className='font-raleway size-10 bg-primary inline-flex justify-center items-center rounded-full text-white font-bold text-xl'>{nameText}</span>
    }
    {(clientName || post) &&
     <div className="flex flex-col">
      <span className='font-semibold'>{clientName}</span>
      <span className='text-dark/80'>{post}</span>
     </div>
    }
   </div>
  </div>
 )
}

export default TestimonialCard