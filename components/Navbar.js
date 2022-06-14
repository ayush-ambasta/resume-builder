import React from 'react'
import Link from 'next/link'
import Script from 'next/script'

export const Navbar = () => {
  return (
    <>
    <div id="navbar" className="flex flex-col md:flex-row justify-between items-center sticky transition-all duration-500 top-0 bg-gradient-to-b from-gray-200 to-gray-200">
      <div className="logo mt-2 mx-1 font-bold h-9">
        RESUME BUILDER
      </div>
      <div className="nav mx-2">
        <ul className="flex md:flex-row flex-col items-center space-x-3 font-bold">
          <div className="flex space-x-3">
          <Link href={"/"}><a><li className='hover:underline'>Home</li></a></Link>
          <Link href={"/education"}><a><li className='hover:underline'>Education</li></a></Link>
          <Link href={"/project"}><a><li className='hover:underline'>Project</li></a></Link>
          </div>
          <div className="flex space-x-3">
          <Link href={"/experience"}><a><li className='hover:underline'>Experience</li></a></Link>
          <Link href={"/skill"}><a><li className='hover:underline'>Skill</li></a></Link>
          <Link href={"/achievement"}><a><li className='hover:underline'>Achievement</li></a></Link>
          <Link href={"/preview"}><a><li className='hover:underline'>Preview</li></a></Link>
          </div>
        </ul>
      </div>
    </div>
    <Script id="my-script">
      {`
        prevScroll = window.pageYOffset;
        window.onscroll = function() {
        var currentScroll = window.pageYOffset;
        if (prevScroll > currentScroll) {
        document.getElementById("navbar").style.top = "0";
        } else {
        document.getElementById("navbar").style.top = "-600px";
        }
        prevScroll = currentScroll;
        }`
      }
    </Script>
  </>  
  )
}
