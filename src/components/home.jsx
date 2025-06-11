import Header from "./header"
import Sidebar from "./sidebar";
const Home = () => {
    const user = {
        profilePic: "https://via.placeholder.com/150", // Replace with actual profile pic URL
        instagram: "insta_username",
        facebook: "fb_username",
        linkedin: "linkedin_username",
      };
    return (
        <div>
            <Header />
            <div>
            <div className="w-30 bg-secondary  text-white">
            <Sidebar />

            </div>

    
        <div className="w-70 p-5 text-center ml-auto mr-auto">
            <h1>Welcome to Infinity Connect</h1>
            
        </div>
  </div>
</div>

    );
};

export default Home;
