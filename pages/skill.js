import { useState ,useEffect} from "react"

export default function Skill(){

    const [skill,setSkill]=useState([]);
    const [resume,setResume]=useState({});

    useEffect(() => {
      if(localStorage.getItem('resume')){
        setResume(JSON.parse(localStorage.getItem('resume')));
      }
    }, []);


    const onchange=(e)=>{
        setSkill(e.target.value);
      }

    const handleSubmit=(e)=>{
        e.preventDefault();
        resume.skills=[];
        
        skill=skill.split(";");
        resume.skills=skill;
        localStorage.setItem('resume',JSON.stringify(resume));
        setSkill([]);
        alert('Successfully submitted');
    }
    return(
        <>
        <div className="flex justify-center mx-2">
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="font-bold text-2xl text-center my-2">Skill Information</div>
                <div className="w-full md:w-1/2 px-3 my-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="skill">
                        Skill Description
                    </label>
                    <textarea cols={60} rows={10} required onChange={onchange} value={skill} className="appearance-none max-w-full md:max-w-2xl bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize" name="skill" type="text" placeholder="Use semicolon(;) to display content in separate line in resume"/>
                </div>
                <button type="submit" className="mx-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Submit
                </button>
            </form>
        </div>
        </>
    )
}