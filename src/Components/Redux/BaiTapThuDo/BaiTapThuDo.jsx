import React, { Component } from "react";

import "./style.css";

import Modal from "./Modal";
import TabContents from "./TabContents";
import Tabs from "./Tabs";
import Title from "./Title";

export default class BaiTapThuDo extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <Title />
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <Tabs />
            <TabContents />
          </div>
          <div className="col-md-4">
            <Modal />
          </div>
        </div>
      </div>
    );
  }
}
