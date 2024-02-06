import React, { Component } from "react";
import CELLS from 'vanta/dist/vanta.cells.min';
import * as THREE from 'three';

import LandingButton from  "../../components/LandingButton.jsx";

class Landing extends Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }

  componentDidMount() {
    this.vantaEffect = CELLS({
      el: this.vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      speed: 1.5,
      color1: 0x22282f,
      color2: 0x3e6e64
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }

  handleRestart = () => {
    window.location.reload();
  };

  render () {
      return (
        <>
        <style jsx> {`
          .landing-container {
            display: flex;
            flex-direction: column;
            height: 100vh;
            justify-content: center;
            
          }
          .landing-item-container {
            display: flex;
            justify-content: center;
            background-color: none; /* Dark background for visibility */
            padding: 20px;
            color: white; /* White text color for visibility */
          }
          .landing-item {
            width: 100px; /* Fixed width for the items */
            text-align: center;
            padding-left: 5%;
            padding-right: 5%;
          }
          .title-text {
            text-align: center;
            font-size: 15vh;
            letter-spacing: 20px;
            top: 35%;
            height: 30vh;
            color: white;
            font-family: 'Exo';
          }
        `}
        </style>
        <div style={{ height: "100vh", width: "100%" }} ref={this.vantaRef}>
          <div className="landing-container">
            <div className="title-text">EVAN Z</div>
            <div className="landing-item-container">
                <div className="landing-item">
                  <LandingButton text="about" href="/about"/>
                  <path class="link__arrow" d="M 75 100 L 125 100 L 110 85 M 125 100 L 110 115"  fill="white" />
                </div>
                <div className="landing-item">
                  <LandingButton text="projects" href="/projects"/> 
                </div>
                <div className="landing-item">
                  <LandingButton text="art" href="/art"/>
                </div>
            </div>
          </div>

        </div>
        </>
      )
  }
}

export default Landing;
