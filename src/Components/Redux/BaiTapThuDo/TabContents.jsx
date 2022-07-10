import React, { Component } from "react";
import clothes from "../../../Data/clothes.json";
import { connect } from "react-redux";
class TabContents extends Component {
  renderContents = () => {
    const filterData = clothes.tabPanes.filter((ele) => {
      return ele.type === this.props.selectedType;
    });
    return filterData.map((ele) => {
      const { id, imgSrc_jpg, name, type, imgSrc_png } = ele;
      return (
        <div className="col-md-3" key={id}>
          <div className="card text-center">
            <img src={imgSrc_jpg} alt="pic" />
            <h4>
              <b>{name}</b>
            </h4>
            <button
              onClick={() =>
                this.props.dispatch({
                  type: "CHANGE_MODAL",
                  payload: { type, imgSrc_png },
                })
              }
            >
              Thử đồ
            </button>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="well mt-2 p-5">
          {/* Tab panes */}
          <div className="tab-content">
            <div className="tab-pane container active">
              <div className="container">
                <div className="row">{this.renderContents()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.thuDoReducer,
  };
};
export default connect(mapStateToProps)(TabContents);
