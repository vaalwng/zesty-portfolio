import React from "react";
import timeline from '../data/timeline'
import TimelineItem from "./TimelineItem";

function Timeline() {
    return (
        <div>
            <div className="flex items-center justify-center flex-col text-center pt-10 text-base md:text-xl mb-2 font-bold">Timeline</div>
            <div className="flex flex-col md:flex-row justify-center my-5">
                <div className="w-full md:w-7/12">
                    {timeline.map(item => (
                        <TimelineItem
                            year={item.year}
                            title={item.title}
                            duration={item.duration}
                            details={item.details}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Timeline;