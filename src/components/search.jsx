import React, { useState } from "react";
import "./search.css";
import Sidebar from "./sidebar";
import Header from "./header";
import ResponseCard from "./responsecard";
const Search = () => {
  const [searchType, setSearchType] = useState("name");
  const [searchValue, setSearchValue] = useState("");
  const [image,setImage] = useState("");
  const [res,setResult] = useState("sank");
  const [row,setRow] = useState({id:1,imageUrl:"",instagramId:"",phone:"",email:"",facebookId:"",name:"hari"});
  const [show,setshow]=useState(false);
  const handleSearchTypeChange = (type) => {
    setshow(false);
    setSearchType(type);
    setSearchValue(""); // Reset search input when switching modes
  };

  const handleFileUpload = (event) => {
    setImage(event.target.files[0]);
    // console.log("Uploaded File:", file);

    // You can implement API calls for image search here
  };
  

  const getdata = async(id)=>{
    console.log(id);
    console.log("id above");
    let response = await fetch(`http://localhost:8080/users/${id}`,{method: "GET",headers: {"Accept": "application/json"}});
    let data = await response.json();
    console.log(data.name);
    setRow({name:data.name,id:data.id,profile:data.profile,email:data.email,pno:data.pno,insta_id:data.insta_id,facebook_id:data.facebook_id,linkdin_id:data.linkdin_id});
    setshow(true);
}

  const submitdata = async (event) => {
    event.preventDefault();
if(searchType==="photo"){
    if (!image) {
      alert("Please select an image first!");
      return;
    }

    // Creating FormData object to send the file
    const formData = new FormData();
    formData.append("image", image);
   console.log(image);
    try {
        const response = await fetch("http://localhost:8080/users/find_similar", {
            method: "POST",
            body: formData
        });
        console.log(response);
        const result = await response.json();
        setResult(result);
        console.log(result.id);
        getdata(result.id);
        
    } catch (error) {
      console.error("Error uploading image:", error);
    }
}
else if(searchType==="name")
{
    if(!searchValue)
    {
        alert("Please enter an Name!");
      return;
    }
    const formData = new FormData();
    formData.append("name", searchValue);
    console.log(searchValue);
    try {
        const response = await fetch("http://localhost:8080/users/findbyname", {
            method: "POST",
            body: formData
        });
        console.log(response);
        const result = await response.json();
        setResult(result);
        console.log(result.id);
        getdata(result.id);
        
    } catch (error) {
      console.error("Error uploading image:", error);
    }
    
}
  };
  return (
    <div>
        <Header/>
        <div>
            <Sidebar/>
            <div className="search-container">
      
                <h3>Search By</h3>
      
                <div className="search-options">
                    <button onClick={() => handleSearchTypeChange("photo")}>By Photo</button>
                    <button onClick={() => handleSearchTypeChange("name")}>By Name</button>
                    <button onClick={() => handleSearchTypeChange("phone")}>By Phone Number</button>
                </div>

                <form onSubmit={submitdata} id="form" className="search-box">
                    {searchType === "photo" ? (
                    <input type="file" accept="image/*" onChange={handleFileUpload} />
                    ) : (
                        <input
                        type={searchType === "phone" ? "name" : "text"}
                        placeholder={`Search by ${searchType}`}  // ✅ Corrected string interpolation
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    
                    )}
                    <button type="submit">Search</button>
                </form>
                <div>
                    
                    {show && <ResponseCard p={row}/>}
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Search;