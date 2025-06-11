import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap is imported
import Header from "./header";
import Sidebar from "./sidebar";
import { useEffect,useState } from "react";

const Profile = () => {
  let [details,setDetails] = useState({profile:"",insta_id:"",facebook_id:"",linkdin_id:""});
  useEffect(()=>{
    let user_id = localStorage.getItem("user_id");
    let call = async()=>{
        let response = await fetch(`http://localhost:8080/users/${user_id}`,{method: "GET",headers: {"Accept": "application/json"}});
        let data = await response.json();
        setDetails(data);
    }
    call();
  },[])   
  const user = {
    profilePic: "https://via.placeholder.com/150", // Replace with actual profile pic URL
    instagram: "insta_username",
    facebook: "fb_username",
    linkedin: "linkedin_username",
    description: "Passionate web developer with expertise in React and Spring Boot. Love to build innovative solutions!"
  };

  return (
    <div>
        <Header/>
        <div>
            <div>
            <Sidebar/>
            </div>
            
            <div className="p-5">
            <div className="container-fluid border  p-5 shadow-lg" style={{ width: "800px", backgroundColor: "#f8f9fa", borderRadius: "10px" }}>
       
       <div className="d-flex">
           <div className="p-3 text-center">
               <div className="card border-0 shadow-sm p-3" style={{ backgroundColor: "#f8f9fa",borderRadius: "10px" }}>
               <img
               src={details.profile}
               alt="Profile"
               className="rounded-circle border border-dark"
               width="150"
               height="150"
               />
           </div>
       </div>

   {/* Right Side: Social Media Details */}
   <div className="p-3 flex-grow-1" style={{ backgroundColor: "#f8f9fa !important" }}>
   <h3 className="mb-3 text-primary ml-4 pl-3">Social Media</h3>
   <ul className="pl-0" style={{ backgroundColor: "#f8f9fa !important" }}>
       <li className="list-group-item border-0 mb-2">
       <strong><i className="fab fa-instagram text-danger"></i> Instagram:</strong> @{details.insta_id}
       </li>
       <li className="list-group-item border-0 mb-2">
       <strong><i className="fab fa-facebook text-primary"></i> Facebook:</strong> {details.facebook_id}
       </li>
       <li className="list-group-item border-0 mb-2">
       <strong><i className="fab fa-linkedin text-info"></i> LinkedIn:</strong> {details.linkdin_id}
       </li>
   </ul>
    </div>

</div>

{/* Below Section: Description */}
<div className="mt-4 p-3 border-top">
   <h4 className="text-secondary">About Me</h4>
   <p className="text-muted">{user.description}</p>
</div>
   </div>
            </div>
            
        </div>
    </div>
  );
};

export default Profile;
