'use client';

type Props = {
 isOpen: boolean;
 onClick: () => void;
 title?: string;
 content?: string;
};

const Accordion = ({ isOpen, onClick, title, content }: Props) => {
 return (
  <div className="rounded rounded-bl-0 rounded-br-0 overflow-hidden bg-white accordion-wrapper">
   {/* HEADER */}
   <button
    onClick={onClick}
    className="accordion-button w-full flex justify-between items-center p-4 bg-gray-100 font-semibold cursor-pointer hover:bg-gray-200 transition-colors duration-300"
   >
    <span>{title}</span>

    {/* ICON */}
    <i
     className={`icon-dropdown transition-transform duration-300 ease-in-out origin-center ${isOpen ? 'rotate-180 text-primary' : 'rotate-0'
      }`}
    />
   </button>

   {/* BODY (SMOOTH ANIMATION FIX) */}
   <div
    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-250' : 'max-h-0'
     }`}
   >
    <div className="p-4">
     {content}
    </div>
   </div>

  </div>
 );
};

export default Accordion;