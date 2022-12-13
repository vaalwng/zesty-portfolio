import React from "react";

function Intro() {
    return (
        <div>
            <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
                <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold pb-6 tracking-wide">Val Evander M. Wong</h1>
                <p className="text-base md:text-xl mb-3 font-medium tracking-wide">Software Development Engineer @ NETSCOUT</p>
                <p className="text-base md:text-l mb-3 pb-3font-medium tracking-wide">University of Texas at Dallas Software Engineering Magna Cum Laude</p>
                <p className="text-sm text-justify max-w-xl mb-1 font-light tracking-wide leading-loose">
                    With fervent passion and excitement for technology and its endless potential, I seek oppotunities that 
                    allow me to grow and hone my ability to create, develop, and maintain software that propel us 
                    into the future.
                </p>
            </div>
        </div>
    )
}

export default Intro;