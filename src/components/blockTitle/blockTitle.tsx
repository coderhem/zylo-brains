type Props = {
 title?: string,
 description?: string,
 orangeText?: string,
 customClass?: string,
}

const BlockTitle = ({ title, description, orangeText, customClass }: Props) => {
 if(!title && !description) return null;
 return (
  <div className={`${customClass}`}>
   {title &&
    <h2>{title} <span className="text-primary">{orangeText}</span></h2>
   }
   {description &&
    <div dangerouslySetInnerHTML={{ __html: description }} />
   }
  </div>
 )
}

export default BlockTitle;