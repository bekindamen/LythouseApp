import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../res/slideimg.png";

import React, { Component } from "react";

export default class SlickCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);

    this.state = {
      slideIndex: 0,
      col1: "#e40b0b",
      col2: "#d4c1c1",
      col3: "#d4c1c1",
      white: "#d4c1c1",
      red: "#e40b0b",
    };
  }

  next(props) {
    this.slider.slickNext();
  }
  previous(props) {
    this.slider.slickPrev();
  }

  handleTextCol() {
    if (this.state.slideIndex < 3) {
      this.setState({ col1: this.state.red });
      this.setState({ col2: this.state.white });

      this.setState({ col3: this.state.white });
    }

    if (this.state.slideIndex > 2 && this.state.slideIndex < 6) {
      this.setState({ col2: this.state.red });
      this.setState({ col1: this.state.white });
      this.setState({ col3: this.state.white });
    }
    if (this.state.slideIndex > 5) {
      this.setState({ col3: this.state.red });
      this.setState({ col1: this.state.white });
      this.setState({ col2: this.state.white });
    }
  }

  handleOnClick = (index) => () => {
    this.slider.slickGoTo(index);
  };

  render() {
    this.handleTextCol()
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className="marginbottom">
        <div>
          <link-like2
            id="left"
            onClick={this.handleOnClick(0)}
            className="left"
            style={{ color: this.state.col1 }}
          >
            Predict
          </link-like2>
          <link-like
            id="center"
            onClick={this.handleOnClick(3)}
            className="center"
            style={{ color: this.state.col2 }}
          >
            Prepare
          </link-like>
          <link-like
            id="right"
            onClick={this.handleOnClick(6)}
            className="right"
            style={{ color: this.state.col3 }}
          >
            Prevent
          </link-like>
        </div>

        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div key={1}>
            <svg
              style={{ border: "none" }}
              className="borderwidth"
              viewBox="00 00 600 300"
            >
              <image xlinkHref={img} className="w" />

              <a>
                <rect
                  onClick={this.previous}
                  className="arrow"
                  x="535"
                  opacity="0"
                  y="76"
                  width="18"
                  height="12"
                />
              </a>
              <a>
                <rect
                  onClick={this.next}
                  className="arrow"
                  x="560"
                  y="76"
                  opacity="0"
                  width="18"
                  height="12"
                />
              </a>
            </svg>
          </div>
          <div key={2}>
            <svg className="borderwidth" viewBox="00 00 600 300">
              <image xlinkHref={img} className="w" />

              <a>
                <rect
                  onClick={this.previous}
                  className="arrow"
                  x="535"
                  opacity="0"
                  y="76"
                  width="18"
                  height="12"
                />
              </a>
              <a>
                <rect
                  onClick={this.next}
                  className="arrow"
                  x="560"
                  y="76"
                  width="18"
                  opacity="0"
                  height="12"
                />
              </a>
            </svg>
          </div>
          <div key={3}>
            <svg className="borderwidth" viewBox="00 00 600 300">
              <image xlinkHref={img} className="w" />

              <a>
                <rect
                  onClick={this.previous}
                  className="arrow"
                  x="535"
                  y="76"
                  width="18"
                  opacity="0"
                  height="12"
                />
              </a>
              <a>
                <rect
                  onClick={this.next}
                  className="arrow"
                  x="560"
                  y="76"
                  width="18"
                  opacity="0"
                  height="12"
                />
              </a>
            </svg>
          </div>
          <div key={4}>
            <svg className="borderwidth" viewBox="00 00 600 300">
              <image xlinkHref={img} className="w" />

              <a>
                <rect
                  onClick={this.previous}
                  className="arrow"
                  x="535"
                  y="76"
                  width="18"
                  opacity="0"
                  height="12"
                />
              </a>
              <a>
                <rect
                  onClick={this.next}
                  className="arrow"
                  opacity="0"
                  x="560"
                  y="76"
                  width="18"
                  height="12"
                />
              </a>
            </svg>
          </div>
          <div key={5}>
            <svg className="borderwidth" viewBox="00 00 600 300">
              <image xlinkHref={img} className="w" />
              <a>
                <rect
                  onClick={this.previous}
                  className="arrow"
                  x="535"
                  opacity="0"
                  y="76"
                  width="18"
                  height="12"
                />
              </a>
              <a>
                <rect
                  onClick={this.next}
                  className="arrow"
                  x="560"
                  opacity="0"
                  y="76"
                  width="18"
                  height="12"
                />
              </a>
            </svg>
          </div>
          <div key={6}>
            <svg className="borderwidth" viewBox="00 00 600 300">
              <image xlinkHref={img} className="w" />

              <a>
                <rect
                  onClick={this.previous}
                  className="arrow"
                  x="535"
                  y="76"
                  opacity="0"
                  width="18"
                  height="12"
                />
              </a>
              <a>
                <rect
                  onClick={this.next}
                  className="arrow"
                  x="560"
                  opacity="0"
                  y="76"
                  width="18"
                  height="12"
                />
              </a>
            </svg>
          </div>
          <div key={7}>
            <svg className="borderwidth" viewBox="00 00 600 300">
              <image xlinkHref={img} className="w" />

              <a>
                <rect
                  onClick={this.previous}
                  className="arrow"
                  x="535"
                  y="76"
                  opacity="0"
                  width="18"
                  height="12"
                />
              </a>
              <a>
                <rect
                  onClick={this.next}
                  className="arrow"
                  x="560"
                  y="76"
                  opacity="0"
                  width="18"
                  height="12"
                />
              </a>
            </svg>
          </div>
          <div key={8}>
            <svg className="borderwidth" viewBox="00 00 600 300">
              <image xlinkHref={img} className="w" />

              <a>
                <rect
                  onClick={this.previous}
                  className="arrow"
                  x="535"
                  opacity="0"
                  y="76"
                  width="18"
                  height="12"
                />
              </a>
              <a>
                <rect
                  onClick={this.next}
                  className="arrow"
                  x="560"
                  y="76"
                  width="18"
                  opacity="0"
                  height="12"
                />
              </a>
            </svg>
          </div>
          <div key={9}>
            <svg className="borderwidth" viewBox="00 00 600 300">
              <image xlinkHref={img} className="w" />

              {/* <text className="fade-in-text" x="400" y="130">
              {this.state.sometext}
              </text>

              <text className="fade-in-text" x="400" y="160">
              {this.state.sometext}
              </text>
              <text className="fade-in-text" x="400" y="190">
              {this.state.sometext}
              </text> */}
              <a>
                <rect
                  onClick={this.previous}
                  className="arrow"
                  x="535"
                  y="76"
                  opacity="0"
                  width="18"
                  height="12"
                />
              </a>
              <a>
                <rect
                  onClick={this.next}
                  className="arrow"
                  x="560"
                  y="76"
                  opacity="0"
                  width="18"
                  height="12"
                />
              </a>
            </svg>
          </div>
        </Slider>
      </div>
    );
  }
}
