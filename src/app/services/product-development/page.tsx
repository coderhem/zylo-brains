import BlockTitle from '@/components/blockTitle/blockTitle'
import ServiceCard from '@/components/cards/serviceCard'
import Data from '@/api/data.json'
import Banner from '@/components/banner/banner'
import InnerBanner from '@/components/innerBanner/innerBanner'

type Props = {
 currentPage: number;
}

const Page = ({ currentPage }: Props) => {
 return (
  <>
   <InnerBanner
    imgSrc='/images/banner-image.jpg'
    imgWidth={300}
    imgHeight={300}
    imgAlt='Inner Banner Image'
    bannerTitle='Product'
    bannerOrangeTitle='Development'
    description='<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sit sapiente ad rem quam velit odio ullam. Alias obcaecati nam fugit minima maxime voluptates vitae dolorem. Expedita illum asperiores praesentium?</p>'
   />

   <section className="py-16 bg-linear-to-tr from-primary/5 to-transparent">
    <div className="container" data-aos="fade-up">
     <BlockTitle
      title="Our"
      orangeText="Services"
      description="We are a forward-thinking IT solutions company specializing in web development, mobile applications, UI/UX design, and digital transformation services. Our mission is to empower businesses with cutting-edge technology and deliver high-quality digital experiences that create real impact."
      customClass="text-center max-w-3xl mx-auto text-dark mb-10"
     />
     <div className="flex flex-wrap gap-y-6 -mx-3">
      {Data.serviceData.map((item, index) => (
       <div className="w-full md:w-1/2 lg:w-1/3 px-3" key={index}>
        <ServiceCard
         cardTitle={item.cardTitle}
         cardDescription={item.cardDescription}
         ctaText={item.ctaText}
         ctaLink={item.ctaLink}
         iconClass={item.iconClass}
         bgColor={item.bgColor}
         borderColor={item.borderColor}
         learnIconClass={item.learnIconClass}
         currentPage={currentPage}
        />
       </div>
      ))}
     </div>
    </div>
   </section>
  </>
 )
}

export default Page