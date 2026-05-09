import InnerBanner from '@/components/innerBanner/innerBanner'
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
  </>
 )
}

export default About
