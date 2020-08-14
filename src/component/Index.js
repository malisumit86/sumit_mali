import React from 'react';
import Navbar from './Navbar'
import Header from "./Header"
import Particles from 'react-particles-js';
import { makeStyles } from "@material-ui/styles"
import "./Index.css"


const useStyles = makeStyles({
    ParticlesCanvas: {
        position: "absolute",
        opacity: "0.3"
    }
})


const Index = () => {
    const classes = useStyles()

    return (
        <div className="body">
            <Particles
                canvasClassName={classes.ParticlesCanvas}
                params={{
                    particles: {
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            strole: {
                                width: 1,
                                color: "tomato"
                            }
                        },
                        size: {
                            value: 5,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 6,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        opacity: {
                            value: 0.2,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }

                }}
            />
            
            <Navbar />
            <Header />
            {/* <Mobilebar /> */}

        </div>
    )
}

export default Index
