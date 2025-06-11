// function Privacy(){
//     let id = sessionStorage.getItem("userId");
//     const privat = async ()=>{
//         const response = await fetch(`http://localhost:8080/users/changeprivacy/${id}`, {
//             method: "GET",
//           });
//     }
//     const publi = async()=>{
//         const response = await fetch(`http://localhost:8080/users/changeprivacy/${id}`, {
//             method: "GET",
//           });
//     }
//     return(
//         <div>
//             <h1>Want to change your privacy settings</h1>
//             <button onClick={privat}>Private</button>
//             <button onClick={publi}>Public</button>
           
//         </div>
//     )
// }
// export default Privacy;




import React, { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
const PrivacyToggle = () => {
  const [isPrivate, setIsPrivate] = useState(false);

  const togglePrivacy = async() => {
    setIsPrivate((prevState) => !prevState);
    let id = localStorage.getItem("user_id");
    console.log(id);
    const response = await fetch(`http://localhost:8080/users/changeprivacy/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({"privacy":isPrivate})
    });
    

  };

  return (
    <div>
        <Header/>
        <div>
            <Sidebar/>
            <div className="d-flex flex-row justify-content-center align-items-center vh-50">
            <div className="card p-4 text-center shadow mt-5">
                <h3>Privacy Settings</h3>
                <p className="lead">
                Privacy is currently <strong>{isPrivate ? "ON 🔒" : "OFF 🔓"}</strong>
                </p>
                <button 
                className={`btn ${isPrivate ? "btn-danger" : "btn-success"} mt-3`}
                onClick={togglePrivacy}
                >
                {isPrivate ? "Turn Off Privacy" : "Turn On Privacy"}
                </button>
            </div>
            </div>
        </div>
    </div>
  );
};

export default PrivacyToggle;
