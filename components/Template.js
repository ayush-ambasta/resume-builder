import React, { useEffect,useState} from 'react'
import Image from 'next/image'
import { useReactToPrint } from 'react-to-print';



export const Template = () => {
    const ref = React.createRef();
    const [resume,setResume]=useState();

    useEffect(() => {
      setResume(JSON.parse(localStorage.getItem('resume')));
    }, []);
    
    const handlePrint = useReactToPrint({
      content: () => ref.current,
    });
    if(!resume){
        return <div>Nothing to show</div>
    }
    return (
        <div className='mx-2 my-3 lg:mx-64 lg:my-8'>
            <div ref={ref}>
            <div>
                <div className='flex gap-4'>
                    <div className='profile-img'>
                        <Image className="rounded-full" alt='profile-pic' src={resume.image || "/profile.jpg"} width={110} height={110}/>
                    </div>
                    <div className='flex flex-col gap-2 my-2'>
                        <h1 className="font-bold text-4xl">
                            {resume.name || "Name"}
                        </h1>
                        <h3>
                            Phone:{resume.phone || "1111111111"}
                            <br></br> 
                            <a className="text-blue-500" href={(resume.email) ? `mailto:${resume.email}`:"#"}>Email</a> | <a className="text-blue-500" href={resume.linkdin || "#"}>LinkedIn</a> | <a className="text-blue-500" href={resume.github || "#"}>GitHub</a>
                        </h3>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='font-bold text-xl'>
                    EDUCATION
                    <hr/>
                </h2>
                {resume.edu && resume.edu.map((edu,index)=>{
                    return(
                        <div className='flex justify-between my-1' key={index}>
                                <ul>
                                <li>
                                    <h3 className='font-bold'>
                                        {edu.institute}
                                    </h3>
                                    <h3>
                                        {edu.course}
                                    </h3>
                                    {edu.cgpa}
                                </li>
                            </ul>
                            <div className='font-bold'>
                                <h3>
                                    {edu.year}
                                </h3>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <h2 className='font-bold text-xl'>
                    PROJECT
                    <hr/>
                </h2>
                <div>
                {resume.projects && resume.projects.map((project,index)=>{
                    return(
                        <div className='my-1' key={index}>
                            <h3 className='font-bold'>{project.title}</h3>
                            <ul className='list-disc mx-5'>
                                {project.description.map((desc,index)=>{
                                    return(
                                        <li key={index}>
                                            {desc}
                                        </li>
                                    )
                                })}
                                {
                                    (project.githublink && project.hostlink) ? 
                                    <li>
                                        <a className="text-blue-500" href={project.githublink}>Github</a>
                                        <a  className="text-blue-500 mx-2" href={project.hostlink}>HostedLink</a>
                                    </li> : (project.githublink) ? <li><a className="text-blue-500" href={project.githublink}>Github</a></li>
                                    : (project.hostlink) ? <li><a className="text-blue-500" href={project.hostlink}>HostedLink</a></li> : ""
                                }  
                            </ul>
                        </div>
                    )
                })}
                </div>
            </div>
            <div>
            <h2 className='font-bold text-xl'>
                    WORK EXPERIENCE
                    <hr/>
                </h2>
                <div>
                {resume.workexp && resume.workexp.map((exp,index)=>{
                    return(
                        <div className='flex justify-between my-1' key={index}>
                            
                            <ul className='list-disc mx-5'>
                                <h3 className='font-bold -mx-5'>{exp.worktitle}</h3>
                                {exp.workdescription.map((desc,index)=>{
                                    return(
                                        <li key={index}>
                                            {desc}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className='font-bold'>
                                <h3>
                                    {exp.workyear}
                                </h3>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
            <div>
            <h2 className='font-bold text-xl'>
                    TECHNICAL SKILLS
                    <hr/>
                </h2>
                <div>
                <ul className='list-disc mx-5'>
                {resume.skills && resume.skills.map((skill,index)=>{
                    return(
                        <li key={index}>
                            {skill}
                        </li>
                    )
                })}
                </ul>
                </div>
            </div>
            <div>
            <h2 className='font-bold text-xl'>
                    ACHIEVEMENTS
                    <hr/>
                </h2>
                <div>
                <ul className='list-disc mx-5'>
                {resume.achievements && resume.achievements.map((a,index)=>{
                    return(
                        <li key={index}>
                        {
                            (a.link) ? <a className="text-blue-500" href={a.link}>{a.achievementtitle}</a>:`${a.achievementtitle}`
                        }
                        </li>
                    )
                })}
                </ul>
                </div>
            </div>
            </div>
            <button onClick={handlePrint} className="my-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Print</button>
        </div> 
    )
}
