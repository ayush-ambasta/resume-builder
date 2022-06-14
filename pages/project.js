import { useState ,useEffect} from "react"

export default function project(){

    const [project,setProject]=useState([{title:"",description:[],githublink:"",hostlink:""}]);
    const [resume,setResume]=useState({});

    useEffect(() => {
      if(localStorage.getItem('resume')){
        setResume(JSON.parse(localStorage.getItem('resume')));
      }
    }, []);

    const FormChange=(index,e)=>{
        let data=[...project];
        data[index][e.target.name]=e.target.value;
        setProject(data);
    }
    const addMore=()=>{
        let newField={title:"",description:[],githublink:"",hostlink:""};
        setProject([...project,newField]);
    }
    const remove=()=>{
        project.pop();
        setProject([...project]);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        resume.projects=[];
        project.map((pro)=>{
            pro.description=pro.description.split(";");
            resume.projects.push(pro);
        });
        localStorage.setItem('resume',JSON.stringify(resume));
        setProject([{title:"",description:[],githublink:"",hostlink:""}]);
        alert('Successfully submitted');
    }
    return(
        <>
        <div className="flex justify-center">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="font-bold text-2xl text-center my-2">Project Information</div>
        {project.map((pro,index)=>{
            return (<div key={index} className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
                Title
            </label>
            <input required onChange={e=>FormChange(index,e)} value={pro.title} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="title" type="text" placeholder="Title of Project"/>
            </div>
            <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                Description
            </label>
            <textarea required onChange={e=>FormChange(index,e)} value={pro.description} rows={5} cols={40} className="appearance-none resize block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="description" type="text" placeholder="Use semicolon(;) to display content in separate line in resume"/>
            </div>
            <div className="w-full md:w-1/2 px-3 my-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="githublink">
                GitHub Link
            </label>
            <input onChange={e=>FormChange(index,e)}  value={pro.githublink} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="githublink" type="text" placeholder="https://github.com"/>
            </div>
            <div className="w-full md:w-1/2 px-3 my-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="hostlink">
                Hosted Link
            </label>
            <input onChange={e=>FormChange(index,e)} value={pro.hostlink} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="hostlink" type="text" placeholder="https://yourhostedlink.com"/>
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