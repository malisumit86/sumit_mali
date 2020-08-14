import React from 'react'
import { Typography, Avatar, Grid, Box } from "@material-ui/core"
import avatar from "../img/sumit.jpeg"
import Typed from 'react-typed'
import { makeStyles } from '@material-ui/core/styles'


//CSS STYLE 
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin: theme.spacing(1),
        marginBottom: theme.spacing(5)

    },
    title: {

        color: "tomato"
    },
    subtitle: {

        color: "tan",
        marginBottom: "3rem",


    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1,
        wordWrap: "break-word"

    }

}))

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Mali Unable to upload" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Sumit Mali"]} typeSpeed={40} />

            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h4">
                <Typed
                    strings={["Web App", "React Developer"]}
                    typeSpeed={40}
                    backSpeed={40}
                    loop
                />

            </Typography>
        </Box>
    )
}

export default Header
