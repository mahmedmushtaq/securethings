import React, {useState} from "react";
import {CustomModel} from "../index";
import {Checkbox,Button, TextField, FormControlLabel, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useDispatch, useSelector} from "react-redux";
import {changePasswordSettings} from "../../store";


const useStyles = makeStyles(theme=>({
    textFieldItem:{
         marginRight:10
    }
}));

const PasswordSetting =  props=>{
    const classes = useStyles();
    // = props;
    const passwordSettings = useSelector(store=>store.passwordSettings);

    const [advancedPasswordSettings,setAdvancedPasswordSettings] = useState({
       ...passwordSettings,
    });

    const dispatch = useDispatch();

    const handleChange = (e)=>{
        setAdvancedPasswordSettings({
                ...advancedPasswordSettings,
                [e.target.name]:e.target.value,
            });


    }

    return(
        <CustomModel
            open={props.open}
            handleClose={props.handleClose}

        >
            <Grid container>
                <Grid item container direction={"column"}>
                    <Grid item >
                        <Typography variant={"h5"}>
                            Password Includes
                        </Typography>
                    </Grid>
                    <br/>


                    <Grid item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={advancedPasswordSettings.numbers}
                                    onChange={e=>setAdvancedPasswordSettings(data=>({
                                        ...data,
                                        numbers:e.target.checked,
                                    }))}
                                    name="Numbers"

                                />
                            }
                            label="Digits"
                        />
                    </Grid>


                    <Grid item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={advancedPasswordSettings.chars_lower}
                                    onChange={e=>setAdvancedPasswordSettings(data=>({
                                        ...data,
                                        chars_lower:e.target.checked,
                                    }))}
                                    name="chars_lower"

                                />
                            }
                            label="Small case alphabets"
                        />
                    </Grid>


                    <Grid item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={advancedPasswordSettings.chars_upper}
                                    onChange={e=>setAdvancedPasswordSettings(data=>({
                                        ...data,
                                        chars_upper:e.target.checked,
                                    }))}
                                    name="chars_upper"

                                />
                            }
                            label="Upper case alphabets"
                        />
                    </Grid>

                    <Grid item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={advancedPasswordSettings.symbols}
                                    onChange={e=>setAdvancedPasswordSettings(data=>({
                                        ...data,
                                        symbols:e.target.checked,
                                    }))}
                                    name="symbols"

                                />
                            }
                            label="Symbols"
                        />
                    </Grid>




                    <br/>

                    <Grid container>

                        {
                            advancedPasswordSettings.chars_lower ? (

                   <Grid item className={classes.textFieldItem}>

                       <TextField type={"number"}

                                  value={advancedPasswordSettings.charsLowerNumber}
                                  name={"charsLowerNumber"}
                                  onChange={e=>handleChange(e)}

                                  style={{width:200,}}


                       label={"Number Of Lower Case Alphabets"}/>
                   </Grid>
                            ): ""
                        }


                        {
                            advancedPasswordSettings.chars_upper ? (

                    <Grid item className={classes.textFieldItem}>

                        <TextField type={"number"} value={advancedPasswordSettings.charsUpperNumber}
                                   name={"charsUpperNumber"}
                                   onChange={e=>handleChange(e)}
                                   label={"Number Of Upper Case alphabets"}/>
                    </Grid>
                            ):""
                        }


                        {
                            advancedPasswordSettings.numbers ? (


                        <Grid item className={classes.textFieldItem}>

                        <TextField type={"number"} value={advancedPasswordSettings.numNumber}
                                   name={"numNumber"}
                                   onChange={e=>handleChange(e)}

                                   label={"Number of digits"}/>
                    </Grid>
                            ):""
                        }

                        {
                            advancedPasswordSettings.symbols ? (

                    <Grid item className={classes.textFieldItem}>

                        <TextField type={"number"} value={advancedPasswordSettings.symbolsNumber}
                                   name={"symbolsNumber"}
                                   onChange={e=>handleChange(e)}
                                   label={"Number of symbols"}/>
                    </Grid>

                            ):""
                        }


                    </Grid>


                    <br/><br/>
                  <Grid item>
                      <Button variant={"contained"} style={{margin:"0 10px"}} onClick={()=>{dispatch(changePasswordSettings(advancedPasswordSettings));props.handleClose()}} color={"secondary"}>Save Settings</Button>

                  </Grid>




                </Grid>
            </Grid>



        </CustomModel>
    )
}


export default PasswordSetting;
