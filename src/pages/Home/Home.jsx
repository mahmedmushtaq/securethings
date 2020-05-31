import React, {useCallback, useEffect} from "react";
import {Grid, Typography,TextField, useMediaQuery,FormControlLabel,Checkbox} from "@material-ui/core";
import { PasswordSetting, NewPassword, TopBar} from "../../components";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import contentbg from "../../assets/images/contentbg.jpg";
import {Button} from "@material-ui/core";
import {randomPasswordGenerator} from "../../others/generator";
import {useSelector} from "react-redux";
import Features from "./components/Features/Features";
import {AsphaltButton} from "../../components";


const useStyles = makeStyles(theme=>({
    container:{
      overflow:"hidden",
    },
    content:{
       height:"80vh",
       width:"100vw",
       backgroundImage:`url(${contentbg})`
    },
    btnContainer:{
        padding:"10px 50px",margin:"0 10px",
        [theme.breakpoints.down("sm")]:{
            margin:"4px auto",
            width:"300px",
            fontSize:17,
            padding:"15px 10px",
        }
    },
    lengthBox:{
        outline:"none",
        border:"1px solid black",
        padding:"10px 20px",
    }


}));

const Home = props=>{
    const classes = useStyles();
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.down("xs"));
    const sm = useMediaQuery(theme.breakpoints.down("sm"));
    const [password,setPassword] = React.useState("");
    const initialState = {settingsModel:false,newPasswordModel:false};
    const [open,setOpen] = React.useState(initialState);

    const advancedSettings = useSelector(store=>store.passwordSettings);


   const generatePasswordOnChange =  useCallback(async ()=>{
        generatePassword();
    },[advancedSettings]);


   useEffect(()=>{
        generatePasswordOnChange();
   },[generatePasswordOnChange]);




    const handleOpen = ()=>{
        setOpen({
            ...initialState,
            settingsModel: true,
        });
    }

    const handleClose = ()=>{
        setOpen(initialState);
    }

    const openNewPasswordModel = ()=>{
        setOpen({
            ...initialState,
            newPasswordModel: true,
        })
    }

    const closeNewPasswordModel = ()=>{
        setOpen({
            ...initialState,
            newPasswordModel:false,
        })
    }

    const generatePassword = ()=>{

        setPassword(randomPasswordGenerator(advancedSettings));
    }


    return(
        <React.Fragment>
           <PasswordSetting
               open={open.settingsModel}
               handleClose={handleClose}
           />

           <NewPassword
            open={open.newPasswordModel}
            password={password}
            handleClose={closeNewPasswordModel}
           />

            <Grid container direction={"column"} className={classes.container}>
                <Grid item container>
                    <Grid item>
                        <TopBar/>
                    </Grid>
                </Grid>

            <Grid item container className={classes.content} direction={"column"} justify={"center"} alignItems={"center"}>
               <Grid item style={{margin:!xs ? "25px" : "25px auto"}}>
                   <Typography variant={xs ? "h5":"h1"} style={{fontSize:xs? "3y 2px":undefined}}>
                       Generate Password
                   </Typography>
               </Grid>

                <Grid item  style={{width:!xs ? "60%": "80%",margin:xs ? "0 auto 0 15px": undefined}}>
                    <input value={password} onChange={()=>{}}   style={{fontSize:20,width:"100%",border:"1px solid black",padding:20,outline:"none"}}/>
                </Grid>

                <Grid item container style={{margin:"10px auto"}} justify={"center"} alignItems={sm ? "center" : undefined} direction={sm ? "column" : "row"} >
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
                    <Grid item>
                        <Button
                            size={"large"}
                            variant={"contained"}
                            className={classes.btnContainer}
                            color={"secondary"}
                            onClick={handleOpen}>
                            Advanced Settings
                        </Button>
                    </Grid>
                    <Grid item>
                        <AsphaltButton
                            size={"large"}
                            variant={"contained"}
                            className={classes.btnContainer}
                            onClick={openNewPasswordModel}

                        >
                            Save password
                        </AsphaltButton>
                    </Grid>
                </Grid>


            </Grid>


        </Grid>
            <br/><br/>
            <Features/>

            <br/><br/><br/>

        </React.Fragment>
    )
};

export default Home;
