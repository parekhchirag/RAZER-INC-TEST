import { createSlice } from "@reduxjs/toolkit";

const defaultProfiles = [
  { id: 1, name: "Default", isDefault: true },
  { id: 2, name: "Game", isDefault: true },
  { id: 3, name: "Movie", isDefault: true },
  { id: 4, name: "Music", isDefault: true },
];

const loadProfilesFromLocalStorage = () => {
  const savedProfiles = localStorage.getItem("profiles");
  return savedProfiles ? JSON.parse(savedProfiles) : defaultProfiles;
};

const initialProfiles = loadProfilesFromLocalStorage();

const profilesSlice = createSlice({
  name: "profiles",
  initialState: {
    profiles: initialProfiles,
    selectedProfileId: 1,
    isEditingSelectedProfile: false,
  },
  reducers: {
    selectProfile: (state, action) => {
      state.selectedProfileId = action.payload;
    },
    addProfile: (state) => {
      const newProfile = {
        id: state.profiles.length + 1,
        name: "New Profile",
        isDefault: false,
      };
      state.profiles.push(newProfile);
      state.selectedProfileId = newProfile.id;
    },
    toggleProfileEditing: (state, action) => {
      state.isEditingSelectedProfile = action.payload;
    },
    renameProfile: (state, action) => {
      const { id, newName } = action.payload;
      const profile = state.profiles.find((profile) => profile.id === id);
      if (profile && newName.trim() !== "") {
        profile.name = newName.trim();
      }
    },
    deleteProfile: (state, action) => {
      const index = state.profiles.findIndex(
        (profile) => profile.id === action.payload
      );
      if (index !== -1) {
        if (state.profiles[index].isDefault) return;
        state.profiles.splice(index, 1);
        if (state.profiles.length > 0) {
          state.selectedProfileId = state.profiles[Math.max(0, index - 1)].id;
        } else {
          state.selectedProfileId = null;
        }
      }
    },
    moveProfileUp: (state, action) => {
      const index = state.profiles.findIndex(
        (profile) => profile.id === action.payload
      );
      if (index > 0) {
        [state.profiles[index], state.profiles[index - 1]] = [
          state.profiles[index - 1],
          state.profiles[index],
        ];
      }
    },
    moveProfileDown: (state, action) => {
      const index = state.profiles.findIndex(
        (profile) => profile.id === action.payload
      );
      if (index < state.profiles.length - 1) {
        [state.profiles[index], state.profiles[index + 1]] = [
          state.profiles[index + 1],
          state.profiles[index],
        ];
      }
    },
  },
});

export const {
  selectProfile,
  addProfile,
  toggleProfileEditing,
  renameProfile,
  deleteProfile,
  moveProfileUp,
  moveProfileDown,
} = profilesSlice.actions;
export default profilesSlice.reducer;
