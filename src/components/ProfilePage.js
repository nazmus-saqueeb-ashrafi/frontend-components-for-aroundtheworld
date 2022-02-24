import React from 'react'
import Map from 'react-map-gl';
import { motion } from "framer-motion"
import { useRef, useState } from "react";

import { useDimensions } from "../useDimentions"


const ProfilePage = () => {
    const constraintsRef = useRef(null);
    const { width,height } = useDimensions(constraintsRef);


    const profileCardVariants ={
        open: {
        
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
        closed: {
            
            y: height,
            opacity: 1,
            transition: {
                y: { stiffness: 1000 }
            }
        }
    }
    
    const [isOpen, setIsOpen] = useState(true)


    const slideButtonClick = () =>{
        const section2 = document.querySelector(".section-2");

        setIsOpen(!isOpen)

        section2.classList.toggle("translate-y-96")
        section2.classList.toggle("md:translate-y-96")
        section2.classList.toggle("xl:translate-y-0")



        // sidebar.classList.toggle("translate-x-64");
        // sidebar.classList.toggle("md:-translate-x-64");

        // ['transform','translate-x-0', 'transition', 'duration-200','ease-in-out'].map(v=> sidebar.classList.toggle(v) )

    }

    

  return (

    
      
    <>
        {/* 1st section */}
        <div class="grid place-items-center md:grid-cols-3 pt-10" >


            {/* profile card */}
            <motion.div
            
            key="modal"
            
            // drag
            // dragConstraints={{ left: 0, right: 0,top: 0,bottom:0 }}
            // dragConstraints={constraintsRef}
            
            className='z-10 xl:col-start-3 xl:col-span-1 md:col-start-2 md:col-span-1'
            variants={profileCardVariants} animate={isOpen ? "open" : "closed"}
            
            >

                
                <motion.div class="card w-72 bg-base-100 shadow-xl grid place-items-center z-10" >

                    {/* vertical slide button */}
                    <button className='slideBtn btn btn-info btn-sm mt-5 ml-5 absolute top-0 left-0' onClick={slideButtonClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.91" height="17.879" viewBox="0 0 12.91 17.879">
                        <path id="XMLID_225_" d="M12.739,75.172a.587.587,0,0,0-.83,0L6.456,80.625,1,75.172a.587.587,0,0,0-.83.83L6.041,81.87a.587.587,0,0,0,.83,0L12.739,76A.587.587,0,0,0,12.739,75.172Z" transform="translate(-0.001 -64.163)" fill="#fff"/>
                        <path id="XMLID_225_2" data-name="XMLID_225_" d="M12.738.172a.587.587,0,0,0-.83,0L6.455,5.625,1,.172A.587.587,0,0,0,.172,1L6.04,6.87a.587.587,0,0,0,.83,0L12.738,1A.587.587,0,0,0,12.738.172Z" transform="translate(12.91 7.042) rotate(-180)" fill="#fff"/>
                        </svg>
                    </button>

                    {/* avatar */}
                    <div class="avatar pt-10">
                        <div class="w-24 mask mask-squircle">
                            <img src="https://api.lorem.space/image/face?hash=92048"/>
                        </div>
                    </div>

                
                    {/* name, description and follow button */}
                    <div class="card-body items-center text-center">
                        <h2 class="text-lg font-extrabold">Simon Polokson</h2>

                        <div class="text-base-content my-3 text-sm text-opacity-60">Strategic Art Manager,Strategic Art Manager, Strategic Art Manager</div>
                    
                        
                        <div class="card-actions">
                            <button class="btn btn-info btn-sm">Follow</button>
                        </div>
                    </div>
                
                </motion.div>
                


            </motion.div>

            
            {/* map */}
            <div class=" absolute card w-100 bg-base-100 shadow-xl grid place-items-center" ref={constraintsRef}>
                <Map
                    initialViewState={{
                        longitude: -122.4,
                        latitude: 37.8,
                        zoom: 14
                    }}
                    style={{width: "90vw", height: 400}}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxAccessToken={process.env.REACT_APP_MAPBOX}
                />
                
            </div>
        </div>
        
        {/* 2nd section */}
        <div class="section-2 grid place-items-center xl:grid-cols-4 pt-10 xl:relative transition duration-200 ease-in-out" >

            <div class="tabs xl:pl-10">
                <a class="tab tab-bordered tab-active">Posts</a> 
                <a class="tab tab-bordered">Shares</a> 
                <a class="tab tab-bordered">Friends</a>
            </div>

            <div className='z-10 xl:col-start-1 xl:col-span-3 place-items-center md:pl-10 pt-10'>

                <div class="card w-100 bg-base-200 shadow-xl grid place-items-center" ref={constraintsRef}

                style={{width: "65vw", height: 400}}
                
                >
                <div class="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie"/></figure>
                <div class="card-body">
                    <h2 class="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div class="justify-end card-actions">
                    <button class="btn btn-primary">Watch</button>
                    </div>
                </div>
                </div>
                
            </div>
                
            </div>




        </div>
    </>
  )
}

export default ProfilePage