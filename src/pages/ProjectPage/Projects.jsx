import React, { Component } from "react";
import CELLS from 'vanta/dist/vanta.cells.min';
import * as THREE from 'three';

class Projects extends Component {
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
                .projects-container {

                }
            `}
            </style>

            <div style={{ height: "100vh", width: "100%" }} ref={this.vantaRef}>
                <div className="projects-container">
                </div>
            </div>
            </>

              

        )
    }
}

export default Projects