import React from "react";
// import 'rsuite/dist/styles/rsuite-default.css';
import { Dropdown } from "rsuite";

export default function Dropdownn() {
  return (

    <div className="border mt-8   bg-gray-900 text-white w-screen p-6"
      style={{
        display: "block",
        
        paddingLeft: 30,
      }}
    >
      <h1 className="text-6xl mt-8 font-bold font-serif"> QnA's</h1>
      <div className=" mt-8 p-4 rounded-xl text-2xl" >1. How do I create an account on the placement portal?</div>
        <div className="text-green-300 text-2xl border p-4 rounded-xl ">Answer: To create an account, click on the "Sign Up" or "Register" button on the homepage. Follow the prompts to provide necessary information such as your name, email, and password. Once registered, you can log in to access all portal features.</div>
      
      <div className=" mt-8 p-4 rounded-xl text-2xl" >2. How can I upload my resume to the portal?</div>
        <div className="text-green-300 text-2xl border p-4 rounded-xl">Answer: After logging in, navigate to your profile settings. Look for the "Resume" or "Documents" section, where you can upload and manage your resume. Make sure your resume is in a supported format (e.g., PDF, Word) for successful upload.</div>
      
      <div className=" mt-8 p-4 rounded-xl text-2xl" >3. How do I search for job opportunities on the portal?</div>
        <div className="text-green-300 text-2xl border p-4 rounded-xl">Answer: Visit the "Jobs" or "Opportunities" section. You can filter jobs based on your preferences such as location, industry, or job type. Click on a job listing to view details and apply.</div>
      
      <div className=" mt-8 p-4 rounded-xl text-2xl" >4. What should I include in my profile to attract employers?</div>
        <div className="text-green-300 text-2xl border p-4 rounded-xl">Answer: Complete your profile with accurate and comprehensive information. Include details about your education, skills, work experience, and any relevant projects. A well-constructed profile helps employers understand your strengths and qualifications.</div>
      
      <div className=" mt-8 p-4 rounded-xl text-2xl" >5. How can I connect with employers or recruiters?</div>
        <div className="text-green-300 text-2xl border p-4 rounded-xl">Answer: Explore the "Connections" or "Network" section to find and connect with employers or recruiters. You can also attend virtual job fairs and networking events organized on the portal to interact with industry professional</div>
      

      
	  
    </div>

	
  );
}
