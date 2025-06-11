import { useState } from "react";
import "./responsecard.css";

function ResponseCard({p}){
    
    console.log(p)
    const [isFollowing, setIsFollowing] = useState(false);

    const follow = async()=>{
      console.log("Clicking");
      let form = new FormData();
      let user_id = localStorage.getItem("user_id");
      form.append("user_id",user_id);
      form.append("follower_id",p.id)
      console.log(p.user_id,p.id);
      let response = await fetch("http://localhost:8080/users/follow",{ method: "POST",
        body: form});
      let row = await response.json();
      

    }  
      
    return(
        <div className="user-profile">
        <div className="user-header">
          <div className="user-info">
            <img
              src={
                p.profile ||
                "https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg"
              }
              alt="User"
              className="user-image"
            />
            <h2 className="user-name">{p.name}</h2>
          </div>
        </div>
  
       
        <div className="user-details">
          <p><strong>Phone:</strong> {p.pno||"N/A" }</p>
          <p><strong>Email:</strong> {p.email || "N/A"}</p>
          <p><strong>Instagram ID:</strong> {p.insta_id || "N/A"}</p>
          <p><strong>Facebook ID:</strong> {p.facebook_id || "N/A"}</p>
          <div>
            <button className="btn btn-primary" onClick={follow}>Follow</button>
          </div>
        </div>
  
        {/* Follow/Unfollow Button */}
       
      </div>
    );

}
export default ResponseCard;