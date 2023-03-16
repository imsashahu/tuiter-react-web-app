import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../profile/profiles.json";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <div>
      <div className="row mb-2">
        <div className="float-left w-auto mt-2">
          <Link to="/tuiter/profile">
            <FontAwesomeIcon
              icon={faX}
              style={{ color: "black" }}
              className="fa-l ms-5"
            />
          </Link>
        </div>
        <div className="float-left w-50 mt-1">
          <div className="fw-bold fs-5">Edit Profile</div>
        </div>
        <Link
          className="bg-black text-white rounded-pill btn fw-bold w-auto ms-5"
          style={{ width: "fit-content" }}
          to="/tuiter/profile"
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
          />
          <label for="floatingName">Name</label>
        </div>

        <div class="form-floating mb-3">
          <textarea
            className="form-control h-auto"
            placeholder="Leave a biography here"
            id="floatingBio"
          ></textarea>
          <label for="floatingBio">Bio</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingLocation"
            placeholder="Please enter location"
          />
          <label for="floatingLocation">Location</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingWeb"
            placeholder="Please enter website"
          />
          <label for="floatingWeb">Website</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingDOB"
            placeholder="Please enter DOB"
          />
          <label for="floatingDOB">Birth date</label>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
