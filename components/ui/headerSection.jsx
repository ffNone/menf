 
"use client";
import GradualSpacingDemo from "./gradual-spacing.jsx"
import DestinationForm from "../../app/(form)/destination.jsx"
import BoxRevealDemo from '../ui/box-reveal.jsx'
export default function HeaderSection() {
    return (
        <>
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32   headerSection--1 ">
  <img src="/imgs/bckgrounds/bckg1.png" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
  <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
  </div>
  <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
  </div>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        <GradualSpacingDemo text="Your next destination?"/>
    </h2>
        <BoxRevealDemo content={<DestinationForm />} /> 
     
       {/* <p className="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p> */}
    </div>
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        {/* <a href="#">Open roles <span aria-hidden="true">&rarr;</span></a> */}
        {/* <a href="#">Internship program <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Meet our leadership <span aria-hidden="true">&rarr;</span></a> */}
      </div>
      <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4" style={{textAlign : 'center'}}>
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">Offices worldwide</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">5</dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">Flights per week</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">Hours per week</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">100</dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">Paid time off</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
        
        </>
    )
}