import  HeaderSection  from '@/components/ui/headerSection'
import Newsletter from './partials/newsletter'
import About from './partials/about'
import NumberTickerDemo from '@/components/ui/numberTicker'
import RetroGridDemo from '@/components/ui/retroGrid'
import {Heading} from '@/components/ui/flowbite/headings'
import Divider from '@/components/ui/divider'
export default function Home() {
 
  return (
      <>
 
        <HeaderSection />

        <Divider text="About us" style={{color:'white' , zIndex : '1' , backgroundColor : 'rgb(17 24 39 / 1)'}} />
       <About/> 
       
      

      
        <Divider text="Our Stats" style={{color:'white' , zIndex : '1' , backgroundColor : 'rgb(17 24 39 / 1)'}} />
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

            <NumberTickerDemo title="K+" style={{color: '#00ff92' , textWrap : 'nowrap'}} value={100}/>
            </div>
            <div>
            <Heading.h2 style={{color: '#00ff92'}}>Social Media</Heading.h2>
            <NumberTickerDemo title="K+" style={{color: '#00ff92' , textWrap : 'nowrap' }} value={50}/>
            </div>
            <div>
            <Heading.h2 style={{color: '#00ff92' , textWrap : 'nowrap'}}>Branches</Heading.h2>
            <NumberTickerDemo  value={5}/>
            </div>
          </div>
        } />
                <Divider text="Newsletter" style={{color:'white' , zIndex : '1' , backgroundColor : 'rgb(17 24 39 / 1)'}} />
          <Newsletter/>
        {/* <MarqueeDemo/> */}
   
      </>
    
  );
}
 
