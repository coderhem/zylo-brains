'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
 const pathname = usePathname();

 const pathArray = pathname.split("/").filter(Boolean);

 return (
  <div className="flex gap-2 items-center">

   {/* Home */}
   <Link href="/">Home</Link>

   {pathArray.map((item, index) => {
    const href = "/" + pathArray.slice(0, index + 1).join("/");

    return (
     <div key={index} className="flex gap-2 items-center">

      <i className="icon-arrow-right" />

      {index === pathArray.length - 1 ? (
       <span className="capitalize">{item}</span>
      ) : (
       <Link href={href} className="capitalize">
        {item}
       </Link>
      )}

     </div>
    );
   })}
  </div>
 );
};

export default Breadcrumb;