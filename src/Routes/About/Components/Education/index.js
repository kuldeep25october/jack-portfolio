import React from 'react'
import './style.scss';
import EducationInner from '../../../../Constant/Education';
import Education from '../../Components/Education/Components/EducationContent'

const ExperienceContent = () => {
    return (
        <>
            <div className='education'>
                <h1>Education</h1>
                {
                    EducationInner.map((val, ind) => {
                        return (
                            <Education
                                key={ind}
                                skill={val.skill}
                                duration={val.duration}
                                para={val.para}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
export default ExperienceContent;