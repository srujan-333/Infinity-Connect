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
  const [row,setRow] = useState();

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
    setSearchValue(""); // Reset search input when switching modes
  };

  const handleFileUpload = (event) => {
    setImage(event.target.files[0]);
    console.log("Uploaded File:", file);

    // You can implement API calls for image search here
  };
  

  const getdata = async()=>{
    let response = await fetch(`http://localhost:8080/${res.id}`);
    let data = await response.json();
    setRow(data);
  }

  const submitdata = async (event) => {
    event.preventDefault();

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
        console.log(result);
        getdata();
        
    } catch (error) {
      console.error("Error uploading image:", error);
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
                        type={searchType === "phone" ? "tel" : "text"}
                        placeholder={`Search by ${searchType}`}  // ✅ Corrected string interpolation
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    
                    )}
                    <button type="submit">Search</button>
                </form>
                <div>
                    <ResponseCard p={row}/>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Search;