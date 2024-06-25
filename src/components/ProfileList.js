import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileItem from "./ProfileItem";
import { selectProfile } from "../features/profilesSlice";

const ProfileList = () => {
  const profiles = useSelector((state) => state.profiles.profiles);
  const selectedProfileId = useSelector(
    (state) => state.profiles.selectedProfileId
  );
  const isProfileEditing = useSelector(
    (state) => state.profiles.isEditingSelectedProfile
  );
  const dispatch = useDispatch();

  return (
    <div className="profiles-container">
      {profiles.map((p) => {
        return (
          <ProfileItem
            key={p.id}
            profile={p}
            onClick={() => dispatch(selectProfile(p.id))}
            isSelected={p.id === selectedProfileId}
            isEditing={p.id === selectedProfileId && isProfileEditing}
            selectedProfileId={selectedProfileId}
          />
        );
      })}
    </div>
  );
};
export default ProfileList;
