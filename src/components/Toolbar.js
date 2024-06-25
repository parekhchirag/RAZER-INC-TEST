import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowDown, FaArrowUp, FaTrash, FaPlus } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import {
  addProfile,
  deleteProfile,
  moveProfileDown,
  moveProfileUp,
  toggleProfileEditing,
} from "../features/profilesSlice";

const Toolbar = () => {
  const dispatch = useDispatch();
  const selectedProfileId = useSelector(
    (state) => state.profiles.selectedProfileId
  );
  const profiles = useSelector((state) => state.profiles.profiles);
  const selectedProfileIndex = profiles.findIndex(
    (profile) => profile.id === selectedProfileId
  );
  const selectedProfile = profiles[selectedProfileIndex];
  const isDefault = selectedProfile?.isDefault;

  return (
    <div className="toolbar">
      <div className="left-actions">
        <FaArrowUp
          disabled={selectedProfileIndex === 0}
          onClick={() => dispatch(moveProfileUp(selectedProfileId))}
        />
        <FaArrowDown
          disabled={selectedProfileIndex === profiles.length - 1}
          onClick={() => dispatch(moveProfileDown(selectedProfileId))}
        />
      </div>
      <div className="right-actions">
        {!isDefault && (
          <FaTrash onClick={() => dispatch(deleteProfile(selectedProfileId))} />
        )}
        {!isDefault && (
          <FaPencil onClick={() => dispatch(toggleProfileEditing(true))} />
        )}

        <FaPlus onClick={() => dispatch(addProfile())} />
      </div>
    </div>
  );
};
export default Toolbar;
