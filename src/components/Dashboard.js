import Sidebar from './dashboardComponents/Sidebar'
import Nav from './dashboardComponents/Nav'
import { useState, useEffect } from 'react';


import ExpandedPostMaker from './profilePageComponents/ExpandedPostMaker';
import Post from './profilePageComponents/Post';
import UnExpandedPostMaker from './profilePageComponents/UnExpandedPostMaker';



export default function Dashboard() {

  // const [dark,setDark] = useState('dark')

  // const window = document.querySelector(".window");

  // useEffect(() => {
  //   const darkMode = ()=>{
  //     window.classList.toggle(dark);
  //   }

  //   darkMode()

  // },[setDark])

  const [showModal, setShowModal] = useState(false);


  return (
    
    
    <div class='window dark'>


      {/* nav bar */}
      <Nav />
  
      
      {/* body */}
      <div className='bg-gray-200 text-gray-600 dark:text-gray-300 dark:bg-base-100 h-screen' >
        {/* <div class="p-5 max-w-sm mx-auto bg-white rounded-xl shadow-xl flex items-center space-x-4">
          <div>
            <div class="text-xl font-medium text-black">ChitChat</div>
            <p class="text-slate-500">You have a new message!</p>
          </div>
        </div> */}

        <div class="absolute">
          <Sidebar/>

        </div>

        <div class="grid place-items-center xl:grid-cols-5 md:grid-cols-4 grid-cols-1">

          {/* 'unexpanded post' card */}
          <div class="xl:col-start-2 xl:col-span-3 md:col-start-2 md:col-span-3 xl:ml-0 xl:mr-0 xl:w-full lg:w-11/12 lg:ml-0 lg:mr-10 md:w-10/12 md:ml-10 w-full">
            <UnExpandedPostMaker showModal={showModal} setShowModal={setShowModal}/>
            <hr class="w-full xl:col-start-1 xl:col-span-3 mt-8 opacity-10"></hr>

            {/* post */}
            <Post/>

          </div>


          {/* sidebar */}
        

        </div>


        {/* 'expanded post' card */}
        <div class="grid place-items-center">
            <ExpandedPostMaker showModal={showModal} setShowModal={setShowModal}/>

        </div>

      </div>
    

    </div>
    

    
    
  )
}

