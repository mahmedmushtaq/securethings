import React from "react";
import {Card,CardContent,CardHeader,CardActions,CardMedia,Button,Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import PropTypes from "prop-types";
import {WebLists} from "../index";

const useStyles = makeStyles({
    root: {
        width:275,
        margin:"10px 0"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});



const WebList =  props=>{
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardHeader

                title={props.title}
                subheader={props.dateTime}
            />
            <CardMedia
                className={classes.media}
                image={props.imgSrc}
                title={props.title}
            />

            <CardActions disableSpacing>
                <Button variant={"contained"} color={"primary"}>Delete</Button>
            </CardActions>

        </Card>
    )
}

WebList.propTypes = {
    id : PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    imgSrc:PropTypes.string.isRequired,
    dateTime:PropTypes.string.isRequired,
}

export default WebList;
