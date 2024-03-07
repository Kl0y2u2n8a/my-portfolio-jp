import React from 'react';
import MyTabComp from './tab';




function MySkills(props, skillsRef) {
    return (
        <section className="min-h-screen p-10" ref={skillsRef}>
            <div className=" p-10">
                <h3 className=" text-center text-5xl md:text-6xl py-1 font-newWalt dark:text-white">Skills</h3>

                <MyTabComp />
            </div>
        </section>
    )
}

export default React.forwardRef(MySkills);

