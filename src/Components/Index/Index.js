// react setup
import React from "react";

// Components
import Home from "./../Home/Home";
import About from "./../About/About";
import Footer from "./../Footer/Footer";
import Portofolio from "./../Portofolio/Portofolio";
import Profile from "./../Profile/Profile";
import Work from "./../Work/Work";

// App Component
function Index() {
  return (
    <div className="Index">
      <Home />
      <Work />
      <Portofolio />
      <Profile />
      <About />
      <Footer />
    </div>
  );
}

export default Index;
