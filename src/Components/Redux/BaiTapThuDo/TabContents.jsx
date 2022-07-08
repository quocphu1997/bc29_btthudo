import React, { Component } from "react";

export default class TabContents extends Component {
  render() {
    return (
      <div>
        <div className="well mt-2 p-5">
          {/* Tab panes */}
          <div className="tab-content">
            <div className="tab-pane container active">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="card text-center">
                      <img src="/images/clothes/topcloth1_show.jpg" alt="pic" />
                      <h4>
                        <b>Top Cloth 1</b>
                      </h4>
                      <button>Thử đồ</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card text-center">
                      <img src="/images/clothes/topcloth1_show.jpg" alt="pic" />
                      <h4>
                        <b>Top Cloth 1</b>
                      </h4>
                      <button>Thử đồ</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card text-center">
                      <img src="/images/clothes/topcloth1_show.jpg" />
                      <h4>
                        <b>Top Cloth 1</b>
                      </h4>
                      <button>Thử đồ</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card text-center">
                      <img src="/images/clothes/topcloth1_show.jpg" />
                      <h4>
                        <b>Top Cloth 1</b>
                      </h4>
                      <button>Thử đồ</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card text-center">
                      <img src="/images/clothes/topcloth1_show.jpg" />
                      <h4>
                        <b>Top Cloth 1</b>
                      </h4>
                      <button>Thử đồ</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card text-center">
                      <img src="/images/clothes/topcloth1_show.jpg" />
                      <h4>
                        <b>Top Cloth 1</b>
                      </h4>
                      <button>Thử đồ</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
