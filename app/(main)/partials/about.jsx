"use client"; 
import   VidDialog1  from "@/components/ui/vid-dialog1"
import {DotPatternDemo} from "@/components/ui/dotPattern";
import { useState } from "react";
import {WordFadeInDemo }from "@/components/ui/wordFadeIn";
export default function About() {
  // State to track which accordion item is open
  const [openAccordionId, setOpenAccordionId] = useState(null);

  // Toggle accordion function
  const toggleAccordion = (id) => {
    if (openAccordionId === id) {
      setOpenAccordionId(null); // Close the currently open accordion
    } else {
      setOpenAccordionId(id); // Open the selected accordion
    }
  };

  const posts = [
    {
      id: 1,
      Q: "What services are offered for Hajj, Umrah, and domestic tourism in Egypt?",
      A:
        "We specialize in organizing trips to the most beautiful and renowned Egyptian tourist sites. Our services include organizing tours for individuals and groups, both in Egypt and around the world. Additionally, we provide specialized services for Hajj and Umrah pilgrimages.",
    },
    {
      id: 2,
      Q: " How can I request domestic flight tickets to airports around the world?",
      A:
        "You can request domestic flight tickets through our service, which covers all airports globally. We offer seamless booking options for both light and standard flights, ensuring a smooth travel experience.",
    },
    {
      id: 3,
      Q: "What options are available for tourist transportation in Egypt?",
      A:
        "We provide comprehensive tourist transportation services across Egypt. Whether you're traveling within the country or internationally, we ensure you have access to comfortable and reliable transportation for your journey.",
    },
  ];

  return (
 
        <DotPatternDemo  
        id="about-container-main--"
        className="about-container-main-- border-top "
        style={{   background: "linear-gradient(to right, #6a7b26c9, #0f2e08e8)", position: 'relative', border: '0' , borderRadius : "0" , overflow: 'visible' }}
        children={      <div className="bg-white  "  style={{backgroundColor: 'transparent', padding: '20px'}}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 aboutUS-container2--" >
              <div className="mx-auto max-w-2xl lg:mx-0  who-we-are-- ">
                    <WordFadeInDemo words="Who We Are?"  className="text-3xl font-bold tracking-tight about-words-- text-gray-900 sm:text-4xl"  />
              </div>
      
              <div className="mx-auto mt-10   gap-x-8 gap-y-16  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0  lg:grid-cols-3 accordion-open-aboutUS"
                style={{    display: 'flex',
                    paddingTop: '5px',
                    margin: '0',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}
              >
                <div id="accordion-open" data-accordion="open" style={{background: 'white',borderRadius: '12px' ,    zIndex: "1"}}>
                  {posts.map((post) => (
                    <div key={post.id} style={{background: 'white',
                        borderTopRightRadius: '12px',
                        borderTopLeftRadius: '12px',
                    }}>
                      <h2 id={`accordion-open-heading-${post.id}`}>
                        <button
                          type="button"
                          className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 gap-3"
                          onClick={() => toggleAccordion(post.id)}
                          aria-expanded={openAccordionId === post.id}
                          aria-controls={`accordion-open-body-${post.id}`}
                        >
                          <span className="flex items-center">
                            <svg
                              className="w-5 h-5 me-2 shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {post.Q}
                          </span>
                          <svg
                            data-accordion-icon
                            className={`w-3 h-3 ${openAccordionId === post.id ? "rotate-180" : ""} shrink-0`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5 5 1 1 5"
                            />
                          </svg>
                        </button>
                      </h2>
      
                      {/* Conditionally render the accordion content based on state */}
                      <div
                        id={`accordion-open-body-${post.id}`}
                        className={openAccordionId === post.id ? "block" : "hidden"}
                        aria-labelledby={`accordion-open-heading-${post.id}`}
                      >
                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900" style={{    background: "linear-gradient(to right, #546014, #0a3e0eed)"}}>
                          <p className="mb-2 text-gray-500 dark:text-gray-400" style={{color: 'white'}}>{post.A}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                  
                <VidDialog1 videoSrc={"/videos/trailer.mp4"} videoThumbnailAlt={"Trailer"} videoThumbnailSrc={"/imgs/thumbnails/thum1.webP"} className="vid-dialog-main-1"/>
              
              
              </div>
            </div>
          </div>

    
    
    } 
        
        /> 
  );
}
