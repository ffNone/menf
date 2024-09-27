import  HeaderSection  from '@/components/ui/headerSection'
import Newsletter from './partials/newsletter'
import About from './partials/about'
import NumberTickerDemo from '@/components/ui/numberTicker'
import RetroGridDemo from '@/components/ui/retroGrid'
import {Heading} from '@/components/ui/flowbite/headings'
export default function Home() {
 
  return (
      <>
 
        <HeaderSection />
        <About/>
       
      

      
        <RetroGridDemo 
        style={{
          backgroundColor: '#363d39fc'
        }}
        content={        
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '70px',
            columnGap: '120px',
            rowGap: '32px'
          }}>
            <div>
            <Heading.h2 style={{color: '#00ff92'}}>Customers</Heading.h2>

            <NumberTickerDemo title="K+" style={{color: '#00ff92'}} value={100}/>
            </div>
            <div>
            <Heading.h2 style={{color: '#00ff92'}}>Social Media</Heading.h2>
            <NumberTickerDemo title="K+" style={{color: '#00ff92' }} value={50}/>
            </div>
            <div>
            <Heading.h2 style={{color: '#00ff92'}}>Branches</Heading.h2>
            <NumberTickerDemo  value={5}/>
            </div>
          </div>
        } />
          <Newsletter/>
        {/* <MarqueeDemo/> */}
   
      </>
    
  );
}
 
