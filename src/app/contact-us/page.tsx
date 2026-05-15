import InnerBanner from '@/components/innerBanner/innerBanner'
import Data from '@/api/data.json'
import PopupForm from '@/components/forms/popupForm'
import Image from 'next/image'

type Props = {
  anchorLink: string
  achorText: string
  iconClass: string
}

const Contact = ({ anchorLink, achorText, iconClass }: Props) => {
  return (
    <>
      <InnerBanner
        imgSrc='/images/banner-image.jpg'
        imgWidth={300}
        imgHeight={300}
        imgAlt='Inner Banner Image'
        bannerTitle='Contact '
        bannerOrangeTitle='Us'
        description='<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sit sapiente ad rem quam velit odio ullam. Alias obcaecati nam fugit minima maxime voluptates vitae dolorem. Expedita illum asperiores praesentium?</p>'
      />
      <section className='contact-form py-12 bg-primary/5'>
        <div className="container">
          <div className="flex items-center flex-wrap gap-y-10 -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <div className="mb-10">
                <h2>Get In <span className='text-primary'>Touch</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem delectus blanditiis similique rerum iusto cum maxime eligendi. Ratione, similique voluptate, nihil animi aperiam odio iusto consequatur, minima amet ipsam ipsum?</p>
              </div>
              {Data.contactPageData?.length > 0 && (
                <ul className='flex flex-col gap-y-6'>
                  {Data.contactPageData.map((item, index) => (
                    <li key={index}>
                      <a href={item.anchorLink} className='inline-flex items-center gap-4 group text-secondary hover:text-secondary/80'>
                        <i className={`${item.iconClass} bg-secondary/20 group-hover:bg-secondary group-hover:text-white transition-all duration-300 text-secondary size-10 flex justify-center items-center rounded`}></i>
                        <span>{item.achorText}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {/* <div className="mt-10 max-h-54 overflow-hidden">
                <Image
                  src={'/images/form-bg-image.png'}
                  width={400}
                  height={500}
                  alt="Form Image"
                  className="w-full"
                />
              </div> */}
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-white p-4 rounded-md">
                <PopupForm
                  formTitle='Inquiry Form'
                  orangeText='Fill Out the'
                  description='Please fill in your details and let us know your service requirements. Our team will contact you shortly.'
                />
              </div>
            </div>
          </div>
          <div className="mt-10 [&_iframe]:w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12238.298726003552!2d85.342017!3d27.67206!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190072e1ed4b%3A0x8c719479c4794dac!2sZyloBrains%20Pvt.%20Ltd.!5e1!3m2!1sen!2snp!4v1778577285666!5m2!1sen!2snp" width="600" height="450" style={{ border: '0' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
