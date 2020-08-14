import React, { useState } from 'react'
import { makeStyles, withStyles } from "@material-ui/core/styles"
import SedIcon from "@material-ui/icons/Send"
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core"
import Navbar from "./Navbar"
import "./Skills.css"
import fireDB from "../Firebase"
import Footer from "./ContactFooter"



const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato"
        },
        "& label": {
            color: "tan",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan",
            },
            "&:hover fieldset": {
                borderColor: "tan",
            },
            "&.Mui-focussed fieldset": {
                borderColor: "tan"
            }

        }
    }
})(TextField);



const useStyles = makeStyles(theme => ({
    heading: {
        color: "tomato",
        textAlign: "center",
        marginBottom: "1.5rem",
        textTransform: "uppercase"
    },
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        position: "absolute"
    },
    button: {
        marginTop: "1rem",
        color: "tomato",

        border: "1px solid tomato"

    },
    footer: {
        position: "fixed",
        left: 0,
        bottom: 0,
        height: "15rem",
        width: "100%",
        background: "#233",
        color: "white",
        textAlign: "center"

    }
}))

const Contact = () => {
    const classes = useStyles()


    const initialFieldValue = {
        fullname: "",
        mobile: "",
        email: ""
    }

    const [values, setValues] = useState(initialFieldValue)
    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values, [name]: value
        })
    }

    const handleInputSubmit = e => {
        window.alert("Successfully Submitted")
        e.preventDefault();
        addOrEdit(values)
        console.log(values)
    }
    const addOrEdit = obj => {

        console.log(obj)
        fireDB.child('contacts').push(
            obj,
            err => {
                if (err)
                    console.log(err)
            }

        )
    }

    return (
        <>
            <div className="body">
                <Navbar />
                <Box component="div" style={{ marginLeft: "4rem", marginTop: "5rem", paddingTop: "20rem" }}>
                    <Grid container justify="center" >
                        <Box component="form" className={classes.form}>
                            <Typography className={classes.heading} varient="h5" >
                                Hire Me or Contact Me

                        </Typography>
                            <form autoComplete="off" onSubmit={handleInputSubmit}>
                                <InputField
                                    onChange={handleInputChange} className="form-control" placeholder="Full Name" name="fullname" value={values.fullname}
                                    required={true}
                                    fullWidth={true}
                                    // label="Name"
                                    inputProps={{ style: { color: "white" } }}
                                    variant="outlined"
                                    margin="dense" size="medium"
                                />
                                <br />
                                <InputField
                                    onChange={handleInputChange} className="form-control" placeholder="Email" name="email" value={values.email}
                                    required={true}
                                    fullWidth={true}
                                    // label="Email"
                                    variant="outlined"
                                    inputProps={{ style: { color: "white" } }}
                                    margin="dense" size="medium"
                                />
                                <br />
                                <InputField
                                    onChange={handleInputChange} className="form-control" placeholder="Mobile" name="mobile" value={values.mobile}
                                    fullWidth={true}
                                    // label="Contact Number"
                                    variant="outlined"
                                    inputProps={{ style: { color: "white" } }}
                                    margin="dense" size="medium"
                                    type={Number}
                                />

                                <Button type="submit" value="Save" className={classes.button} varient="outlined" fullWidth={true} endIcon={<SedIcon />} >Contact Me</Button>
                            </form>
                            <Footer />
                        </Box>

                    </Grid>
                </Box>

            </div>

        </>
    )
}

export default Contact
