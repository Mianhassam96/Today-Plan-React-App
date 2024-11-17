import React, { Component } from "react";
import Plan from "./plan";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    item: [],
    text: "",
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleAdd = () => {
    if (this.state.text.trim()) {
      this.setState((prevState) => ({
        item: [...prevState.item, prevState.text],
        text: "",
      }));
    }
  };

  // Define handleDelete function
  handleDelete = (index) => {
    this.setState((prevState) => ({
      item: prevState.item.filter((_, i) => i !== index),
    }));
  };

  render() {
    return (
      <>
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
              <h1 className="text-center">Today's Plan</h1>
              <div className="row">
                <div className="col-9">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Write Plan Here"
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-2">
                  <button
                    className="btn btn-warning px-5 font-weight-bold"
                    onClick={this.handleAdd}
                  >
                    Add
                  </button>
                </div>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row m-5">
                  <Plan items={this.state.item} onDelete={this.handleDelete} />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} MultiMian | All Rights Reserved</p>
        </footer>
      </>
    );
  }
}

export default App;
