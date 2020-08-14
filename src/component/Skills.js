import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Box } from "@material-ui/core"
import Navbar from "./Navbar"
import "./Skills.css"

const useStyles = makeStyles(theme => ({
    mainContainer: {
        // background: "#233",
        // height: "100%"
        // marginLeft: "2rem"
    },
    timeline: {
        position: "relative",
        padding: "1rem",
        // marginLeft: "4rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"

        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",

        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 5rem 1rem 3rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% -5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                marginRight: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }
    },
    // timeLineYear: {
    //     textAlign: "center",
    //     maxWidth: "9.375rem",
    //     margin: "0 3rem 0 auto",
    //     fontSize: "1.8rem",
    //     background: "tomato",
    //     color: "white",
    //     lineHeight: 1,
    //     padding: "0.5rem 0 1rem",
    //     "&:before": {
    //         display: "none"
    //     },
    //     [theme.breakpoints.up("md")]: {
    //         textAlign: "center",
    //         margin: "0 auto",
    //         "&:nth-of-type(2n)": {
    //             float: "none",
    //             margin: "0 auto"
    //         },
    //         "&:nth-of-type(2n):before": {
    //             display: "none"
    //         }
    //     }

    // },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}))


const Skills = () => {
    const classes = useStyles()


    return (
        <div className="body">


            <Box component="header" className={classes.mainContainer}>
                <Typography className={classes.heading} varient="h4" align="center">
                    <h2>Skills & familiar languages </h2>

                </Typography>
                <Box component="div" className={classes.timeline}>



                    <Box component="div" className={classes.timeLineItem}>
                        <Typography className={classes.subHeading} varient="h5" align="left" style={{ marginLeft: "1rem" }} >

                            web design</Typography>
                        <Typography
                            varient="body1"
                            align="left"
                            style={{ color: "tomato", marginLeft: "1rem" }}
                        >

                            HTML,CSS,BOOTSTRAP</Typography>
                        <Typography varient="subtitle1" align="left"
                            style={{ color: "tan", marginLeft: "1rem" }}

                        >

                            Learn the language this year and done the lots of projects based of the web design language.
                        </Typography>
                    </Box>



                    <Box component="div" className={classes.timeLineItem}>
                        <Typography className={classes.subHeading} varient="h5" align="left" style={{ marginLeft: "1rem" }}>

                            Web Application</Typography>
                        <Typography

                            varient="body1"
                            align="left"
                            style={{ color: "tomato", marginLeft: "1rem" }}
                        >

                            REACTJS,FIREBASE</Typography>
                        <Typography varient="subtitle1" align="left"
                            style={{ color: "tan", marginLeft: "1rem" }}

                        >

                            Application like InstaClone and tik tok clone were developed using the frondend Reactjs and Firebase backend data management.
                        </Typography>
                    </Box>



                    <Box component="div" className={classes.timeLineItem}>
                        <Typography className={classes.subHeading} varient="h5" align="left" style={{ marginLeft: "1rem" }}>

                            web Apps</Typography>
                        <Typography

                            varient="body1"
                            align="left"
                            style={{ color: "tomato", marginLeft: "1rem" }}
                        >

                            Nodejs,Expressjs,
                            Mongodb,Mongoose</Typography>
                        <Typography varient="subtitle1" align="left"
                            style={{ color: "tan", marginLeft: "1rem" }}

                        >

                            Apps Based on Nodejs and and frontend language tools developed with using Mongodb database management,expressjs and mongoose database validation.
                        </Typography>
                    </Box>




                    <Box component="div" className={classes.timeLineItem}>
                        <Typography className={classes.subHeading} varient="h5" align="left" style={{ marginLeft: "1rem" }}>

                            Android and ios app</Typography>
                        <Typography

                            varient="body1"
                            align="left"
                            style={{ color: "tomato", marginLeft: "1rem" }}
                        >

                            HTML,CSS,JAVASCRIPT,
                            Corodova</Typography>
                        <Typography varient="subtitle1" align="left"
                            style={{ color: "tan", marginLeft: "1rem" }}

                        >

                            Attended the webinar on making the Android and ios apllication using this language and Cordova App launcher.
                        </Typography>
                    </Box>



                </Box>
            </Box>
            <Navbar />

        </div>
    )
}

export default Skills
