import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  editFirstName,
  editLastName,
  editBio,
  editLocation,
  editWebsite,
  editDOB,
} from "../profile/profile-reducer.js";

const EditProfile = () => {
  const profile = useSelector((state) => state.profile);
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [bio, setBio] = useState(profile.bio);
  const [location, setLocation] = useState(profile.location);
  const [website, setWebsite] = useState(profile.website);
  const [dob, setDob] = useState(profile.dateOfBirth);

  const dispatch = useDispatch();

  const onClickSaveHandler = () => {
    dispatch(editFirstName(firstName));
    dispatch(editLastName(lastName));
    dispatch(editBio(bio));
    dispatch(editLocation(location));
    dispatch(editWebsite(website));
    dispatch(editDOB(dob));
  };

  return (
    <div>
      <div className="row mb-2">
        <div className="w-auto mt-2">
          <Link to="/tuiter/profile">
            <FontAwesomeIcon
              icon={faX}
              style={{ color: "black" }}
              className="fa-l ms-5"
            />
          </Link>
        </div>
        <div className="w-50 mt-1">
          <div className="fw-bold fs-5">Edit Profile</div>
        </div>
        <Link
          className="bg-black text-white rounded-pill btn fw-bold ms-auto me-4"
          style={{ width: "fit-content" }}
          to="/tuiter/profile"
          onClick={() => onClickSaveHandler()}
        >
          Save
        </Link>
      </div>

      <div className="mb-5">
        <img src={`/images/${profile.bannerPicture}`} width="100%" />
        <div className="position-relative">
          <img
            src={`/images/${profile.profilePicture}`}
            className="p-0 m-0 border-0 rounded-circle position-absolute"
            style={{ bottom: "-50px", left: "20px" }}
            width="100px"
            height="100px"
          />
        </div>
      </div>

      <div className="pt-3">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="Please enter name"
            value={firstName + " " + lastName}
            onChange={(e) => {
              const [first, last] = e.target.value.split(" ");
              console.log(e.target.value.split(" "));
              setFirstName(first);
              setLastName(last);
            }}
          />
          <label for="floatingName">Name</label>
        </div>

        <div class="form-floating mb-3">
          <textarea
            className="form-control h-auto"
            placeholder="Leave a biography here"
            id="floatingBio"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          ></textarea>
          <label for="floatingBio">Bio</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingLocation"
            placeholder="Please enter location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <label for="floatingLocation">Location</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingWeb"
            placeholder="Please enter website"
            value={website}
            onChange={(e) => {
              setWebsite(e.target.value);
            }}
          />
          <label for="floatingWeb">Website</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingDOB"
            placeholder="Please enter DOB"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
          <label for="floatingDOB">Birth date</label>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
