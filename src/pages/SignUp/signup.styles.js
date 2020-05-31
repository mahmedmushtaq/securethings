import {makeStyles} from "@material-ui/styles";

export default makeStyles(theme=>({
    textField:{
        width:"40%",
        [theme.breakpoints.down("sm")]:{
            width:"70%"
        },
        [theme.breakpoints.down("xs")]:{
            width:"90%"
        },
    },
}));

