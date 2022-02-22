import Sidebar from './dashboardComponents/Sidebar'
import Nav from './dashboardComponents/Nav'
import { useState, useEffect } from 'react';



export default function Dashboard() {

  // const [dark,setDark] = useState('dark')

  // const window = document.querySelector(".window");

  // useEffect(() => {
  //   const darkMode = ()=>{
  //     window.classList.toggle(dark);
  //   }

  //   darkMode()

  // },[setDark])


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


        {/* sidebar */}
        <Sidebar/>

      </div>
    

    </div>
    

    
    
  )
}

