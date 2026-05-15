import AchivementCard from '@/components/cards/achivementCard'
import InnerBanner from '@/components/innerBanner/innerBanner'
import Data from '@/api/data.json'
import BlockTitle from '@/components/blockTitle/blockTitle'
import Image from 'next/image'

type Props = {}

const Page = (props: Props) => {
 return (
  <>
   <InnerBanner
    imgSrc='/images/banner-image.jpg'
    imgWidth={300}
    imgHeight={300}
    imgAlt='Inner Banner Image'
    bannerTitle='portfolio '
    description='<p>Showcasing successful projects that transformed businesses and delighted users</p>'
   />
   <section className='pt-14'>
    <div className="container">
     <BlockTitle
      title='Our'
      orangeText='Achievements'
      description='Discover innovative web, mobile, cloud, AI/ML, and e-commerce projects built with modern technologies and real-world solutions.'
      customClass='max-w-3xl mb-10'
     />
     <div className="flex gap-y-7 flex-wrap -mx-3 text-white">
      {Data.achivementData.map((item, index) => (
       <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3" data-aos="fade-right" key={index}>
        <AchivementCard
         bgColor={item.bgColor}
         iconBgColor={item.iconBgColor}
         headingContent={item.headingContent}
         content={item.content}
         iconClass={item.iconClass}
        />
       </div>
      ))}
     </div>

    </div>
   </section>
   <section className='py-14'>
    <div className="container">
     <BlockTitle
      title='Featured'
      orangeText='Projects'
      description='Discover innovative web, mobile, cloud, AI/ML, and e-commerce projects built with modern technologies and real-world solutions.'
      customClass='max-w-3xl mb-10'
     />
     <div className="flex -mx-3 mb-10">
      <div className="w-full md:w-1/2 lg:w-1/3 px-3">
       <div className="shadow border border-primary/20 rounded">
        <Image
         src={'/images/portfolio-card-img.jpg'}
         width={800}
         height={600}
         alt='Card Image'
         className='w-full'
        />
        <div className="px-4 pt-6 pb-5">
         <h2 className='h5'>E-Commerce Platform</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quos in rerum officiis modi necessitatibus, maxime distinctio nihil aut sunt temporibus culpa? Fuga rerum nam tempora libero, voluptatem illo mollitia.</p>
         <div className="flex gap-3 mb-5">
          <span className='bg-primary p-1 rounded text-white'>Node</span>
          <span className='bg-primary p-1 rounded text-white'>Node</span>
          <span className='bg-primary p-1 rounded text-white'>Node</span>
         </div>
         <a href="#" className='learn-more'>Learn More</a>
        </div>
       </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-3">
       <div className="shadow border border-primary/20 rounded">
        <Image
         src={'/images/portfolio-card-img.jpg'}
         width={800}
         height={600}
         alt='Card Image'
         className='w-full'
        />
        <div className="px-4 pt-6 pb-5">
         <h2 className='h5'>E-Commerce Platform</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quos in rerum officiis modi necessitatibus, maxime distinctio nihil aut sunt temporibus culpa? Fuga rerum nam tempora libero, voluptatem illo mollitia.</p>
         <div className="flex gap-3 mb-5">
          <span className='bg-primary p-1 rounded text-white'>Node</span>
          <span className='bg-primary p-1 rounded text-white'>Node</span>
          <span className='bg-primary p-1 rounded text-white'>Node</span>
         </div>
         <a href="#" className='learn-more'>Learn More</a>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default Page