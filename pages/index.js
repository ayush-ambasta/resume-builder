import { useState,useEffect } from "react";

export default function Home() {
  const [basicinfo,setBasicinfo]=useState({name:"",phone:"",email:"",linkdin:"",github:""});
  const [image, setImage] = useState();
  const [resume,setResume]=useState({});

  useEffect(() => {
    if(localStorage.getItem('resume')){
      setResume(JSON.parse(localStorage.getItem('resume')));
    }
  }, []);
  
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
   }

  const onchange=(e)=>{
    setBasicinfo({...basicinfo,[e.target.name]:e.target.value});
  }

  const handleSubmit=(e)=>{
    
    e.preventDefault();
    resume.name=basicinfo.name;
    resume.phone=basicinfo.phone;
    resume.email=basicinfo.email;
    resume.linkdin=basicinfo.linkdin;
    resume.github=basicinfo.github;
    resume.image=image;
    localStorage.setItem('resume',JSON.stringify(resume));
    setBasicinfo({name:"",phone:"",email:"",linkdin:"",github:""});
    setImage();
    alert('Successfully submitted');
  }

  return (
    <>
    <div className="flex justify-center">
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
    <div className="font-bold text-2xl text-center my-2">Basic Information</div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input required onChange={onchange} value={basicinfo.name} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="Your Name"/>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input required onChange={onchange} value={basicinfo.phone} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="phone" type="number" placeholder="1111111111"/>
        </div>
        <div className="w-full md:w-1/2 px-3 my-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input required onChange={onchange} value={basicinfo.email} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" type="email" placeholder="exapmle@email.com"/>
        </div>
        <div className="w-full md:w-1/2 px-3 my-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Linkdin">
            LinkDIn Profile
          </label>
          <input required onChange={onchange} value={basicinfo.linkdin} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="linkdin" type="text" placeholder="http://linkdinprofile.com"/>
        </div>
        <div className="w-full md:w-1/2 px-3 my-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="github">
            Github profile
          </label>
          <input required onChange={onchange} value={basicinfo.github} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="github" type="text" placeholder="http://githubprofile.com"/>
        </div>
        <div>
          <label className="mx-3 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="profilepic">
            Profile Picture
          </label>
          <input type="file" onChange={onImageChange} className="mx-3 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="profilepic" placeholder="choose profile pic" />
        </div>  
      </div>
      <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Submit
        </button>
    </form>
    </div>
    </>
  )
}
