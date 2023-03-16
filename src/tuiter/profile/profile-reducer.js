import { createSlice } from "@reduxjs/toolkit";

const initialProfile = {
  firstName: "Jose",
  lastName: "Annunziato",
  handle: "@jannunzi",
  profilePicture: "jose.png",
  bannerPicture: "polyglot.png",
  bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.",
  website: "youtube.com/webdevtv",
  location: "Boston, MA",
  dateOfBirth: "7/7/1968",
  dateJoined: "4/2009",
  followingCount: 340,
  followersCount: 223,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialProfile,
  reducers: {
    editFirstName(state, action) {
      const newName = action.payload;
      state.firstName = newName;
    },
    editLastName(state, action) {
      const newName = action.payload;
      state.lastName = newName;
    },
    editBio(state, action) {
      const newBio = action.payload;
      state.bio = newBio;
    },
    editLocation(state, action) {
      const newLoc = action.payload;
      state.location = newLoc;
    },
    editWebsite(state, action) {
      const newWeb = action.payload;
      state.website = newWeb;
    },
    editDOB(state, action) {
      const newDOB = action.payload;
      state.dateOfBirth = newDOB;
    },
  },
});
export const {
  editFirstName,
  editLastName,
  editBio,
  editLocation,
  editWebsite,
  editDOB,
} = profileSlice.actions;
export default profileSlice.reducer;
