import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import Message from "./message";

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [followedUsers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let user_id = localStorage.getItem("user_id");
        console.log("User ID:", user_id);

        // Fetch list of followers
        let response = await fetch(`http://localhost:8080/users/getfollowers/${user_id}`, {
          method: "GET",
          headers: { "Accept": "application/json" },
        });
        let data = await response.json();

        // Fetch details of each follower in parallel
        const followerDetails = await Promise.all(
          data.map(async (follower) => {
            let res = await fetch(`http://localhost:8080/users/${follower.followerid}`, {
              method: "GET",
              headers: { "Accept": "application/json" },
            });
            let d = await res.json();
            return { name: d.name, imageUrl: d.profile || "https://via.placeholder.com/50" };
          })
        );

        setFollowers(followerDetails); // ✅ Update state only once after all requests complete

      } catch (error) {
        console.error("Error fetching follower data:", error);
      }
    };

    fetchData();
  }, []); // ✅ Runs only once on mount

  return (
    <div className="container-fluid vh-80 d-flex flex-column p-0">
      {/* Header (Full Width) */}
      <Header />

      <div className="d-flex flex-grow-1">
        {/* Sidebar (Fixed on the Left) */}
        <div className="bg-secondary text-white col-2 vh-100">
          <Sidebar />
        </div>

        {/* Main Content (Chat & Following Section) */}
        <div className="col-10 d-flex p-0">
          {/* Left Side: Chat Section */}
          <div className="col-8 d-flex flex-column border-end border-secondary">
            <Message selectedUser={selectedUser} />
          </div>

          {/* Right Side: Following List */}
          <div className="col-4 bg-dark p-3 overflow-auto text-center text-white">
            <h2 className="mb-3">Following</h2>
            {followedUsers.length > 0 ? (
              followedUsers.map((person, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedUser(person)}
                  className="d-flex align-items-center bg-secondary text-white p-2 mb-2 rounded-3 shadow-sm cursor-pointer"
                >
                  <img
                    src={person.imageUrl}
                    alt={person.name}
                    className="rounded-circle me-2"
                    width="40"
                    height="40"
                  />
                  <span>{person.name}</span>
                </div>
              ))
            ) : (
              <p>No followers found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
