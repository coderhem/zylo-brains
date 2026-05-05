import Image from "next/image"
import Data from "@/api/data.json"
import FancyboxWrapper from "@/hooks/fancyBox"
import PopupForm from "../forms/popupForm"
type Props = {
  customClass?: string,
  cardTitle?: string,
  timeIcon?: string,
  time?: string,
  userIcon?: string,
  students?: string,
  cardLink?: string,
  list?: [],
}

const TrainingCard = ({ customClass, cardTitle, timeIcon, time, userIcon, students, cardLink }: Props) => {
  return (
    <div className={`${customClass} relative border border-secondary/30 rounded-xl transition-all duration-300 bg-white shadow hover:shadow-xl`}>
      <div className="mb-5">
        <Image
          src={'/images/banner-image.jpg'}
          width={300}
          height={300}
          alt="Featured Image"
          className="rounded-tl-xl rounded-tr-xl"
        />
      </div>
      <div className="px-4 pb-4">
        {cardTitle &&
          <h2 className="h5 mb-3 font-lato font-semibold">{cardTitle}</h2>
        }
        <div className="flex gap-4 items-center text-primary font-medium text-sm">
          <div className="flex gap-1 items-center">
            <i className={`${timeIcon}`}></i>
            <span>{time}</span>
          </div>
          <div className="flex gap-1 items-center">
            <i className={`${userIcon}`}></i>
            <span>{students}</span>
          </div>
        </div>
        <ul className="flex gap-2 flex-wrap pt-3 [&_li]:relative [&_li]:pl-6 [&_li]:before:absolute [&_li]:before:size-2 [&_li]:before:left-0 [&_li]:before:font-icomoon [&_li]:before:content-['\e9b8'] [&_li]:before:text-gold">
          {Data.trainingData[0].languageList.map((item, index) => (
            <li key={index}>
              {typeof item === "string" ? item : item.name}
            </li>
          ))}
        </ul>
      </div>
      <a href={cardLink} className="stretched-link" data-fancybox></a>
      <div className="absolute -right-3 -top-3 bg-primary text-white rounded-full py-1 px-3">
        <span className="font-semibold text-sm">Internship Available</span>
      </div>
      <FancyboxWrapper>
        <div className="hidden max-w-full mx-auto" id='contact'>
          <PopupForm />
        </div>
      </FancyboxWrapper>
    </div>
  )
}

export default TrainingCard