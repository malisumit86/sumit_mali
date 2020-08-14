import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import Navbar from "./Navbar"
import { Typography, Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from "@material-ui/core"
import Insta from "../img/instaclone.png"
import tiktok from "../img/tiktok.png"
import keep from "../img/keepnote.png"
import todo from "../img/todo.png"
import weather from "../img/weather.png"
import quiz from "../img/quiz.png"
import tracker from "../img/coronatracker.png"
import game from "../img/game.png"
import portfolio from "../img/portfolio.png"



import project1 from "../img/coffee-apple.jpg"
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import CodeIcon from '@material-ui/icons/Code';




//CSS STYELE
const useStyles = makeStyles(theme => ({
    mainContainer: {
        // background: "#233",
        height: "100%",
        // width: "100%"
        marginLeft: "3rem",
        marginRight: "3rem"

    },
    heading: {
        color: "tomato",
        marginTop: "2rem",
        padding: "3rem 0",
        textTransform: "uppercase"
    },

    cardContainer: {
        maxWidth: 345,

        // margin: "3rem",
        margin: "5rem auto",
        background: "#cccccc"
    },

}))


const Projects = () => {
    const classes = useStyles()
    return (
        <>
            <div className="body">
                <Box component="div" className={classes.mainContainer}>
                    <Typography className={classes.heading} varient="h4" align="center">
                        <h2>Projects </h2>

                    </Typography>
                    <Navbar />
                    <Grid container justify="center" className={classes.marginLeftTake}>

                        {/* project 12 */}
                        <Grid item xs={12} sm={12} md={4}>
                            <Card className={classes.cardContainer} id="cardContainer1">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Projects 1"
                                        height="200"
                                        image={portfolio}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            PortFolio

                                    </Typography>
                                        <Typography variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            This is portfolio website frondend tool using the reactjs and for the Backend is using Firebase is used for contact purpose. hosted on github and firebase.


                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://github.com/malisumit86/sumit_mali">
                                        src code<CodeIcon />
                                    </Button>
                                    <Button size="small" color="primary" href="https://malisumit86.github.io/sumit_mali/">
                                        live demo<OpenInNewIcon />
                                    </Button>
                                </CardActions>

                            </Card>


                        </Grid>


                        {/* project 1 */}
                        <Grid item xs={12} sm={12} md={4}>



                            <Card className={classes.cardContainer} id="cardContainer1">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Instaappclone"
                                        height="200"
                                        image={Insta}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Insta-app-clone

                                    </Typography>
                                        <Typography variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            The Web application "instaappclone" is made by using the frond Rectjs and For backend Database Firbase. Website is hosted by Github and Firebase.

                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://github.com/malisumit86/instaappclone">
                                        src code<CodeIcon />
                                    </Button>
                                    <Button size="small" color="primary" href="https://malisumit86.github.io/instaappclone/">
                                        live demo<OpenInNewIcon />
                                    </Button>
                                </CardActions>


                            </Card>


                        </Grid>
                        {/* project 2 */}
                        <Grid item xs={12} sm={12} md={4}>
                            <Card className={classes.cardContainer} id="cardContainer1">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="tiktokclone"
                                        height="200"
                                        image={tiktok}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            tik-tok-app-clone

                                    </Typography>
                                        <Typography variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            The Web application "tik_tok_clone" is made by using the frond end tool Rectjs and For backend Database as Firbase. Website is hosted by Github and Firebase.

                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://github.com/malisumit86/tik_tok_clone">
                                        src code<CodeIcon />
                                    </Button>
                                    <Button size="small" color="primary" href="https://malisumit86.github.io/tik_tok_clone/">
                                        live demo<OpenInNewIcon />
                                    </Button>
                                </CardActions>


                            </Card>
                        </Grid>


                        {/* project 3 */}
                        <Grid item xs={12} sm={12} md={4}>
                            <Card className={classes.cardContainer} id="cardContainer1">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Projects 1"
                                        height="200"
                                        image={weather}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Weather App

                                    </Typography>
                                        <Typography variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            Weather Forcast App is develope by using frontend HTML,CSS,JAVASCRIPT and For backend Nodejs and API fetch
                                            and Hosting by Github as well as Heruko
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://github.com/malisumit86/weather">
                                        src code<CodeIcon />
                                    </Button>
                                    <Button size="small" color="primary" href="https://mahajan-weather-web-app.herokuapp.com/">
                                        live demo<OpenInNewIcon />
                                    </Button>
                                </CardActions>

                            </Card>


                        </Grid>


                        {/* project 4 */}
                        <Grid item xs={12} sm={12} md={4}>
                            <Card className={classes.cardContainer} id="cardContainer1">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Projects 1"
                                        height="200"
                                        image={keep}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            M_keep_web_app

                                    </Typography>
                                        <Typography variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            This is Google_keep app clone.M_keep_web_app is develope by using REACTJS and Hosted by Github

                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://github.com/malisumit86/keepNote">
                                        src code<CodeIcon />
                                    </Button>
                                    <Button size="small" color="primary" href="https://malisumit86.github.io/keepNote/">
                                        live demo<OpenInNewIcon />
                                    </Button>
                                </CardActions>

                            </Card>


                        </Grid>
                        {/* project 5 */}
                        <Grid item xs={12} sm={12} md={4}>
                            <Card className={classes.cardContainer} id="cardContainer1">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Projects 1"
                                        height="200"
                                        image={todo}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Todo List

                                    </Typography>
                                        <Typography variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            TODO List is based on REACTJS and small keep note like webapp.The app is hosted by Github

                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://github.com/malisumit86/todolist">
                                        src code<CodeIcon />
                                    </Button>
                                    <Button size="small" color="primary" href="https://malisumit86.github.io/todolist/">
                                        live demo<OpenInNewIcon />
                                    </Button>
                                </CardActions>

                            </Card>


                        </Grid>
                        {/* project 6 */}
                        <Grid item xs={12} sm={12} md={4}>
                            <Card className={classes.cardContainer} id="cardContainer1">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Projects 1"
                                        height="200"
                                        image={tracker}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Corona Update Tracker

                                    </Typography>
                                        <Typography variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            Website is build by using HTML,CSS,BOOTSTRAP and JAVASCRIPT. Its for let us know Stat of Corona Update

                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://github.com/malisumit86/coronaUpdate">
                                        src code<CodeIcon />
                                    </Button>
                                    <Button size="small" color="primary" href="https://malisumit86.github.io/coronaUpdate/">
                                        live demo<OpenInNewIcon />
                                    </Button>
                                </CardActions>

                            </Card>


                        </Grid>
                        {/* project 7 */}
                        <Grid item xs={12} sm={12} md={4}>
                            <Card className={classes.cardContainer} id="cardContainer1">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Projects 1"
                                        height="200"
                                        image={quiz}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Simple Quiz Test

                                    </Typography>
                                        <Typography variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            A Small Quiz test website which will take info as form as per that perform test and get Certificate.

                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://github.com/malisumit86/squiz">
                                        src code<CodeIcon />
                                    </Button>
                                    <Button size="small" color="primary" href="https://malisumit86.github.io/squiz/index.html">
                                        live demo<OpenInNewIcon />
                                    </Button>
                                </CardActions>

                            </Card>


                        </Grid>


                        {/* project 8 */}
                        <Grid item xs={12} sm={12} md={4}>
                            <Card className={classes.cardContainer} id="cardContainer1">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Projects 1"
                                        height="200"
                                        image={game}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Javascript Game

                                    </Typography>
                                        <Typography variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            Animation Fun Game developed by using HTML,CSS,JAVASCRIPT. Website is hosted by GIthub.

                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://github.com/malisumit86/coronagame">
                                        src code<CodeIcon />
                                    </Button>
                                    <Button size="small" color="primary" href="https://malisumit86.github.io/coronagame/">
                                        live demo<OpenInNewIcon />
                                    </Button>
                                </CardActions>

                            </Card>


                        </Grid>

                        {/* project 9 */}
                        <Grid item xs={12} sm={12} md={4}>
                            <Card className={classes.cardContainer} id="cardContainer1">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Projects 1"
                                        height="200"
                                        image={project1}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            You-tube-Clone(upcoming)

                                    </Typography>
                                        <Typography variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            Youtube clone based of REACT and Firebase and Hosting will be on Firebase and Github.

                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href="#">
                                        src code<CodeIcon />
                                    </Button>
                                    <Button size="small" color="primary" href="#">
                                        live demo<OpenInNewIcon />
                                    </Button>
                                </CardActions>

                            </Card>


                        </Grid>

                        {/* project 10 */}
                        <Grid item xs={12} sm={12} md={4}>
                            <Card className={classes.cardContainer} id="cardContainer1">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Projects 1"
                                        height="200"
                                        image={project1}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Zoom-app-Clone(upcoming)

                                    </Typography>
                                        <Typography variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            Zoom-app-Clone based of REACT and Firebase and Hosting will be on Firebase and Github.

                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href="#">
                                        src code<CodeIcon />
                                    </Button>
                                    <Button size="small" color="primary" href="#">
                                        live demo<OpenInNewIcon />
                                    </Button>
                                </CardActions>

                            </Card>


                        </Grid>

                        {/* project 11 */}
                        <Grid item xs={12} sm={12} md={4}>
                            <Card className={classes.cardContainer} id="cardContainer1">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Projects 1"
                                        height="200"
                                        image={project1}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Corona-Tracker(upcoming)

                                    </Typography>
                                        <Typography variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            Corona-Tracker based of REACT and Firebase and Hosting will be on Firebase and Github.

                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href="#">
                                        src code<CodeIcon />
                                    </Button>
                                    <Button size="small" color="primary" href="#">
                                        live demo<OpenInNewIcon />
                                    </Button>
                                </CardActions>

                            </Card>


                        </Grid>

                        {/* project 10 */}
                        <Grid item xs={12} sm={12} md={4}>
                            <Card className={classes.cardContainer} id="cardContainer1">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Projects 1"
                                        height="200"
                                        image={project1}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Twitter-Clone(upcoming)

                                    </Typography>
                                        <Typography variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            Twitter-Clone based of REACT and Firebase and Hosting will be on Firebase and Github.


                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href="#">
                                        src code<CodeIcon />
                                    </Button>
                                    <Button size="small" color="primary" href="#">
                                        live demo<OpenInNewIcon />
                                    </Button>
                                </CardActions>

                            </Card>


                        </Grid>



                        {/* project 11 */}
                        <Grid item xs={12} sm={12} md={4}>
                            <Card className={classes.cardContainer} id="cardContainer1">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Projects 1"
                                        height="200"
                                        image={project1}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Spotify-Clone(upcoming)

                                    </Typography>
                                        <Typography variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            Spotify based of REACT and Firebase and Hosting will be on Firebase and Github.


                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href="#">
                                        src code<CodeIcon />
                                    </Button>
                                    <Button size="small" color="primary" href="#">
                                        live demo<OpenInNewIcon />
                                    </Button>
                                </CardActions>

                            </Card>


                        </Grid>


                        {/* project 13 */}
                        <Grid item xs={12} sm={12} md={4}>
                            <Card className={classes.cardContainer} id="cardContainer1">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Projects 1"
                                        height="200"
                                        image={project1}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Slack-Clone(upcoming)

                                    </Typography>
                                        <Typography variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            Spotify based of REACT and Firebase and Hosting will be on Firebase and Github.


                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href="#">
                                        src code<CodeIcon />
                                    </Button>
                                    <Button size="small" color="primary" href="#">
                                        live demo<OpenInNewIcon />
                                    </Button>
                                </CardActions>

                            </Card>


                        </Grid>




                    </Grid>
                </Box>
            </div>
        </>
    )
}

export default Projects