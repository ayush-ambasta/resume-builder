import { useState,useEffect } from "react"

export default function Experience(){

    const [work,setWork]=useState([{worktitle:"",workdescription:[],workyear:""}]);
    const [resume,setResume]=useState({});

    useEffect(() => {
      if(localStorage.getItem('resume')){
        setResume(JSON.parse(localStorage.getItem('resume')));
      }
    }, []);

    const FormChange=(index,e)=>{
        let data=[...work];
        data[index][e.target.name]=e.target.value;
        setWork(data);
    }
    const addMore=()=>{
        let newField={worktitle:"",workdescription:[],workyear:""};
        setWork([...work,newField]);
    }
    const remove=()=>{
        work.pop();
        setWork([...work]);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        resume.workexp=[];
        work.map((w)=>{
            w.workdescription=w.workdescription.split(";");
            resume.workexp.push(w);
        });
        localStorage.setItem('resume',JSON.stringify(resume));
        setWork([{worktitle:"",workdescription:[],workyear:""}]);
        alert('Successfully submitted');
    }
    return(
        <>
        <div className="flex justify-center">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="font-bold text-2xl text-center my-2">Work Experience</div>
        {work.map((w,index)=>{
            return (<div key={index} className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="worktitle">
                Title
            </label>
            <input required onChange={e=>FormChange(index,e)} value={w.worktitle} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="worktitle" type="text" placeholder="Position/Comapany Name"/>
            </div>
            <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="workdescription">
                Description
            </label>
            <textarea required onChange={e=>FormChange(index,e)} value={w.workdescription} rows={5} cols={40} className="appearance-none resize block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="workdescription" type="text" placeholder="Use semicolon(;) to display content in separate line in resume"/>
            </div>
            <div className="w-full md:w-1/2 px-3 my-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="workyear">
                Year
            </label>
            <input required onChange={e=>FormChange(index,e)}  value={w.workyear} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="workyear" type="text" placeholder="2020/2020-present"/>
            </div>
            <div>
            <button className="mx-3 my-9 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={addMore}>Add More</button>
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