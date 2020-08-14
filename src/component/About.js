import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from "@material-ui/core"
import Navbar from "./Navbar"
import "./About.css"
import avatar from "../img/sumit.jpeg"

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 900,
        margin: "2rem 0.6rem 0 15%",
        background: "#313131"
    },
    media: {
        height: "150px",
        width: "150px",
        marginLeft: "3.5rem",
        marginTop: "3rem",
        marginBottom: "2.5rem",
        border: "1.5px Solid white",
        // textAlign: "center",
        padding: "1rem",
        borderRadius: "70%"
    },
    avatar: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        margin: theme.spacing(1),

    },
}));

export default function About() {
    const classes = useStyles();

    return (
        <>
            <Navbar />
            <div className="body" >
                <span style={{ a: "1" }}></span>
                <span style={{ a: "2" }}></span>
                <span style={{ a: "3" }}></span>
                <div className="flex-container">
                    <div className="flex-container1">
                        <div>

                            <Avatar className={classes.avatar} src={avatar} alt="Mali Unable to upload" />

                        </div>
                    </div>
                    <div className="flex-line"></div>
                    <div className="flex-container2">
                        <div>
                            <h4 style={{ color: "tomato" }}>SUMIT MALI  &nbsp;  ( REACT DEVELOPER )</h4>
                            <p> Hello, I am Sumit Mali pursuing BE (3rd Year) Information Technoloy from Smt.Kashibai Navale College of Engineering SPPU PUNE University.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
