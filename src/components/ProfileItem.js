import React, { useCallback, useState } from "react";
import { FaSlidersH, FaGamepad, FaFilm, FaMusic } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { renameProfile, toggleProfileEditing } from "../features/profilesSlice";

const iconMap = {
  1: <FaSlidersH />,
  2: <FaGamepad />,
  3: <FaFilm />,
  4: <FaMusic />,
};

const ProfileItem = ({ isEditing, profile, isSelected, onClick }) => {
  const [newProfileName, setNewProfileName] = useState(profile.name);
  const isDefault = profile.isDefault;
  const dispatch = useDispatch();

  const stopProfileNameChange = useCallback(() => {
    dispatch(toggleProfileEditing(false));
  }, [dispatch]);

  const handleProfileNameChange = useCallback(
    (e) => {
      const newName = e.target.value;
      setNewProfileName(newName);
      dispatch(renameProfile({ id: profile.id, newName }));
    },
    [dispatch, profile.id]
  );
  const detectEnterPress = useCallback(
    (e) => {
      if (e.key === "Enter" || e.keyCode === 13 || e.key === "Escape") {
        stopProfileNameChange();
      }
    },
    [stopProfileNameChange]
  );

  return (
    <div
      className={`profile-item ${isSelected && "selected"}`}
      key={profile.id}
      onClick={onClick}
    >
      {isDefault ? iconMap[profile.id] : <FaSlidersH />}
      {!isEditing && <span className="profile-name">{profile.name}</span>}
      {isEditing && (
        <input
          className="profile-rename-input"
          value={newProfileName}
          autoFocus
          onBlur={stopProfileNameChange}
          onChange={handleProfileNameChange}
          onKeyUp={detectEnterPress}
        />
      )}
    </div>
  );
};
export default React.memo(ProfileItem, (prevProps, nextProps) => {
  return (
    prevProps.isEditing === nextProps.isEditing &&
    prevProps.profile.name === nextProps.profile.name &&
    prevProps.isSelected === nextProps.isSelected &&
    prevProps.onClick === nextProps.onClick
  );
});
