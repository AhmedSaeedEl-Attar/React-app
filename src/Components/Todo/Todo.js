import React, { Component } from "react";
import "./Toddcss";
import {
  TodoSection,
  TodoContent,
  TodoH1,
  TodoDiv1,
  TodoDivok,
  TodoSpan1,
  TodoSpan2,
  TodoSpan11,
  TodoSpan22,
  TodoForm,
  Todoinput1,
  Todoinput2,
  TodoNoitems,
} from "./Toddcss";

//////////////////////
function Showlist(props) {
  const { itemss, delteitem } = props;
  let length = itemss.length;
  const showitems = length ? (
    itemss.map((item) => {
      return (
        <TodoDivok key={item.id}>
          <TodoSpan11>{item.name}</TodoSpan11>
          <TodoSpan22 onClick={() => delteitem(item.id)}>&times;</TodoSpan22>
        </TodoDivok>
      );
    })
  ) : (
    <TodoNoitems> its No items Here</TodoNoitems>
  );

  return (
    <TodoDiv1>
      <TodoDivok>
        <TodoSpan1>Name</TodoSpan1>
        <TodoSpan2>Delete</TodoSpan2>
      </TodoDivok>
      <div>{showitems}</div>
    </TodoDiv1>
  );
}

/////////////////////
class Addlist extends Component {
  state = {
    name: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  addChange = (e) => {
    e.preventDefault();
    if (e.target.name.value === "") {
      return false;
    } else {
      let { additem } = this.props;
      additem(this.state);
      this.setState({
        name: "",
      });
    }
  };
  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addChange}>
          <Todoinput1
            type="text"
            placeholder="Entre Name"
            id="name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <Todoinput2 type="submit" value="Add" />
        </TodoForm>
      </div>
    );
  }
}

////////////////////////
class Todo extends Component {
  state = {
    items: [{ id: 1, name: "Add what you want" }],
  };

  delteitem = (id) => {
    // let items = this.state.items;
    // let i = items.findIndex((item) => item.id === id);
    // items.splice(i, 1);
    // this.setState({ items });
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items });
  };
  addItem = (item) => {
    let items = this.state.items;
    item.id = items.length + 1;
    items.push(item);
    this.setState({ items: items });
  };
  render() {
    return (
      <TodoSection>
        <div className="container">
          <TodoContent>
            <TodoH1>Todo list</TodoH1>
            <Showlist itemss={this.state.items} delteitem={this.delteitem} />
            <Addlist additem={this.addItem} />
          </TodoContent>
        </div>
      </TodoSection>
    );
  }
}

export default Todo;
