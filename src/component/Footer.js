import React from 'react'


import { BottomNavigation, BottomNavigationAction, Box, Typography } from "@material-ui/core"
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from "@material-ui/styles"

const useStyle = makeStyles({
    root: {
        "&.MuiBottomNavigation-root": {
            minWidth: 0,
            maxWidth: 240,

        }
    },
    "& .MuiSvgIcon-root": {
        fill: "tan",
        "&:hover": {
            fill: "tomato",
            fontSize: "1.8rem"
        }
    },
    copy: {
        width: 200,
        margin: "1rem 0 1rem 1.5rem",

        color: "tan"
    }
})


const Footer = () => {

    const classes = useStyle()
    return (
        <>
            <Box style={{ background: "#233", padding: "1rem 1rem 1rem 1.5rem" }}>
                <Typography>React Based Website</Typography>
            </Box>
        </>
    )
}

export default Footer
