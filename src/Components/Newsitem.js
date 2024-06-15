import React, { Component } from "react";

export class Newsitem extends Component {
  ischeck = false;
  constructor() {
    super();
    this.state = {
      share: <i className="fa-regular fa-heart"></i>,
    };
  }

  like = () => {
    if (!this.ischeck) {
      this.setState({
        share: (
          <i className="fa-solid fa-heart" style={{ color: "#ef6b6b" }}></i>
        ),
      });
      this.ischeck = true;
    } else {
      this.setState({
        share: <i className="fa-regular fa-heart"></i>,
      });
      this.ischeck = false;
    }
  };
  render() {
    let { title, description, imageurl, newsurl, mode } = this.props;
    return (
      <div className="my-3">
        <div
          className="card"
          style={{
            // width: "18rem",
            border: "1px solid",
            borderColor: mode === "dark" ? "white" : "black",
          }}
        >
          <img src={imageurl} className="card-img-top rounded" alt="..." />
          <div
            className="card-body"
            style={{
              backgroundColor: mode === "dark" ? "#114c7f" : "#e1ffff",
              color: mode === "dark" ? "white" : "black",
            }}
          >
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsurl}
              className={`btn btm-sm btn-${mode === "dark" ? "light" : "dark"}`}
              target="blank"
            >
              Read More
            </a>
            <span className="float-end">
              <button
                type="button"
                className="btn btn-link"
                onClick={this.like}
                style={{ color: mode === "dark" ? "white" : "black" }}
              >
                {this.state.share}
              </button>
              <button
                type="button"
                className="btn btn-link"
                style={{ color: mode === "dark" ? "white" : "black" }}
                onClick={() => {
                  if (navigator.share) {
                    navigator
                      .share({
                        title: title,
                        url: newsurl,
                      })
                      .then(() => {
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  } else {
                    alert("Brouser doesn,t support this web share api");
                  }
                }}
              >
                <i className="fa-solid fa-share-nodes"></i>
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
