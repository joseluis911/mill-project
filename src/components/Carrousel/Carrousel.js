import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import classes from "./Carrousel.module.css";
import Section from "../Section/Section";
import Button from "../Button/Button";
const Carrousel = () => (
  <CarouselProvider
    className={classes.Carrousel}
    totalSlides={3}
    infinite
    isPlaying
    playDirection="forward"
    interval={5000}
    naturalSlideHeight={110}
    naturalSlideWidth={100}
  >
    <Slider className={classes.Slider}>
      <Slide className={classes.Slide1} index={0}>
        <Section color="#ffffff">
          <div className={classes.Section__Header}>
            <div>
              <h3 className=" Title Text__white">
                <span className="Title__strong">A new </span> kind of
              </h3>
            </div>
            <div className={classes.Title__Box}>
              <h2>healthcare</h2>
              <h2>
                <span>experience</span>
              </h2>
            </div>
          </div>
          <div className={classes.Slogan}>
            <p>
              From a{" "}
              <span className="Title__strong">
                {" "}
                virtual doctor’s appointment to medication <br /> delivery{" "}
              </span>{" "}
              to your door, we’ve got you covered.
            </p>
          </div>
          <div className={classes.Button__Box}>
            <Button type="primary">Get Started</Button>
          </div>
        </Section>
        {/* End Art of Milligram */}
      </Slide>
      <Slide className={classes.Slide2} index={1}>
        <Section color="#ffffff">
          <div className={classes.Section__Header}>
            <div>
              <h3 className=" Title Text__white">
                <span className="Title__strong">A new </span> kind of
              </h3>
            </div>
            <div className={classes.Title__Box}>
              <h2>healthcare</h2>
              <h2>
                <span>experience</span>
              </h2>
            </div>
          </div>
          <div className={classes.Slogan}>
            <p>
              From a{" "}
              <span className="Title__strong">
                {" "}
                virtual doctor’s appointment to medication <br /> delivery{" "}
              </span>{" "}
              to your door, we’ve got you covered.
            </p>
          </div>
          <div className={classes.Button__Box}>
            <Button type="primary">Get Started</Button>
          </div>
        </Section>
        {/* End Art of Milligram */}
      </Slide>
      <Slide className={classes.Slide3} index={2}>
        <Section color="#ffffff">
          <div className={classes.Section__Header}>
            <div>
              <h3 className=" Title Text__white">
                <span className="Title__strong">A new </span> kind of
              </h3>
            </div>
            <div className={classes.Title__Box}>
              <h2>healthcare</h2>
              <h2>
                <span>experience</span>
              </h2>
            </div>
          </div>
          <div className={classes.Slogan}>
            <p>
              From a{" "}
              <span className="Title__strong">
                {" "}
                virtual doctor’s appointment to medication <br /> delivery{" "}
              </span>{" "}
              to your door, we’ve got you covered.
            </p>
          </div>
          <div className={classes.Button__Box}>
            <Button type="primary">Get Started</Button>
          </div>
        </Section>
        {/* End Art of Milligram */}
      </Slide>
    </Slider>
  </CarouselProvider>
);

export default Carrousel;
