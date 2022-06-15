import { useState ,useEffect} from "react"

export default function Achievement(){

    const [achievement,setAchievement]=useState([{achievementtitle:"",link:""}]);
    const [resume,setResume]=useState({});

    useEffect(() => {
      if(localStorage.getItem('resume')){
        setResume(JSON.parse(localStorage.getItem('resume')));
      }
    }, []);

    const FormChange=(index,e)=>{
        let data=[...achievement];
        data[index][e.target.name]=e.target.value;
        setAchievement(data);
    }

    const addMore=()=>{
        let newField={achievementtitle:"",link:""};
        setAchievement([...achievement,newField]);
    }
    const remove=()=>{
        achievement.pop();
        setAchievement([...achievement]);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        resume.achievements=[];
        achievement.map((a)=>{
            resume.achievements.push(a);
        })
        localStorage.setItem('resume',JSON.stringify(resume));
        setAchievement([{achievementtitle:"",link:""}]);
        alert('Successfully submitted');
    }
    return(
        <>
        <div className="flex justify-center mx-2">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="font-bold text-2xl text-center my-2">Achievements</div>
        {achievement.map((a,index)=>{
            return (<div key={index} className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="achievementtitle">
                Title
            </label>
            <input required onChange={e=>FormChange(index,e)} value={a.achievementtitle} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="achievementtitle" type="text" placeholder="Achievements Title"/>
            </div>
            <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="link">
                link
            </label>
            <input required onChange={e=>FormChange(index,e)} value={a.link} className="appearance-none  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="link" type="text" placeholder="provide link"/>
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