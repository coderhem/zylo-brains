import Image from 'next/image'
import Breadcrumb from '../breadcrumbs/breadCrumbs';

type Props = {
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  imgAlt: string;
  bannerTitle: string;
  bannerOrangeTitle: string;
  description: string;
}

const InnerBanner = ({ imgSrc, imgWidth, imgHeight, imgAlt, bannerTitle, bannerOrangeTitle, description }: Props) => {
  return (
    <>
      <section className='py-12 lg:py-16 relative z-1 before:absolute before:z-1 before:inset-0 before:bg-black/80 overflow-hidden text-white'>
        <Image
          src={imgSrc}
          width={imgWidth}
          height={imgHeight}
          alt={imgAlt}
          className='w-full absolute inset-0 -z-1'
          loading='lazy'
        />
        <div className="container relative z-1">
          {(bannerTitle || description) && (
            <div className="max-w-2xl">
              {bannerTitle &&
                <h1 className='h2'>{bannerTitle} <span className='text-primary'>{bannerOrangeTitle}</span></h1>
              }
              {description &&
                <div dangerouslySetInnerHTML={{ __html: description }} />
              }
            </div>
          )}
          <Breadcrumb />
        </div>
      </section>
    </>
  )
}

export default InnerBanner