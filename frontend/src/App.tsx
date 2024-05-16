import "./App.css";
import AboutSection from "./components/About";
import ContactSection from "./components/Contact";
import HomeSection from "./components/Home";
import Navbar from "./components/Navbar";
import ProfileSection from "./components/Profile";

function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <ProfileSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

export default App;
