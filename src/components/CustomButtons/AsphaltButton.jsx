import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// We can inject some CSS into the DOM.
//   // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
const styles = {
    root: {

        backgroundColor:"#34495e",
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',

        "&:hover":{
          backgroundColor: "rgba(52, 73, 94, 1.2)",
        },
    },
};

function AsphaltButton(props) {
    const { classes, children, className, ...other } = props;


    return (
        <Button color={"primary"} className={clsx(classes.root, className)} {...other}>
            {children || 'class names'}
        </Button>
    );
}

AsphaltButton.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(AsphaltButton);
