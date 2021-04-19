import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  useMediaQuery,
  Button,
  IconButton,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import readNowImage from "../../assets/readStoryIcon.png";
import writeNowImage from "../../assets/writeNowIcon.png";
import lookBackImage from "../../assets/lookBackIcon.png";
import bookmarkImage from "../../assets/bookmarkIcon.png";
import callWellnessCenterIcon from "../../assets/exclamationMarkIcon.png";
import DialogBox from "../../components/DialogBox";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
    lineHeight: 1,
    fontSize: 50,
    textAlign: "center",
    "@media (max-width:480px)": {
      fontSize: 35,
      marginTop: "5vh",
      textAlign: "left",
      paddingLeft: 20,
    },
  },
  button: {
    width: "15vw",
    height: "25vh",
    borderRadius: 40,
    backgroundColor: "#FFD7D7",
    display: "table-column",
    margin: "10px 25px",
    "&:hover": {
      backgroundColor: "#FFD7D7",
    },
    "@media (max-width:480px)": {
      width: "41vw",
      margin: 0,
    }
  },
  buttonLargeWeb: {
    width: "35vw",
    height: "25vh",
    borderRadius: 40,
    backgroundColor: "#FFD7D7",
    margin: "10px 25px",
    textAlign: "left",
  },
  buttonLarge: {
    borderRadius: 40,
    backgroundColor: "#FFD7D7",
    padding: "30px 26px",
    textAlign: "left",
    margin: "10px 25px",
    "&:hover": {
      backgroundColor: "#FFD7D7",
    }
  },
  cardContainer: {
    paddingTop: 20,
    justifyContent: "space-evenly",
  },
  buttonHeadingText: {
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "Capitalize",
  },
  buttonText: {
    fontSize: 14,
    textTransform: "none",
  },
  buttonTextGroup: {
    paddingLeft: 16,
  },
}));

function HomePage() {
  const classes = useStyles();
  const history = useHistory();
  const isMobile = useMediaQuery("(max-width:480px)");
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (event, reason) => {
    setIsOpen(false);
  };

  const handleCall = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (

    <Grid container direction='column'>
      <NavigationBar showMenu />
      <Typography className={classes.title}>For You</Typography>
      {isMobile ? (
      <Grid container item direction='column' className={classes.cardContainer}>
        <Grid
          container
          direction='row'
          style={{ padding: "0 25px", justifyContent: "space-between" }}
        >
          <Button
            className={classes.button}
            onClick={() => history.push("/lookback")}
          >
            <img alt='lookback' src={lookBackImage}></img>
            <Typography className={classes.buttonHeadingText}>
              Look back
            </Typography>
          </Button>
          <Button
            className={classes.button}
            onClick={() => history.push("/bookmark")}
          >
            <img alt='bookmark' src={bookmarkImage}></img>
            <Typography className={classes.buttonHeadingText}>
              Bookmarks
            </Typography>
          </Button>
        </Grid>
        <Button
          className={classes.buttonLarge}
          onClick={() => history.push("/forum")}
        >
          <img alt='bookmark' src={readNowImage}></img>
          <Grid
            container
            item
            direction='row'
            className={classes.buttonTextGroup}
          >
            <Typography className={classes.buttonHeadingText}>
              Read stories
            </Typography>
            <Typography className={classes.buttonText}>
              Delve into our stories of the good, the bad and the magical
            </Typography>
          </Grid>
        </Button>
        <Button
          className={classes.buttonLarge}
          onClick={() => history.push("/writing")}
        >
          <img alt='bookmark' src={writeNowImage}></img>
          <Grid
            container
            item
            direction='row'
            className={classes.buttonTextGroup}
          >
            <Typography className={classes.buttonHeadingText}>
              Write now
            </Typography>
            <Typography className={classes.buttonText}>
              Write down your daily thoughts, for they are part of your alluring
              tale
            </Typography>
          </Grid>
        </Button>
        <Grid
          container
          item
          direction='row'
          justify='flex-end'
          style={{ alignItems: "center" }}
        >
          <Typography>Ask For Help</Typography>
          <IconButton
            onClick={(e) => handleCall(e)}
            style={{ marginRight: 20 }}
          >
            <img alt='callWellnessCenter' src={callWellnessCenterIcon}></img>
          </IconButton>
        </Grid>
        <DialogBox
          open={isOpen}
          text='Do you wish to contact our magical counsellors through the 24-hour helpline?'
          onClose={handleClose}
          onClickYes={() => (window.location.href = "tel:+85282082688")}
          onClickNo={handleClose}
        ></DialogBox>
      </Grid>
    ) : (
      <Grid container item direction='column' className={classes.cardContainer}>
        <Grid container item direction='row' 
        // style = {{paddingLeft: 200, paddingTop: 30, paddingRight: 30}}>
        style = {{justifyContent: "center", paddingTop: 50}}>
        <Button
          className={classes.buttonLargeWeb}
          onClick={() => history.push("/writing")}

        >
          <img alt='bookmark' src={writeNowImage} style = {{paddingLeft:15}}></img>
          <Grid
            container
            item
            direction='column'
            className={classes.buttonTextGroup}
          >
            <Typography className={classes.buttonHeadingText} style = {{paddingLeft:20}}>
              Write now
            </Typography>
            <Typography className={classes.buttonText} style = {{paddingLeft:20, paddingRight:20}}>
              Write down your life's tales because good or bad, they are part of your alluring tale
            </Typography>
          </Grid>
        </Button>
        <Button
            className={classes.button}
            onClick={() => history.push("/lookback")}
          >
            <img alt='lookback' src={lookBackImage}></img>
            <Typography className={classes.buttonHeadingText}>
              Look back
            </Typography>
          </Button>
        </Grid>
        <Grid
          container
          direction='row'
          // style = {{paddingLeft: 200, paddingTop: 30, paddingRight: 30}}
          style = {{justifyContent: "center"}}
        >
          <Button
          className={classes.buttonLargeWeb}
          onClick={() => history.push("/forum")}
        >
          <img alt='bookmark' src={readNowImage} style = {{paddingLeft:15}}></img>
          <Grid
            container
            item
            direction='column'
            className={classes.buttonTextGroup}
          >
            <Typography className={classes.buttonHeadingText} style = {{paddingLeft:20}}>
              Read stories
            </Typography>
            <Typography className={classes.buttonText} style = {{paddingLeft:20, paddingRight: 20}}>
              Delve into our inspirational and beautiful stories
            </Typography>
          </Grid>
        </Button>
          <Button
            className={classes.button}
            onClick={() => history.push("/bookmark")}
          >
            <img alt='bookmark' src={bookmarkImage}></img>
            <Typography className={classes.buttonHeadingText}>
              Bookmarks
            </Typography>
          </Button>
        </Grid>
        <Grid
          container
          item
          direction='row'
          justify='flex-end'
          style={{ alignItems: "center", paddingTop: 40}}
        >
          <Typography>Ask For Help</Typography>
          <IconButton
            onClick={(e) => handleCall(e)}
            style={{ marginRight: 20 }}
          >
            <img alt='callWellnessCenter' src={callWellnessCenterIcon}></img>
          </IconButton>
        </Grid>
        
        <DialogBox
          open={isOpen}
          text='Do you wish to contact our magical counsellors through the 24-hour helpline?'
          onClose={handleClose}
          onClickYes={() => (window.location.href = "tel:+85282082688")}
          onClickNo={handleClose}
        ></DialogBox>
      </Grid>


    )}
    </Grid>
  );
}

export default HomePage;
