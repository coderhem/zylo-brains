'use client';
import { useRef } from "react";
import Data from "@/api/data.json";


type Props = {
  isOpen: boolean;
  onClick: () => void;
  title?: string;
  content?: string;
  listData?: ListItem[];
};

type ListItem = {
  listContent: string;
  subList?: ListItem[];
};

const Accordion = ({ isOpen, onClick, title, content, listData }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="rounded rounded-bl-0 rounded-br-0 overflow-hidden bg-white accordion-wrapper">
      {/* HEADER */}
      <button onClick={onClick} className={`${isOpen ? 'bg-secondary! text-white' : ''} accordion-button w-full flex justify-between items-center p-4 bg-gray-100 font-semibold cursor-pointer hover:bg-gray-200 transition-colors duration-300`}>
        <span>{title}</span>
        {/* ICON */}
        <i className={`icon-dropdown transition-transform duration-300 ease-in-out origin-center ${isOpen ? 'rotate-180 text-white' : 'rotate-0 text-primary'}`} />
      </button>

      {/* BODY (SMOOTH ANIMATION FIX) */}
      <div ref={contentRef} style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px', }} className="overflow-hidden transition-all duration-500 ease-in-out bg-white border-b border-secondary/30">
        <div className="p-4">
          {content}
          {(listData?.length ?? 0) > 0 && (
            <ul className="list-disc pl-6">
              {listData?.map((item, index) => (
                <li key={index}>
                  {item.listContent}

                  {/* Sub list */}
                  {item.subList?.length && (
                    <ul className="pl-4 mt-2">
                      {item.subList.map((subItem, subIndex) => (
                        <li key={subIndex} className="pl-3 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-1.5 before:bg-transparent before:border">{subItem.listContent}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;