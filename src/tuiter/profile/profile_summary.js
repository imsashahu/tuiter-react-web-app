import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faComment,
  faLocationDot,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileSummaryItem = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <div>
      <div className="row mb-2">
        <div className="float-left w-auto">
          <Link to="/tuiter/home">
            <FontAwesomeIcon
              icon={faLongArrowAltLeft}
              style={{ color: "black" }}
              className="ms-3 mt-2 fa-2xl"
            />
          </Link>
        </div>

        <div className="float-left w-50">
          <div className="fw-bold fs-5">
            {profile.firstName} {profile.lastName}
          </div>
          <div>6,114 tweets</div>
        </div>
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

        <Link
          className="border-dark bg-white rounded-pill ps-2 pe-2 float-end m-1 btn btn-light"
          to="/tuiter/edit-profile"
        >
          Edit Profile
        </Link>
      </div>

      <div className="pt-3">
        <div className="fw-bolder fs-4">
          {profile.firstName} {profile.lastName}
        </div>
        <div>{profile.handle}</div>
      </div>

      <div className="mt-3 mb-3">{profile.bio}</div>

      <div className="mb-3">
        <FontAwesomeIcon
          icon={faLocationDot}
          style={{ color: "grey" }}
          className="ms-1 me-2"
        />
        <span className="me-2">{profile.location}</span>
        <FontAwesomeIcon
          icon={faComment}
          style={{ color: "grey" }}
          className="ms-1 me-2"
        />
        <span className="me-2">Born {profile.dateOfBirth}</span>
        <FontAwesomeIcon
          icon={faCalendar}
          style={{ color: "grey" }}
          className="ms-1 me-2"
        />
        <span className="me-2">Joined {profile.dateJoined}</span>
      </div>

      <div className="mb-3">
        <span className="fw-bold">{profile.followingCount}</span>
        <span className="ms-1 me-4">Following</span>
        <span className="fw-bold">{profile.followersCount}</span>
        <span className="ms-1">Follower</span>
      </div>
    </div>
  );
};

export default ProfileSummaryItem;
