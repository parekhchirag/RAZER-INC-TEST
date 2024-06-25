import React from "react";
import { useSelector } from "react-redux";

const ProfileDetails = () => {
  const profiles = useSelector((state) => state.profiles.profiles);
  const selectedProfileId = useSelector(
    (state) => state.profiles.selectedProfileId
  );
  const selectedProfile = profiles.find((p) => p.id === selectedProfileId);

  return <div className={`profile-details`}>{selectedProfile.name}</div>;
};
export default ProfileDetails;
