import React from "react";
import {AsphaltButton, CustomModel} from "../index";
import {Button, Grid,Divider, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {randomPasswordGenerator} from "../../others/generator";
import {useSelector} from "react-redux";
import clsx from "clsx";

const useStyles = makeStyles(theme=>({
    btnContainer:{
        padding:"10px 50px",margin:"0 10px",
        [theme.breakpoints.down("sm")]:{
            margin:"4px auto",
            width:"300px",
            fontSize:17,
            padding:"15px 10px",
        }
    },
}));

export default props=>{
    const classes = useStyles();
    const advancedSettings = useSelector(store=>store.passwordSettings);
    const [password,setPassword] = React.useState("");
    const [passwordName,setPasswordName] = React.useState("");

    const generatePassword = ()=>{
        setPassword(randomPasswordGenerator(advancedSettings));
    }



    return(
        <CustomModel
        open={props.open}
        handleClose={props.handleClose}>
            <Grid container direction={"column"}>
                <Grid item>
                    <Typography variant={"h4"}>Save Password!</Typography>
                </Grid>
                <br/>
                <Grid item>
                    <input value={passwordName}   placeholder={"Your Password Name (e.g facebook password, google password)"} onChange={(e)=>{setPasswordName(e.target.value)}}   style={{fontSize:17,width:"80%",border:"1px solid black",padding:10,outline:"none"}}/>
                </Grid>

                <br/>


                <Grid item>
                    <input value={props.password ? props.password : password} placeholder={"Your password"} onChange={()=>{}}   style={{fontSize:20,width:"80%",border:"1px solid black",padding:10,outline:"none"}}/>
                </Grid>
                <br/>
                <Grid item>
                    <Button
                        size={"large"}
                        className={classes.btnContainer}
                        variant={"contained"}
                        color={"primary"}
                        onClick={generatePassword}>
                        Generate Password
                    </Button>
                </Grid>

                <br/>


                <Grid item>
                    <AsphaltButton
                        size={"large"}
                        variant={"contained"}
                        className={classes.btnContainer}
                        onClick={()=>{}}

                    >
                      Save this
                    </AsphaltButton>
                </Grid>

            </Grid>

        </CustomModel>
    )
}
