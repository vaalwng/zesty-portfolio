import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Val Evander M. Wong</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer @ NETSCOUT</p>
            <p className="text-base md:text-l mb-3 font-medium">Fall '21 Software Engineering Magna Cum Laude from the University of Texas at Dallas</p>
            
            <p className="text-sm max-w-xl mb-6 font-light">
                With my enduring passion and excitement for technology and its endless potential, I seek oppotunities that 
                allow me to grow and hone my ability to create, develop, and maintain software that propel us 
                into the future.
            </p>
        </div>
    )
}

export default Intro;