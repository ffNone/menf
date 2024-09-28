'use client'

export default function CustomBooking( {isOpen, onClose} ) {
    const closeModal = (e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      };
    
      if (!isOpen) return null;

    return (
        <>
 
            {/* Main modal */}
            <div   onClick={closeModal} 
                    style={{
                        display: 'flex',
                        background: 'rgba(20, 69, 38, 0.45)',
                        height: "100%"
                    }}
            id="crud-modal" tabIndex="-1" aria-hidden="true" className="  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    {/* Modal content */}
                    <div className="relative   rounded-lg shadow dark:bg-gray-700" style={{backgroundColor:'#011c47fa'}}>
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 main-white--">
                                Book a custom tour
                            </h3>
                            <button   onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <form className="p-4 md:p-5" method="GET"  id="form-custom-booking">
                            <label for="CUSTOM-FROM" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Destination from</label>
                            <div class="flex">
                                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <i class="ph-fill ph-airplane-takeoff" style={{fontSize:'1.1rem'}}></i>
                                </span>
                                <input type="text" id="CUSTOM-FROM" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="Egypt" required />
                            </div>
                                
                            <label for="CUSTOM-TO" style={{marginTop:'10px'}} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Destination to</label>
                            <div class="flex" >
                                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <i class="ph-fill ph-airplane-landing" style={{fontSize:'1.1rem'}}></i>
                                 </span>
                                <input type="text" id="CUSTOM-TO" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Dubai" />
                            </div>


                            <div id='date-custom-container' style={{display:'flex' , gap:'10px' }}>
                                <div className='custom-date-colmn'>

                                    <label for="DATE-FROM" style={{marginTop:'10px'}} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date from</label>
                                    <div className="flex" >
                                        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                        <i class="ph-fill ph-calendar-blank" style={{fontSize:'1.1rem'}}></i>
                                        </span>
                                        <input type="date" min={new Date().toISOString().split('T')[0]} id="DATE-FROM" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required   />
                                    </div>
                                </div>

                                <div className='custom-date-colmn'>

                                    <label for="DATE-TO" style={{marginTop:'10px'}} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date to</label>
                                    <div className="flex"   >
                                        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                        <i  class="ph-fill ph-calendar-blank" style={{fontSize:'1.1rem'}}></i>
                                        </span>
                                        <input type="date" min={new Date().toISOString().split('T')[0]} id="DATE-TO" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required  />
                                    </div>
                                </div>
                            </div>
                            <label for="CUSTOM-SPECIAL-REQUESTS" style={{marginTop:'10px'}} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Special Requests</label>
                            <div class="flex" >

                                 <textarea style={{resize:'none'}} id="CUSTOM-SPECIAL-REQUESTS" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your special requests here"></textarea>
                             </div>
                               

                                {/* <div className="col-span-2">
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                                    <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>                    
                                </div> */}
                
                            <button style={{marginTop:'10px'}} type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                Book Now
                            </button>
                        </form>
                    </div>
                </div>
            </div> 
 
        </>
    )
}
