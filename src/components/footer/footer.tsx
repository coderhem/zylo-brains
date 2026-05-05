import Image from 'next/image'
import Data from '@/api/data.json'
type Props = {
 iconClass: string,
 iconLink: string
 date: string
}
const Footer = ({ iconClass }: Props) => {
 return (
  <footer className='pt-14 bg-linear-to-r from-dark-blue to-light-blue text-white' data-aos="fade-up">
   <div className="container">
    <div className="flex gap-y-9 flex-wrap justify-between -mx-5 py-3 text-white/80 mb-6">
     <div className="w-full md:w-1/2 lg:w-1/3 px-5">
      <Image
       src={'/images/logo.png'}
       width={300}
       height={200}
       alt='Footer Logo'
       className='max-w-48 mb-4'
      />
      <p>Transforming businesses through innovative technology solutions and expert guidance.</p>
      {Data.footerLinks?.length > 0 && (
       <ul className='flex gap-4 mt-7'>
        {Data.footerLinks[0].socialLinks.map((item, index) => (
         <li key={index}>
          <a href={item.iconLink} className='transition-all duration-300 bg-white/10 hover:bg-primary focus:bg-primary ring-1 ring-transparent focus:ring-white active:bg-primary size-11 flex justify-center items-center rounded-lg text-white text-xl'>
           <i className={`${item.iconClass}`}></i>
          </a>
         </li>
        ))}
       </ul>
      )}
     </div>
     <div className="w-full md:w-1/3 lg:w-1/6 px-5">
      <h2 className='h4 mb-5'>Quick Links</h2>
      {Data.footerLinks?.length > 0 && (
       <ul className='flex flex-col gap-y-4'>
        {Data.footerLinks[0].quickLinks.map((item, index) => (
         <li key={index}>
          <a href={item.link} className='inline-block transition-all duration-300 hover:translate-x-1 text-white hover:text-primary'>
           {item.linkText}
          </a>
         </li>
        ))}
       </ul>
      )}
     </div>
     <div className="w-full md:w-1/3 lg:w-1/6 px-5">
      <h2 className='h4 mb-5'>Services</h2>
      {Data.footerLinks?.length > 0 && (
       <ul className='flex flex-col gap-y-4'>
        {Data.footerLinks[0].servicesLinks.map((item, index) => (
         <li key={index}>
          <a href={item.link} className='inline-block transition-all duration-300 hover:translate-x-1 text-white hover:text-primary'>
           {item.linkText}
          </a>
         </li>
        ))}
       </ul>
      )}
     </div>
     <div className="w-full md:w-1/2 lg:w-1/3 px-5">
      <h2 className='h4 mb-5'>Contact Us</h2>
      {Data.footerLinks?.length > 0 && (
       <ul className='flex flex-col gap-y-4'>
        {Data.footerLinks[0].contactLinks.map((item, index) => (
         <li key={index} className='flex gap-3 items-center relative transition-all duration-300 hover:translate-x-1'>
          <i className={`${item.iconClass} bg-white/30 size-10 flex justify-center items-center rounded-md`}></i>
          <a href={item.link} className='stretched-link text-white hover:text-primary flex-1'>
           {item.linkText}
          </a>
         </li>
        ))}
       </ul>
      )}
      {/* <div className="max-w-96 max-h-60 overflow-hidden mt-6">
       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12238.298726003552!2d85.342017!3d27.67206!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190072e1ed4b%3A0x8c719479c4794dac!2sZyloBrains%20Pvt.%20Ltd.!5e1!3m2!1sen!2snp!4v1777973146751!5m2!1sen!2snp" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer"></iframe>
      </div> */}
     </div>
    </div>
    <div className="flex flex-wrap gap-y-6 justify-between gap-2 border-t border-white/10 py-5">
     <div className="[&_p]:mb-0 text-white/80">
      <p>&copy;  {new Date().getFullYear()} Zylo Brains. All rights reserved.</p>
     </div>
     <div className="flex">
      <a href="#" className='relative pr-3 sm:pr-5 before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:size-1.5 before:rounded-full before:bg-white/40'>Privacy Policy</a>
      <a href="#" className='pl-2 sm:pl-5'>Terms and Conditions</a>
     </div>
    </div>
   </div>
  </footer>
 )
}

export default Footer
