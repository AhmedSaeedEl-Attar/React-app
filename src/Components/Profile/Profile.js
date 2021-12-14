import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import "./Profile.css";
import styled from "styled-components";

const Skilcontent = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: ${(props) => props.prograss && props.prograss};
    height: 3px;
    background-color: #89cd0e;
    left: 0;
    bottom: -11px;
  }
`;

export default function Profile() {
  const [profile, setprofile] = useState([]);
  const [skills, setskills] = useState([]);
  useEffect(() => {
    axios.get("./JS/data.json").then((res) => {
      setprofile(res.data.profile);
    });
    axios.get("./JS/data.json").then((res) => {
      setskills(res.data.Skills);
    });
  }, []);
  const Skillss = skills.map((skil) => {
    return (
      <Skilcontent prograss={skil.prograss}>
        <p>{skil.name}</p>
        <p>{skil.prograss}</p>
      </Skilcontent>
    );
  });
  const profiledata = profile.map((prodata) => {
    return (
      <>
        <p>{prodata.Name}</p>
        <p>{prodata.Birthday}</p>
        <p>{prodata.Address}</p>
        <p>{prodata.Phone}</p>
        <p>{prodata.Email}</p>
        <p>{prodata.Website}</p>
      </>
    );
  });
  return (
    <div className="prrofileSection">
      <div className="container">
        <div className="profileContent">
          <div className="personalData">
            <h1>My Profile</h1>
            <div className="dattta">
              <div className="leftSide">
                <p>Name :</p>
                <p>BirthDay : </p>
                <p>Address :</p>
                <p>Phone :</p>
                <p>Email :</p>
                <p>WebSite :</p>
              </div>
              <div className="rightSide">{profiledata}</div>
            </div>
          </div>
          <div className="skills">
            <h1>
              <span>Some</span> Skills
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              praesentium blanditiis esse cupiditate, omnis similique.
            </p>
            <div>{Skillss}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
