import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import {
  AboutContent,
  AboutContentP1,
  AboutContentP2,
  AboutContentP3,
  AboutSection,
  SocialItem,
  SocialItemI,
  SocialItemP,
  SocialContent,
} from "./Aboutcss";
export default function About() {
  const [SocilDatas, SetocilDatas] = useState([]);
  useEffect(() => {
    axios.get("./JS/data.json").then((res) => SetocilDatas(res.data.social));
  }, []);
  console.log(SocilDatas);
  const socialContent = SocilDatas.map((social) => {
    return (
      <>
        <SocialItem color={social.color} key={social.id}>
          <SocialItemI className={social.icon}></SocialItemI>
          <div>
            <SocialItemP>{social.title}</SocialItemP>
            <SocialItemP>{social.body}</SocialItemP>
          </div>
        </SocialItem>
      </>
    );
  });

  return (
    <AboutSection>
      <AboutContent>
        <AboutContentP1> This is Me</AboutContentP1>
        <AboutContentP2>Creative Director</AboutContentP2>
        <AboutContentP3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
          explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
          repellendus dolorum. Possimus nisi cupiditate ad veritatis?
        </AboutContentP3>
        <AboutContentP3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
          explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
          repellendus dolorum. Possimus nisi cupiditate ad veritatis?
        </AboutContentP3>
      </AboutContent>

      <SocialContent>{socialContent}</SocialContent>
    </AboutSection>
  );
}
