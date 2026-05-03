type Props = {
 headingContent?: string,
 content?: string,
 iconClass?: string,
 bgColor?: string,
 iconBgColor?: string,
}

const AchivementCard = ({ headingContent, content, iconClass, bgColor, iconBgColor }: Props) => {
  if(!iconClass && !headingContent && content) return null;

 return (
  <div className={`${bgColor} py-8 px-4 rounded-md text-center shadow border border-white/30`}>
   {iconClass &&
    <div className={`${iconBgColor} inline-flex justify-center items-center size-14 rounded-md mb-3`}>
     <i className={iconClass}></i>
    </div>
   }
   {headingContent &&
    <h2 className="mb-1 font-lato text-white/90">{headingContent}</h2>
   }
   {content &&
    <span className="font-semibold text-white/90 text-lg">{content}</span>
   }
  </div>
 )
}

export default AchivementCard;