import React, { Component } from "react";
import { connect } from "react-redux";

class Modal extends Component {
  render() {
    const {
      topclothes,
      botclothes,
      shoes,
      handbags,
      necklaces,
      hairstyle,
      background,
    } = this.props.modal;
    return (
      <div>
        <div className="contain">
          <div className="body" />
          <div className="model" />
          <div
            className="hairstyle"
            style={{
              background: `url(${hairstyle})`,
            }}
          />
          <div
            className="necklace"
            style={{ background: `url(${necklaces})` }}
          />
          <div
            className="bikinitop"
            style={{ background: `url(${topclothes})` }}
          />
          <div
            className="bikinibottom"
            style={{ background: `url(${botclothes})` }}
          />
          <div className="handbag" style={{ background: `url(${handbags})` }} />
          <div className="feet" style={{ background: `url(${shoes})` }} />
          <div
            className="background"
            style={{
              backgroundImage: `url(${background})`,
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.thuDoReducer.modal,
  };
};

export default connect(mapStateToProps)(Modal);
