import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import {AsphaltButton} from "../../../components";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 16,
    },

});

 const List = props=> {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title}  color="textSecondary" gutterBottom>
                    {props.title}
                </Typography>



            </CardContent>
            <CardActions>
                <Button color={"primary"} size="small">Remove password</Button>
                <Button style={{color:"black"}} size={"small"}>Show</Button>
            </CardActions>
        </Card>
    );
}

List.propTypes = {
     id:PropTypes.number.isRequired,
     title:PropTypes.string.isRequired,

}

export {
    List
};
