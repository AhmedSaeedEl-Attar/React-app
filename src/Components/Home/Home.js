import React from "react";
import {
  HomeSection,
  ConButton,
  ConName1,
  ConName3,
  ConPspan,
  HomeContent,
} from "./Homecss";

export default function Home() {
  return (
    <HomeSection>
      <div className="container">
        <HomeContent>
          <ConName1>Ahmed Saeed</ConName1>
          <ConName3>Front End developer</ConName3>
          <p>
            Iam a professional <ConPspan>UX Designer</ConPspan> and Front-End
            Developer creating modern and resposive designs to Web and Mobile.
            Let us work together. Thank you.
          </p>
          <ConButton>Let,s Begin</ConButton>
        </HomeContent>
      </div>
    </HomeSection>
  );
}
