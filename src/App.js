import { useSelector } from "react-redux";
import "./App.scss";
import ProfileList from "./components/ProfileList";
import ProfileDetails from "./components/ProfileDetails";
import Toolbar from "./components/Toolbar";
import { useEffect } from "react";
import { useSaveProfilesMutation } from "./features/profilesApiSlice";

function App() {
  const profiles = useSelector((state) => state.profiles.profiles);
  const [saveProfiles] = useSaveProfilesMutation();

  // Save profiles to LocalStorage whenever profiles state changes
  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(profiles));
  }, [profiles]);

  useEffect(() => {
    const handleSaveProfiles = () => {
      saveProfiles(profiles);
    };

    const saveTimeout = setTimeout(handleSaveProfiles, 3000);

    return () => clearTimeout(saveTimeout);
  }, [profiles, saveProfiles]);
  return (
    <div className="App">
      <div className="main-container">
        <div className="left-panel">
          <div className="highlight-color">PROFILE LIST</div>
          <ProfileList />
          <Toolbar />
        </div>
        <div className="right-panel">
          <ProfileDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
