import InnerBanner from '@/components/innerBanner/innerBanner'
import Image from 'next/image'
import Link from 'next/link'
const About = () => {
 return (
  <>
   <InnerBanner
    imgSrc='/images/banner-image.jpg'
    imgWidth={300}
    imgHeight={300}
    imgAlt='Inner Banner Image'
    bannerTitle='About'
    bannerOrangeTitle='Us'
    description='<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sit sapiente ad rem quam velit odio ullam. Alias obcaecati nam fugit minima maxime voluptates vitae dolorem. Expedita illum asperiores praesentium?</p>'
   />

   <section className='pt-16 pb-28 bg-[url("/images/about-page-bg.svg")] bg-center bg-cover'>
    <div className="container">
     <div className="max-w-3xl mb-10">
      <h2>AI Literacy and <span className='text-primary'>R&D</span></h2>
      <p>ZyloBrains is a software engineering hub and a developer community whose primary objective is to support college graduates, wannabe tech enthusiasts and working professionals connect to future proof AI domains, use cases and integrations. We are a group of passionate developers and consultants with decade of prolific experience who can groom, facilitate R&D implementation and prepare you to achieve brighter career goals. Joining us would fine tune your flair and intensify your ability to make a difference.</p>
      <div className="mt-10">
       <Link href="/contact" className='btn btn-primary'>Get In Touch</Link>
      </div>
     </div>
     <div className="flex justify-between flex-wrap -mx-2">
      <div className="w-full md:w-1/3 lg:w-1/5 px-2">
       <div className="bg-white/20 border border-primary/30 shadow-xl py-5 rounded-full size-60 px-2 text-primary text-center flex flex-col justify-center gap-y-5 relative group hover:scale-105 hover:shadow-primary/20 hover:bg-blue/5 transition-all duration-300">
        <i className="icon-ai size-14 mx-auto bg-primary flex justify-center items-center rounded-full text-3xl text-white group-hover:bg-primary transition-all duration-300 group-hover:scale-105"></i>
        <a href="#" className='stretched-link'>Academia & Corporates →</a>
       </div>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/5 px-2 mt-20">
       <div className="bg-white/20 border border-primary/30 shadow-xl py-5 rounded-full size-60 px-2 text-secondary text-center flex flex-col justify-center gap-y-5 relative group hover:scale-105 hover:shadow-primary/20 hover:bg-secondary/10 transition-all duration-300">
        <i className="icon-ai size-14 mx-auto bg-secondary flex justify-center items-center rounded-full text-3xl text-white transition-all duration-300 group-hover:scale-105"></i>
        <a href="#" className='stretched-link text-secondary'>Academia & Corporates →</a>
       </div>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/5 px-2 mt-10">
       <div className="bg-white/20 border border-primary/30 shadow-xl py-5 rounded-full size-60 px-2 text-primary text-center flex flex-col justify-center gap-y-5 relative group hover:scale-105 hover:shadow-primary/20 hover:bg-dark-blue/10 transition-all duration-300">
        <i className="icon-ai size-14 mx-auto bg-dark-blue flex justify-center items-center rounded-full text-3xl text-white transition-all duration-300 group-hover:scale-105"></i>
        <a href="#" className='stretched-link text-dark-blue'>Academia & Corporates →</a>
       </div>
      </div>
     </div>
    </div>
   </section>
   <section className='pb-10 pt-5'>
    <div className="container">
     <div className="flex justify-between flex-wrap items-center -mx-2 mb-6">
      <div className="w-full lg:w-7/12 px-2">
       <h2>What <span className='text-primary'>We Do</span></h2>
       <p>At ZyloBrains, we bridge the gap between cutting-edge AI research and real-world application. We operate at the intersection of education and innovation, ensuring that the transformative power of Artificial Intelligence is accessible, understandable, and actionable for everyone.</p>
       <ul className='check-list'>
        <li>Elite AI Workshops: We design and deliver high-impact training for colleges, corporate houses, and enterprises. From foundational literacy for students to advanced implementation strategies for executives, our workshops turn complex theory into practical skills.</li>
        <li>Domain-Specific R&D: We don’t just teach AI—we build it. Our internal R&D lab is dedicated to developing bespoke applications across diverse sectors.</li>
       </ul>
      </div>
      <div className="w-full lg:w-4/12 px-2">
       <Image
        src={'/images/about-page-featured-image.png'}
        width={467}
        height={534}
        alt='About Page Featured Image'
       />
      </div>
     </div>
     <div className="flex justify-between flex-wrap items-center -mx-2">
      <div className="w-full lg:w-4/12 px-2">
       <Image
        src={'/images/about-page-featured-image.png'}
        width={467}
        height={534}
        alt='About Page Featured Image'
       />
      </div>
      <div className="w-full lg:w-7/12 px-2">
       <h2>What <span className='text-primary'>We Do</span></h2>
       <p>At ZyloBrains, we bridge the gap between cutting-edge AI research and real-world application. We operate at the intersection of education and innovation, ensuring that the transformative power of Artificial Intelligence is accessible, understandable, and actionable for everyone.</p>
       <ul className='check-list'>
        <li>Elite AI Workshops: We design and deliver high-impact training for colleges, corporate houses, and enterprises. From foundational literacy for students to advanced implementation strategies for executives, our workshops turn complex theory into practical skills.</li>
        <li>Domain-Specific R&D: We don’t just teach AI—we build it. Our internal R&D lab is dedicated to developing bespoke applications across diverse sectors.</li>
       </ul>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default About
