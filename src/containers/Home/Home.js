import React, { Component } from "react";

import classes from "./Home.module.css";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";
import "@brainhubeu/react-carousel/lib/style.css";
import DoctorsIcon from "../../images/PNG/doctors_green.png";
import PillsIcon from "../../images/PNG/pills.png";
import Box from "../../components/Box/Box";
import ArrowDownIcon from "../../images/PNG/arrow_down.png";
import BicycleIcon from "../../images/SVG/bicycle.svg";
import HappyTreeIcon from "../../images/SVG/happy_tree.svg";
import BoyIcon from "../../images/SVG/milligram_boy.svg";
import UmbrellaIcon from "../../images/SVG/umbrella.svg";
import VancouverTowerIcon from "../../images/SVG/vancouver_tower.svg";
import HandPillIcon from "../../images/SVG/hand_pill.svg";
import MotorcycleImage from "../../images/PNG/motorcycle.png";
import DialogIcon from "../../images/PNG/dialog.png";
import HeartYellowIcon from "../../images/SVG/heart_yellow.svg";
import InstagramIcon from "../../images/SVG/instagram.svg";
import FacebookIcon from "../../images/SVG/facebook.svg";
import MilligramLogoIcon from "../../images/SVG/milligram_logo.svg";
import Carrousel from "../../components/Carrousel/Carrousel";
import Row from "../../components/Row/Row";
import Column from "../../components/Column/Column";
import Logo from "../../images/SVG/logo.svg";
import StepOneIcon from "../../images/SVG/step_1.svg";
import StepTwoIcon from "../../images/SVG/step_2.svg";
import StepThreeIcon from "../../images/SVG/step_3.svg";
import ArrowRightIcon from "../../images/SVG/arrow_right.svg";
import SearchIcon from "../../images/SVG/search_icon.svg";
import MotorcycleImage2 from "../../images/PNG/motorcycle_2.png";
import CityIcon from "../../images/SVG/city.svg";
export default class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
        {/* Desktop Carrousel primera sección */}
        <Row>
          <Column type="md6-displayNoneMobile">
            <div className={classes.Column__Box_centered}>
              <div className={classes.Column__Box}>
                <img width="300px" src={Logo} alt="Milligram Logo" />
              </div>
              <div>
              <h1 style={{ lineHeight: ".8rem" }} className="Title"> <span className="Title__strong">A new </span>kind of</h1>
              <h1 style={{ lineHeight: ".8rem" }} className="Title"> <span className="Title__strong">Healthcare </span></h1>
              <h1 style={{ lineHeight: "1.8rem", borderBottom: "2px solid #ccc" }} className="Title"> Experience</h1>
              </div>
              <div></div>
              <Box>
                <h3 style={{ lineHeight: ".6rem" }} className="Title">
                  From a
                  <span className="Title__strong">
                    {" "}
                    virtual doctors appointment to
                  </span>
                </h3>
                <h3 style={{ lineHeight: ".6rem" }} className="Title">
                  <span className="Title__strong">Medication delivery</span> to
                  your door we´ve
                </h3>
                <h3 style={{ lineHeight: ".6rem" }} className="Title">
                  got you covered
                </h3>
              </Box>
              <div className={classes.Button__Box_bottom}>
                <Button type="primary">Get Started</Button>
              </div>
            </div>
          </Column>
          <Column type="md6">
            <Carrousel />
          </Column>
        </Row>

        {/* End - Desktop Carrousel primera sección */}

        {/* Desktop segunda sección */}
        <Row>
          <Column backgroundColor="#eef4fc" type="md6-displayNoneMobile">
            <div className={classes.Desktop__MeetMilligram_Section}>
              <div className={classes.Column__Box}>
                <img width="150px" src={Logo} alt="Milligram Logo" />
              </div>
              <div>
                <h3
                  style={{ lineHeight: ".1rem", paddingBottom: "0px" }}
                  className="Title"
                >
                  <span className="Title__strong">Meet</span> Milligram
                </h3>
              </div>
              <div>
                <h1
                  style={{
                    paddingBottom: "10px",
                  }}
                  className="Title Title__huge"
                >
                  a modern
                </h1>
                <h1
                  style={{
                    paddingBottom: "40px",
                  }}
                  className="Title Title__huge Title__strong"
                >
                  pharmacy{" "}
                </h1>
              </div>
              <div>
                <img src={PillsIcon} alt="Doctors Milligram" />
              </div>
              <Box>
                <h3 style={{ lineHeight: ".6rem" }} className="Title">
                  A digital pharmacy that
                  <span className="Title__strong"> offers free-same day</span>
                </h3>
                <h3 style={{ lineHeight: ".6rem" }} className="Title">
                  <span className="Title__strong">prescription delivery</span>{" "}
                  right to your doorstep
                </h3>
                <h3 style={{ lineHeight: ".6rem" }} className="Title">
                  doorstep.
                </h3>
              </Box>
              <div className={classes.Button__Box_bottom}>
                <Button type="primary">Get Started</Button>
              </div>
            </div>
          </Column>
          <Column backgroundColor="#E3FBEB" type="md6-displayNoneMobile">
            <div className={classes.Desktop__MeetMilligram_SectionRigth}>
              <div>
                <h3
                  style={{ lineHeight: ".1rem", paddingBottom: "0px" }}
                  className="Title"
                >
                  <span className="Title__strong">Meet</span> Milligram{" "}
                  <span className="Title__strong">MD</span>
                </h3>
              </div>
              <div>
                <h1
                  style={{
                    paddingBottom: "10px",
                  }}
                  className="Title Title__huge"
                >
                  a modern
                </h1>
                <h1
                  style={{
                    paddingBottom: "40px",
                  }}
                  className="Title Title__huge Title__strong"
                >
                  clinic{" "}
                </h1>
              </div>
              <div>
                <img src={DoctorsIcon} alt="Doctors Milligram" />
              </div>
              <div>
                <h3 style={{ lineHeight: ".6rem" }} className="Title">
                  A<span className="Title__strong"> digital health clinic</span>
                </h3>
                <h3 style={{ lineHeight: ".6rem" }} className="Title">
                  that offers online doctors appointments.
                </h3>
              </div>
              <div style={{ margin: "120px 0px" }}>
                <Button type="secondary">Visit a doctor</Button>
              </div>
            </div>
          </Column>
        </Row>

        {/* Termina Desktop segunda seccion */}
        <div
          className={`${classes.DisplayNoneDesktop} ${classes.ModernClinicSection}`}
        >
          <div>
            <img width="80px" src={DoctorsIcon} alt="Doctors Milligram" />
          </div>
          <div>
            <h3 className="Title">
              <span className="Title__strong">Meet</span> milligram
              <span className="Title__strong">MD</span>
            </h3>
            <h4 className="Title Title__medium">
              a modern <span className="Title__strong">clinic</span>
            </h4>
            <h5 className="Title">
              A <span className="Title__strong">digital health clinic</span>
            </h5>
            <h5 className="Title">that offers online doctors appointments</h5>
          </div>
          <div className={classes.Button__Box}>
            <Button type="primary">Visit a doctor</Button>
          </div>
        </div>

        <div
          className={`${classes.DisplayNoneDesktop} ${classes.ModernPharmacySection}`}
        >
          <div>
            <img width="80px" src={PillsIcon} alt="Doctors Milligram" />
          </div>
          <div>
            <h3 className="Title">
              <span className="Title__strong">Meet</span> milligram
            </h3>
            <h4 className="Title Title__medium">
              a modern <span className="Title__strong">pharmacy</span>
            </h4>
            <h5 className="Title">
              A <span className="Title__strong">digital health clinic</span>
            </h5>
            <h5 className="Title">
              A digital pharmacy that{" "}
              <span className="Title__strong">offers</span>
            </h5>
            <h5 className="Title">
              <span className="Title__strong">
                free-same day prescription delivery
              </span>
            </h5>
            <h5 className="Title">right to your doorstep.</h5>
          </div>
          <div className={classes.Button__Box}>
            <Button type="primary">
              Get Started
            </Button>
          </div>
        </div>

        {/* 3 simple steps dektop */}
        <Row type="onlyDesktop">
          <div className={classes.SimpleSteps__Box}>
            <div className={classes.SimpleSteps__Title_Box}>
              <h3 className="Title">
                Pharmacy<span className="Title__strong"> made easy.</span>
              </h3>
              <div>
                <h1
                  style={{
                    paddingBottom: "40px",
                  }}
                  className="Title Title__huge"
                >
                  <span className=" Title__strong">3 </span>simple steps
                </h1>
              </div>
            </div>
            <div className={classes.SimpleSteps__Card_Box}>
              <div className={classes.SimpleStep__Card}>
                <div className={classes.SimpleStep__Card_Content}>
                  <div className={classes.SimpleStep__Card_ImageBox}>
                    <div className={classes.SimpleStep__Card_Image}>
                      <img src={PillsIcon} alt="Pills Icon" />
                    </div>
                    <div className={classes.SimpleStep__Card_Image}>
                      <img
                        width="50px"
                        src={StepOneIcon}
                        alt="steps milligram"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="Title Title__medium Text__blue Title__strong">
                      Order your Rx
                    </p>
                  </div>
                  <div>
                    <h5 className="Title">
                      <span className="Title__strong">Upload</span> your
                      prescription,
                    </h5>
                    <h5 className="Title">
                      <span className="Title__strong">transfer</span> from
                      another pharmacy or{" "}
                    </h5>
                    <h5 className="Title">
                      <span className="Title__strong">
                        speak with our doctors
                      </span>{" "}
                      , we will do the rest!
                    </h5>
                  </div>
                </div>
                <div className={classes.ArrowRight__Box}>
                  <img width="20px" src={ArrowRightIcon} alt="arrow right" />
                </div>
              </div>

              <div className={classes.SimpleStep__Card}>
                <div className={classes.SimpleStep__Card_Content}>
                  <div className={classes.SimpleStep__Card_ImageBox}>
                    <div className={classes.SimpleStep__Card_Image}>
                      <img width="100px" src={BicycleIcon} alt="Bicycle Icon" />
                    </div>
                    <div className={classes.SimpleStep__Card_Image}>
                      <img
                        width="50px"
                        src={StepTwoIcon}
                        alt="steps milligram"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="Title Title__medium Text__blue Title__strong">
                      Free & Fast delivery
                    </p>
                  </div>
                  <div>
                    <h5 className="Title">
                      <span className="Title__strong">Upload</span> your
                      prescription,
                    </h5>
                    <h5 className="Title">
                      <span className="Title__strong">transfer</span> from
                      another pharmacy or{" "}
                    </h5>
                    <h5 className="Title">
                      <span className="Title__strong">
                        speak with our doctors
                      </span>{" "}
                      , we will do the rest!
                    </h5>
                  </div>
                </div>
                <div className={classes.ArrowRight__Box}>
                  <img width="20px" src={ArrowRightIcon} alt="arrow right" />
                </div>
              </div>

              <div className={classes.SimpleStep__Card}>
                <div className={classes.SimpleStep__Card_Content}>
                  <div className={classes.SimpleStep__Card_ImageBox}>
                    <div className={classes.SimpleStep__Card_Image}>
                      <img width="100px" src={HappyTreeIcon} alt="Pills Icon" />
                    </div>
                    <div className={classes.SimpleStep__Card_Image}>
                      <img
                        width="50px"
                        src={StepThreeIcon}
                        alt="steps milligram"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="Title Title__medium Text__blue Title__strong">
                      Enjoy your day!
                    </p>
                  </div>
                  <div>
                    <h5 className="Title">
                      <span className="Title__strong">Healthcare</span> from the
                      comfort
                    </h5>
                    <h5 className="Title">of your home</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
        {/* End 3 simple steps Desktop */}

        {/* Desktop Milligram comes to you Carrousel */}
        <Row>
          <Column type="md6-displayNoneMobile">
            <div
              style={{ marginTop: "0px" }}
              className={classes.Column__Box_centered}
            >
              <div>
                <h2 className="Title">
                  Milligram<span className="Title__strong"> comes to you.</span>
                </h2>
              </div>
              <div></div>
              <Box>
                <h2
                  style={{ lineHeight: "1.0rem", fontSize: "50px" }}
                  className="Title Title__big"
                >
                  Your medications
                </h2>
                <h3
                  style={{ lineHeight: "1.0rem", fontSize: "50px" }}
                  className="Title Title__big"
                >
                  <span className="Title__strong"> delivered to</span>
                </h3>
                <h3
                  style={{ lineHeight: "1.0rem", fontSize: "50px" }}
                  className="Title Title__big"
                >
                  <span className="Title__strong"> your door.</span>
                </h3>
              </Box>
              <div className={classes.Button__Box}>
                <img width="80px" src={SearchIcon} alt="search icon" />
              </div>
              <div className={classes.Button__Box}>
                <p>Enter your postal code to confirm we can deliver to you.</p>
                <input type="text" placeholder="postal code" />
              </div>
            </div>
          </Column>
          <Column backgroundColor="#50D897" type="md6-displayNoneMobile">
            <div className={classes.Column__Box}>
              <div>
                <img
                  width="700px"
                  src={MotorcycleImage}
                  alt="motorcycleImage"
                />
              </div>
            </div>
          </Column>
        </Row>
        {/* End -  Desktop Milligram comes to you Carrousel */}

        {/* Desktop Milligram comes to you Carrousel 2 */}
        <Row>
          <Column type="md6-displayNoneMobile">
            <div
              style={{ marginTop: "0px" }}
              className={classes.Column__Box_centered}
            >
              <Box>
                <h3
                  style={{ lineHeight: ".5rem", fontSize: "50px" }}
                  className="Title Title__big"
                >
                  <span className="Title__strong"> Great!</span>
                </h3>
                <h3
                  style={{ lineHeight: ".5rem", fontSize: "50px" }}
                  className="Title Title__big"
                >
                  You are
                </h3>
                <h3
                  style={{ lineHeight: ".5rem", fontSize: "50px" }}
                  className="Title Title__big"
                >
                  in our delivery
                </h3>
                <h3
                  style={{ lineHeight: ".5rem", fontSize: "50px" }}
                  className="Title Title__big"
                >
                  area
                </h3>
              </Box>

              <div className={classes.Button__Box}>
                <Button type="primary">Get a prescription</Button>
              </div>
            </div>
          </Column>
          <Column backgroundColor="#50D897" type="md6-displayNoneMobile">
            <div className={classes.Column__Box}>
              <div>
                <img
                  width="700px"
                  src={MotorcycleImage2}
                  alt="motorcycleImage"
                />
              </div>
            </div>
          </Column>
        </Row>
        {/* End -  Desktop Milligram comes to you Carrousel 2 */}
                {/* 3 simple steps dektop */}
          <Row type="onlyDesktop">
          <div className={classes.SimpleSteps__Box}>
            <div className={classes.SimpleSteps__Title_Box}>
              <h3 className="Title">
                Pharmacy<span className="Title__strong"> made easy.</span>
              </h3>
              <div>
                <h1
                  style={{
                    paddingBottom: "40px",
                  }}
                  className="Title Title__huge"
                >
                  <span className=" Title__strong">why </span>milligram
                </h1>
              </div>
            </div>
            <div className={classes.SimpleSteps__Card_Box}>
              <div className={classes.SimpleStep__Card}>
                <div className={classes.SimpleStep__Card_Content}>
                  <div className={classes.SimpleStep__Card_ImageBox}>
                    <div className={classes.SimpleStep__Card_Image}>
                      <img width="100px" src={BoyIcon} alt="Pills Icon" />
                    </div>
                  </div>
                  <div>
                    <p className="Title Title__medium Text__blue Title__strong">
                      Transparency
                    </p>
                  </div>
                  <div>
                    <h5 className="Title">Our team consists of licensed</h5>
                    <h5 className="Title">
                      pharmacists and doctors{" "}
                      <span className="Title__strong">ensuring your</span>
                    </h5>
                    <h5 className="Title">
                      <span className="Title__strong">
                        privacy and confidentiality with the
                      </span>{" "}
                    </h5>
                    <h5 className="Title">
                      highest level of security compliance.
                    </h5>
                  </div>
                </div>
              </div>

              <div className={classes.SimpleStep__Card}>
                <div className={classes.SimpleStep__Card_Content}>
                  <div className={classes.SimpleStep__Card_ImageBox}>
                    <div className={classes.SimpleStep__Card_Image}>
                      <img
                        width="100px"
                        src={HandPillIcon}
                        alt="Bicycle Icon"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="Title Title__medium Text__blue Title__strong">
                      Friendly delivery
                    </p>
                  </div>
                  <div>
                    <h5 className="Title">
                      Skip the wait in the doctor’s office and the
                    </h5>
                    <h5 className="Title">
                      long line ups at the pharmacy. We will
                    </h5>
                    <h5 className="Title">
                      <span className="Title__strong">
                        deliver to your home, or your preferred
                      </span>{" "}
                    </h5>
                    <h5 className="Title">
                      address within 24 hours, and it’s free.
                    </h5>
                  </div>
                </div>
              </div>

              <div className={classes.SimpleStep__Card}>
                <div className={classes.SimpleStep__Card_Content}>
                  <div className={classes.SimpleStep__Card_ImageBox}>
                    <div className={classes.SimpleStep__Card_Image}>
                      <img
                        width="80px"
                        src={VancouverTowerIcon}
                        alt="Pills Icon"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="Title Title__medium Text__blue Title__strong">
                      Founded in Vancouver
                    </p>
                  </div>
                  <div>
                    <h5 className="Title">We are located in the heart of</h5>
                    <h5 className="Title">
                      Vancouver.{" "}
                      <span className="Title__strong">Join the milligram</span>
                    </h5>
                    <h5 className="Title">movement now!</h5>
                  </div>
                </div>
              </div>

              <div className={classes.SimpleStep__Card}>
                <div className={classes.SimpleStep__Card_Content}>
                  <div className={classes.SimpleStep__Card_ImageBox}>
                    <div className={classes.SimpleStep__Card_Image}>
                      <img width="100px" src={UmbrellaIcon} alt="Pills Icon" />
                    </div>
                  </div>
                  <div>
                    <p className="Title Title__medium Text__blue Title__strong">
                      Insurance
                    </p>
                  </div>
                  <div>
                    <h5 className="Title">
                      <span className="Title__strong">Direct Billing </span>{" "}
                      with
                    </h5>
                    <h5 className="Title">your insurance</h5>
                    <h5 className="Title">company.</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row >
        {/* End 3 simple steps Desktop */}
        {/* 3 simple steps */}
        <Section type="onlyMobile" backgroundColor="#f6f6f6" color="#888887">
          <Box>
            <h3 className="Title">
              Pharmacy<span className="Title__strong"> made easy</span>
            </h3>
          </Box>
          <Box>
            <h2 className={`Title Title__big`}>
              <span className="Title__strong"> 3 simple </span>steps
            </h2>
          </Box>
          <div>
            <div>
              <img
                style={{ margin: "50px 0px 0px 0px" }}
                width="100px"
                src={PillsIcon}
                alt="Doctors Milligram"
              />
              <p className="Title Title__medium Text__blue Title__strong">
                Order your Rx
              </p>
            </div>
            <Box>
              <h5 className="Title">
                <span className="Title__strong">Upload</span> your prescription,
              </h5>
              <h5 className="Title">
                <span className="Title__strong">transfer</span> from another
                pharmacy or{" "}
              </h5>
              <h5 className="Title">
                <span className="Title__strong">speak with our doctors</span> ,
                we will do the rest!
              </h5>
            </Box>
            <div className={classes.Button__Box}>
              <img
                width="30px"
                src={ArrowDownIcon}
                alt="Arrow Icon Down Millgram"
              />
            </div>
          </div>

          {/* free and fast delivery */}
          <div>
            <div>
              <img
                style={{ margin: "20px 0px 0px 0px" }}
                width="100px"
                src={BicycleIcon}
                alt="Doctors Milligram"
              />
              <p className="Title Title__medium Text__blue Title__strong">
                Free & Fast Delivery
              </p>
            </div>
            <Box>
              <h5 className="Title">
                {" "}
                Your medication will be{" "}
                <span className="Title__strong">hand-delivered</span>
              </h5>
              <h5 className="Title">
                <span className="Title__strong">to your door</span>free of
                charge
              </h5>
            </Box>
            <div className={classes.Button__Box}>
              <img
                width="30px"
                src={ArrowDownIcon}
                alt="Arrow Icon Down Millgram"
              />
            </div>
          </div>

          {/* Enjoy your Day */}
          <div>
            <div>
              <img
                style={{ margin: "20px 0px 0px 0px" }}
                width="100px"
                src={HappyTreeIcon}
                alt="Doctors Milligram"
              />
              <p className="Title Title__medium Text__blue Title__strong">
                Enjoy your day!
              </p>
            </div>
            <Box>
              <h5 className="Title">Milligram, a better lifestyle choice.</h5>
            </Box>
            <div className={classes.Button__Box}>
              <img
                width="30px"
                src={ArrowDownIcon}
                alt="Arrow Icon Down Millgram"
              />
            </div>
          </div>
        </Section>
        {/* Green Section Milligram comes to you */}
        <Section type="onlyMobile" backgroundColor="#50D897" color="#ffffff">
          <Box>
            <img
              height="350px"
              src={MotorcycleImage}
              alt="Motorcycle milligram"
            />
          </Box>
          <Box>
            <h3 style={{ color: "#ffffff" }} className="Title Title__strong">
              Milligram comes to you.
            </h3>
          </Box>
          <Box>
            <h2
              style={{
                color: "#ffffff",
                fontSize: "35px",
                lineHeight: "1.5rem",
              }}
              className={`Title`}
            >
              Your medications
            </h2>
            <h2
              style={{ color: "#ffffff", fontSize: "35px" }}
              className={`Title`}
            >
              <span className="Title__strong">Delivered to</span>
            </h2>
            <h2
              style={{ color: "#ffffff", fontSize: "35px" }}
              className={`Title`}
            >
              <span className="Title__strong">Your door.</span>
            </h2>
          </Box>
          <Box>
            <p>Enter your postal code to confirm we can deliver to you.</p>
            <p>Aqui va input</p>
          </Box>
        </Section>
        {/* why milligram */}
        <Section  type="onlyMobile" backgroundColor="#f6f6f6" color="#888887">
          <Box>
            <h3 className="Title">
              Pharmacy<span className="Title__strong"> made easy</span>
            </h3>
          </Box>
          <Box>
            <h2 className={`Title Title__big`}>
              <span className="Title__strong"> Why </span>milligram?
            </h2>
          </Box>
          <div>
            <div>
              <img
                style={{ margin: "50px 0px 0px 0px" }}
                width="100px"
                src={BoyIcon}
                alt="Doctors Milligram"
              />
              <p className="Title Title__medium Text__blue Title__strong">
                Transparency
              </p>
            </div>
            <Box>
              <h5 className="Title">
                Our team consists of licensed pharmacists
              </h5>
              <h5 className="Title">
                <span className="Title__strong">
                  ensuring your privacy and confidentiality
                </span>
              </h5>
              <h5 className="Title">
                with the highest level of security compliance.{" "}
              </h5>
            </Box>
          </div>
          <div>
            <div>
              <img
                style={{ margin: "50px 0px 0px 0px" }}
                width="100px"
                src={HandPillIcon}
                alt="Doctors Milligram"
              />
              <p className="Title Title__medium Text__blue Title__strong">
                Friendly Delivery
              </p>
            </div>
            <Box>
              <h5 className="Title">
                We will{" "}
                <span className="Title__strong">
                  deliver to your home, or your
                </span>
              </h5>
              <h5 className="Title">
                <span>preferred address </span>within 24 hours, and its free
              </h5>
            </Box>
          </div>
          {/* free and fast delivery */}
          <div>
            <div>
              <img
                style={{ margin: "20px 0px 0px 0px" }}
                width="100px"
                src={VancouverTowerIcon}
                alt="Doctors Milligram"
              />
              <p className="Title Title__medium Text__blue Title__strong">
                Save time
              </p>
            </div>
            <Box>
              <h5 className="Title">
                {" "}
                <span className="Title__strong">Skip the wait</span> in the
                doctors office and
              </h5>
              <h5 className="Title">
                <span className="Title__strong">skip the long line ups </span>at
                the pharmacy,
              </h5>
              <h5 className="Title">Simply a better lifestyle choice.</h5>
            </Box>
          </div>

          {/* Enjoy your Day */}
          <div>
            <div>
              <img
                style={{ margin: "20px 0px 0px 0px" }}
                width="100px"
                src={UmbrellaIcon}
                alt="Doctors Milligram"
              />
              <p className="Title Title__medium Text__blue Title__strong">
                Enjoy your day!
              </p>
            </div>
            <Box>
              <h5 className="Title">
                <span className="Title__strong">Save time</span> with your
                Insurance Company
              </h5>
            </Box>
          </div>
        </Section>
        <Section type="onlyMobile" backgroundColor="#7B9EF4" color="#ffffff">
          <div className={classes.Slogan}>
            <h3
              style={{ lineHeight: "0.0 rem" }}
              className="Title__strong Text__white"
            >
              Let`s talk...
            </h3>
          </div>
          <Box>
            <h2 className={`Title Title__big Text__white`}>
              <span className="Title__strong"> Access </span>to a
            </h2>
            <h2 className={`Title Title__big Text__white`}> pharmacist when</h2>
            <h2 className={`Title Title__big Text__white`}> You need one</h2>
          </Box>
          <Box>
            <img
              style={{ margin: "30px 0px 0px 0px" }}
              width="280px"
              src={DialogIcon}
              alt="Doctors Milligram"
            />
          </Box>
          <Box>
            <p style={{ fontSize: "18px" }}>
              Our pharmacists are just a{" "}
              <span className="Title__strong">
                chat, <br /> text or phone call away.
              </span>{" "}
              It’s effortless and easy.
            </p>
          </Box>

          <div className={classes.Button__Box}>
            <Button type="primary">
              Live chat
            </Button>
          </div>
        </Section>
        {/* End Art of Milligram */}
        {/* Hello Vancouver */}
        <div className={classes.Section__WithBackground}>
          <div className={classes.Section__Heart_Box}>
            <div className={classes.Heart__Box_Title}>
              <h2
                style={{ marginBottom: "40px" }}
                className="Title Text__white"
              >
                Hello<span className="Title__strong"> Vancouver!!</span>
              </h2>
            </div>
            <div className={classes.Heart__Box_SubTitle}>
              <h2 className={`Title Title__big Text__white Title__strong`}>
                <span className=""> switch </span>
                <span className={classes.Text__OnlyDesktop}>  to milligram </span>
              </h2>
              <h2
                style={{ lineHeight: "1.2rem" }}
                className={`Title Title__big Text__white ${classes.Text__OnlyMobile}`}
              >
                <span className="Title__strong">to milligram</span>
              </h2>
              <h2 className={`Title Title__big Text__white`}> We can’t wait</h2>
              <h2 className={`Title Title__big Text__white`}> To meet you</h2>
            </div>
            <div className={classes.Button__Box}>
              <Button type="rose">Get Started</Button>
            </div>
          </div>

          <div className={classes.Section__City_Box}>
            <img src={CityIcon} alt="city_icon" />
          </div>
        </div>
       
        {/*  End Hello Vancouver */}
        {/* Footer */}
        <Section type="flex" backgroundColor="#7B9EF4" color="#ffffff">
          <div className={classes.Footer__Section}>
            <div className={classes.Footer__section_box}>
              <div className={classes.Footer__section_title}>
                <h3>Company</h3>
              </div>
            </div>

            <div className={classes.Footer__section_box}>
              <div className={classes.Footer__section_row}> About us </div>
              <div className={classes.Footer__section_row}>How it works</div>
            </div>
            <div className={classes.Footer__section_box}>
              <div className={classes.Footer__section_row}>FAQs </div>
              <div className={classes.Footer__section_row}>Milligram MD</div>
            </div>
          </div>
          {/* Milgram Pharmacy */}
          <div className={classes.Footer__Section}>
            <div className={classes.Footer__section_title}>
              <h3>Milligram Pharmacy</h3>
            </div>
            <div className={classes.Footer__section_box}>
              <div className={classes.Footer__section_row}>
                Phone 604 682 4321
              </div>
            </div>
            <div className={classes.Footer__section_box}>
              <div className={classes.Footer__section_row}>
                Fax 604 568 2023
              </div>
            </div>
            <div className={classes.Footer__section_box}>
              <div className={classes.Footer__section_row}>
                contact@milligram.com
              </div>
            </div>
            <div className={classes.Footer__section_title}>
              <h3>Pharmacy hours</h3>
            </div>
            <div className={classes.Footer__section_box}>
              <div className={classes.Footer__section_row}>
                Mon - Fri | 9:00 AM - 6:00 PM
              </div>
            </div>
            <div className={classes.Footer__section_box}>
              <div className={classes.Footer__section_row}>
                Sat - Sun | 12:00 AM - 4:00 PM
              </div>
            </div>
          </div>
          {/* Milligram Medic clinic */}
          <div className={classes.Footer__Section}>
            <div className={classes.Footer__section_title}>
              <h3>Milligram Medical Clinic</h3>
            </div>
            <div className={classes.Footer__section_box}>
              <div className={classes.Footer__section_row}>
                Phone 604 428 7611
              </div>
            </div>
            <div className={classes.Footer__section_box}>
              <div className={classes.Footer__section_row}>
                Fax 604 428 7612
              </div>
            </div>
            <div className={classes.Footer__section_box}>
              <div className={classes.Footer__section_row}>
                contact@milligram.com
              </div>
            </div>
            <div
            className={`${classes.Text__OnlyDesktop} ${classes.Footer__row}`}
          >
            <div className={classes.Footer__column}>
              <div className={classes.Footer__section_title}>
                <h3>Clinic Hours</h3>
              </div>
              <div>Mon - Fri | 8:30 AM - 5:00 PM</div>
              <div>Sat - Sun | 10:00 AM - 1:00 PM</div>
            </div>

          </div>
          </div>
          {/* Clinic Hours */}
          <div
            style={{ borderBottom: "1px solid #3d3db7" }}
            className={`${classes.Text__OnlyMobile} ${classes.Footer__row}`}
          >
            <div className={classes.Footer__column}>
              <div className={classes.Footer__section_title}>
                <h3>Clinic Hours</h3>
              </div>
              <div>Mon - Fri | 8:30 AM - 5:00 PM</div>
              <div>Sat - Sun | 10:00 AM - 1:00 PM</div>
            </div>

            <div className={classes.Footer__heartBox}>
              <img width="100px" src={HeartYellowIcon} alt="heart icon" />
            </div>
          </div>
          {/* End Clinic Hours */}
          <div className={classes.Footer__row}>
            <div className={classes.Footer__column}>
              <div className={classes.Footer__section_title}>
                <p className="Text__blue">
                  Hours may vary subject to statuatory holidays
                </p>
              </div>

              <div className={`${classes.Footer__section_title} ${classes.Text__OnlyDesktop}`}>
                <h3>Location</h3>
                <p>1175 Denman Street, Vancouver, BC. V6G 2N1</p>
              </div>
            </div>
          </div>
        </Section>
        <Section backgroundColor="#ffffff" color="#888887">
          <div className={classes.Footer__row}>
            <div className={classes.Footer__column}>
              <div className={classes.Footer__heartBox}>
                <img
                  className={classes.Footer__icon}
                  src={InstagramIcon}
                  alt="heart icon"
                />
              </div>
            </div>
            <div className={classes.Footer__column}>
              <div className={classes.Footer__heartBox}>
                <img
                  className={classes.Footer__icon}
                  src={FacebookIcon}
                  alt="heart icon"
                />
              </div>
            </div>
            <div className={classes.Footer__column}>
              <div className={classes.Footer__heartBox}>
                <img
                  className={classes.Footer__icon}
                  src={MilligramLogoIcon}
                  alt="heart icon"
                />
              </div>
            </div>
          </div>
          <div style={{ textAlign: "left" }} className={classes.Footer__row}>
            <div className={classes.Footer__column}>
              <p>©2020 MIlligram PMedical Center. All rights reserved.</p>
              <p>
                Privacy Policy <br /> Notice of Privacy Practices <br /> Terms
                and Conditions
              </p>
            </div>
          </div>
        </Section>
        {/* End Footer */}
      </div>
    );
  }
}
