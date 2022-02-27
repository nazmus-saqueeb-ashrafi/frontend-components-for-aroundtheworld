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

        {/* <div class="flex">
            <div class="flex-none bg-slate-400">
                01
            </div>
            <div class="flex-auto w-96 bg-slate-300">
                02
            </div>
            <div class="flex-auto w-96 bg-slate-200">
                03
            </div>
        </div> */}
        
        {/* 2nd section */}
        <div class="section-2 grid place-items-center xl:grid-cols-4 pt-10 xl:pl-28 xl:pr-28 xl:relative transition duration-200 ease-in-out pl-7 pr-7" >
            
            {/* tab */}
            <div class="tabs pb-5 xl:col-start-1 xl:col-span-3">
                <a class="tab tab-bordered tab-active">Posts</a> 
                <a class="tab tab-bordered">Shares</a> 
                <a class="tab tab-bordered">Friends</a>
            </div>

            {/* 'make a post' card */}
            <div className='flex justify-start items-center bg-base-100 shadow-xl z-10 xl:col-start-1 xl:col-span-3 pt-2 pb-2 xl:pr-10 xl:pl-10 pr-5 pl-5 w-full rounded-xl'>

                {/* avatar */}
                <div class="avatar pr-10">
                    <div class="md:w-20 w-16 mask mask-squircle">
                        <img src="https://api.lorem.space/image/face?hash=92048"/>
                    </div>
                </div>
                
                <div class='flex-grow pt-4'>
                    <div class=" btn-outline cursor-pointer rounded-full p-2 bg-slate-600 hover:bg-slate-500 hover:text-slate-50"><span class='text-lg pl-3'>Where did you go, Simon?</span></div>


                    <div class='flex justify-center items-center xl:p-3 p-1 space-x-3'>
                        <button class="btn btn-ghost hover:bg-slate-600 flex-grow rounded-full normal-case font-normal">Location</button>

                        <button class="btn btn-ghost hover:bg-slate-600 flex-grow rounded-full normal-case font-normal ">Photo</button>
                        
                        <button class="flex btn btn-ghost hover:bg-slate-600 flex-grow rounded-full normal-case font-normal">
                            <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z" clip-rule="evenodd" />
                            </svg>
                            <span>Mood</span>
                        </button>

                        

                    </div>
                    

                </div>
                

                {/* md:w-96 w-44 */}
                
            </div>


        

        </div>

        
    </>
  )
}

export default ProfilePage