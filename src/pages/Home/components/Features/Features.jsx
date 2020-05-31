import React,{useEffect} from "react";
import {Grid, Typography, Divider, useMediaQuery, Hidden} from "@material-ui/core";
import styles from "./features.styles";
import {useTheme} from "@material-ui/styles";


export default function Features() {
    const classes = styles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));



    return(
        <Grid container  className={classes.featuresContainer} id={"features"}>

            <Grid item style={{margin:"10px auto"}}>
                <Typography variant={"h1"} className={classes.featuresHeading} >
                    Features
                </Typography>



            </Grid>


            {/*first row*/}







            <Grid container  justify={matchesSM ? "center":"space-around"}>
                <br/>
                <br/>
                <br/>




                <Grid item sm>
                    <Grid container direction={"column"} className={classes.featureItemContainer}>

                        {/* column 1 row 1*/}

                        <Grid item className={classes.featureItem}>
                            <Grid container direction={matchesMD ?"column":"row"}  alignItems={"center"}>
                                <Grid item className={classes.icon}>


                                    <img src="https://image.flaticon.com/icons/svg/2928/2928984.svg" width={"48px"} height={"48px"}/>
                                </Grid>
                                <Grid item>
                                    <Grid container direction={"column"} alignItems={matchesMD ? "center":undefined}>
                                        <Grid item>
                                            <Typography variant={"h6"}>Records</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant={"subtitle1"} >
                                                Records of all private info
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>


                        {/* column 1 row 2*/}



                        <Grid item className={classes.featureItem}>
                            <Grid container direction={matchesMD ?"column":"row"} alignItems={"center"} >
                                <Grid item className={classes.icon}>
                                    <img src="https://image.flaticon.com/icons/svg/2945/2945694.svg" width={"48px"} height={"48px"}/>
                                </Grid>
                                <Grid item>
                                    <Grid container direction={"column"} alignItems={matchesMD? "center":undefined}>
                                        <Grid item>
                                            <Typography variant={"h6"}>Credentials Tracking</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant={"subtitle1"} >
                                                Track your credentials all over the webs
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>



                        {/* column 1 row 3*/}




                    </Grid>
                </Grid>



                <Grid item sm>
                    <Grid container direction={"column"} className={classes.featureItemContainer}>

                        {/* column 2 row 1*/}

                        <Grid item container direction={matchesMD ?"column":"row"}  className={classes.featureItem} alignItems={"center"}>
                            <Grid item className={classes.icon}>
                                <img src="https://image.flaticon.com/icons/svg/2647/2647573.svg" width={"48px"} height={"48px"}/>
                            </Grid>
                            <Grid item>
                                <Grid container direction={"column"} alignItems={matchesMD ? "center":undefined}>
                                    <Grid item>
                                        <Typography variant={"h6"}>Easy to use</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={"subtitle1"} >
                                            Simple and clean interface

                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* column 2 row 2*/}



                        {/* column 2 row 3*/}

                        <Grid item className={classes.featureItem}>
                            <Grid container direction={matchesMD ?"column":"row"} alignItems={"center"}>
                                <Grid item className={classes.icon}>
                                    <img src="https://image.flaticon.com/icons/svg/876/876204.svg" width={"48px"} height={"48px"}/>
                                </Grid>
                                <Grid item>
                                    <Grid container direction={"column"} alignItems={matchesSM ? "center":undefined}>
                                        <Grid item>
                                            <Typography variant={"h6"}>Security</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant={"subtitle1"} >
                                                Your private informations are secured
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>

                <Grid item sm>
                    <Grid container direction={"column"} className={classes.featureItemContainer} alignItems={"center"}>

                        {/* column 3 row 1*/}

                        <Grid item className={classes.featureItem}>
                            <Grid container direction={matchesMD ?"column":"row"} alignItems={"center"}>
                                <Grid item className={classes.icon} style={{marginLeft:"4px"}}>
                                    <img src="https://image.flaticon.com/icons/svg/2996/2996354.svg"  width={"48px"} height={"48px"}/>
                                </Grid>
                                <Grid item>
                                    <Grid container direction={"column"} alignItems={matchesMD ? "center":undefined}>
                                        <Grid item>
                                            <Typography variant={"h6"}>Password Tracking</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant={"subtitle1"} >
                                                Generate And Track Your passwords
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>



                        <Grid item className={classes.featureItem}>
                            <Grid container direction={matchesMD ?"column":"row"} alignItems={"center"}>
                                <Grid item className={classes.icon} style={{marginLeft:"4px"}}>
                                    <img src="https://image.flaticon.com/icons/svg/2971/2971993.svg" height={"48px"} width={"48px"}/>
                                </Grid>
                                <Grid item>
                                    <Grid container direction={"column"} alignItems={matchesMD ? "center":undefined}>
                                        <Grid item>
                                            <Typography variant={"h6"}>All versions are <span style={{color:"red"}}>free</span></Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant={"subtitle1"} >
                                                Use it's mobile and desktop version
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>






                    </Grid>
                </Grid>



            </Grid>
        </Grid>
    )
}
