import React, { Component } from "react";
import "./CrudApp.css";

///////////////////////////////////////////

function CrudForm(props) {
  return (
    <div>
      <form className="crudadppform" onSubmit={props.addcourse}>
        <input
          required
          type="text"
          placeholder="Entre Course"
          onChange={props.updateinput}
          value={props.curentvalue}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

//////////////////////////////////////////

class CrudList extends Component {
  state = {
    isEdit: false,
  };
  RenderCourse = () => {
    return (
      <li>
        <span>{this.props.coursedata.name}</span>
        <button onClick={this.toogleState}>Edit Course</button>
        <button
          className="buttonColor"
          onClick={() => this.props.deltecourse(this.props.indexx)}
        >
          Delete Course
        </button>
      </li>
    );
  };
  ////////
  finshUpdate = (e) => {
    e.preventDefault();
    this.props.editcourseitem(this.props.indexx, this.input.value);
    this.toogleState();
  };
  renderUpdate = () => {
    return (
      <form className="crudadppform" onSubmit={this.finshUpdate}>
        <input
          ref={(v) => {
            this.input = v;
          }}
          type="text"
          defaultValue={this.props.coursedata.name}
        />
        <button type="submit">Update</button>
      </form>
    );
  };
  /////////
  toogleState = () => {
    let { isEdit } = this.state;
    isEdit = !isEdit;
    this.setState({
      isEdit: isEdit,
    });
  };
  ////////
  render() {
    let isEdit = this.state.isEdit;
    return (
      <React.Fragment>
        {isEdit ? this.renderUpdate() : this.RenderCourse()}
      </React.Fragment>
    );
  }
}

////////////////////////////////////////////////

class CrudApp extends Component {
  state = {
    courses: [
      { name: "html", id: 1 },
      { name: "css", id: 2 },
      { name: "php", id: 3 },
    ],
    curent: "",
  };
  ///////////
  updateinput = (e) => {
    this.setState({
      curent: e.target.value,
    });
  };
  ///////////
  addcourse = (e) => {
    e.preventDefault();
    let courses = this.state.courses;
    let curent = this.state.curent;
    courses.push({ name: curent });
    this.setState({
      courses: courses,
      curent: "",
    });
  };
  /////////////  ///////////////
  deltecourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses: courses,
    });
  };
  ////////////
  editcourseitem = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course["name"] = value;
    this.setState({
      courses: courses,
    });
  };
  //////////
  render() {
    const { courses } = this.state;
    const noitems = () => {
      return <p className="noitem">No items Here</p>;
    };
    const courseList = courses.map((course, index) => {
      return (
        <CrudList
          allcourses={this.state.courses}
          coursedata={course}
          key={index}
          deltecourse={this.deltecourse}
          indexx={index}
          editcourseitem={this.editcourseitem}
        />
      );
    });

    return (
      <div className="crudapp">
        <div className="container">
          <div className="crudappcontent">
            <h1 className="crudapph1">Crud App</h1>
            <CrudForm
              className="crudadppform"
              updateinput={this.updateinput}
              addcourse={this.addcourse}
              curentvalue={this.state.curent}
            />
            <ul>{courses.length ? courseList : noitems()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CrudApp;
