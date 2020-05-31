import {makeStyles} from "@material-ui/styles";

const styles = makeStyles(theme=>({
    featuresContainer: {
        width: "88vw",
        margin: "auto",

        [theme.breakpoints.down("md")]:{
            width:"90vw"
        },
        [theme.breakpoints.down("sm")]:{
            width:"95vw"
        }



    },

    featuresHeading:{
        color:theme.palette.common.wetAsphalt,
    },
    featureItem:{
        maxWidth:"30rem",
        [theme.breakpoints.down("md")]:{
            maxWidth:"25rem",
        },
        [theme.breakpoints.down("sm")]:{
            maxWidth:"20rem",
        },
        margin:"1rem 0"

    },
    featureItemContainer:{
        marginTop:"1rem"
    },
    icon:{
        marginRight:"4px",
        [theme.breakpoints.down("md")]:{
            marginRight: 0
        },
        [theme.breakpoints.down("sm")]:{
            marginRight: 0
        },

    }
}));


export default styles;
