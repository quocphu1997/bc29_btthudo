import React, { Component } from "react";

import clothes from "../../../Data/clothes.json";
import { connect } from "react-redux";
class Tabs extends Component {
  renderTabs = () => {
    return clothes.navPills.map((ele) => {
      return (
        <li
          onClick={() => this.props.selectecType(ele.type)}
          className="nav-item"
          key={ele.tabName}
        >
          <a
            className={`nav-link ${ele.active && "active"}`}
            data-toggle="pill"
            href={"#" + ele.tabName} //or {`#${ele.tabName}`}
          >
            {ele.showName}
          </a>
        </li>
      );
    });
  };
  render() {
    return (
      <div>
        <ul className="nav nav-pills">{this.renderTabs()}</ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectecType: (clothes) => {
      dispatch({
        type: "SELECTED_TYPE",
        payload: clothes,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(Tabs);
