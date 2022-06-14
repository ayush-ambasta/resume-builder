import { useState,useEffect } from "react"

export default function Education(){

    const [education,setEducation]=useState([{institute:"",course:"",cgpa:"",year:""}]);
    const [resume,setResume]=useState({});

    useEffect(() => {
      if(localStorage.getItem('resume')){
        setResume(JSON.parse(localStorage.getItem('resume')));
      }
    }, []);

    const FormChange=(index,e)=>{
        let data=[...education];
        data[index][e.target.name]=e.target.value;
        setEducation(data);
    }
    const addMore=()=>{
        let newField={institute:"",course:"",cgpa:"",year:""};
        setEducation([...education,newField]);
    }
    const remove=()=>{
        education.pop();
        setEducation([...education]);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        resume.edu=[];
        education.map((edu)=>{
            resume.edu.push(edu);
        })
        localStorage.setItem('resume',JSON.stringify(resume));
        setEducation([{institute:"",course:"",cgpa:"",year:""}]);
        alert('Successfully submitted');
    }
    return(
        <>
        <div className="flex justify-center mx-2">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="font-bold text-2xl text-center my-2">Education Information</div>
        {education.map((edu,index)=>{
            return (<div key={index} className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="institue">
                Institue Name
            </label>
            <input required onChange={e=>FormChange(index,e)} value={edu.institute} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="institute" type="text" placeholder="College/School Name"/>
            </div>
            <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="course">
                Course
            </label>
            <input required onChange={e=>FormChange(index,e)} value={edu.course} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="course" type="text" placeholder="Course name"/>
            </div>
            <div className="w-full md:w-1/2 px-3 my-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="cgpa">
                Cgpa/Percentage
            </label>
            <input required onChange={e=>FormChange(index,e)}  value={edu.cgpa} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="cgpa" type="text" placeholder="10cgpa/95%"/>
            </div>
            <div className="w-full md:w-1/2 px-3 my-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="year">
                Year
            </label>
            <input required onChange={e=>FormChange(index,e)} value={edu.year} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="year" type="text" placeholder="2020-present/2020"/>
            </div>
            <div>
            <button className="mx-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={addMore}>Add More</button>
            {index==0 ? "":<button className="mx-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={remove}>Delete</button>}
            </div>
        </div>)
        
        })}
        
        <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Submit
        </button>
        </form>
        </div>
        </>
    )
}