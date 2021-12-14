import React, { Component } from "react";
import {
  WorkItem,
  WorkSection,
  HeadWork,
  HeadWorkSpan,
  WorkContent,
  Icon,
  ItemD,
  ItemdP,
  ItemdPPP,
  Itemdhr,
} from "./Workcss";
import axios from "axios";

class Work extends Component {
  state = {
    workss: [],
  };

  componentDidMount() {
    // عشان يستدعي اللينك دة بعد ما كل حاجة تحمل
    axios
      .get("./JS/data.json")
      .then((res) => this.setState({ workss: res.data.works }));
  }

  render() {
    const { workss } = this.state;

    const Workitem = workss.map((worki) => {
      return (
        <WorkItem key={worki.id}>
          <Icon className={worki.icon_name}></Icon>
          <ItemD>
            <ItemdP>{worki.title}</ItemdP>
            <Itemdhr />
            <ItemdPPP>{worki.body}</ItemdPPP>
          </ItemD>
        </WorkItem>
      );
    });

    return (
      <WorkSection id="work">
        <div className="container">
          <HeadWork>
            <HeadWorkSpan>My</HeadWorkSpan> Work
          </HeadWork>
          <WorkContent>{Workitem}</WorkContent>
        </div>
      </WorkSection>
    );
  }
}

export default Work;
