'use client';

import { useState } from 'react';
import Header from './header/header';
import Footer from './footer/footer';

export default function LayoutClient({ children }: any) {
 const [headerHeight, setHeaderHeight] = useState(0);

 return (
  <>
   <Header passHeaderHeight={setHeaderHeight} />
   <main style={{ marginTop: `${headerHeight}px` }} className='grow'>
    {children}
   </main>
   <Footer />
  </>
 );
}