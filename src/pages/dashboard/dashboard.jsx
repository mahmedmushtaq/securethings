import React, {useState} from "react";
import {Grid, Typography} from "@material-ui/core";
import {MainLayout} from "../../layouts";
import {makeStyles} from "@material-ui/styles";
import ProversionDialog from "./components/ProversionDialog";
import {AsphaltButton, WebList} from "../../components";
const useStyles = makeStyles(theme=>({
    weblistItem:{
         margin:"3px 0"
     }
}))

export default props=>{
    const classes = useStyles();

    return(
       <MainLayout>
           <Grid container  direction={"column"} style={{margin:"0 20px"}}>
              <Grid item>
                  <ProversionDialog/>
              </Grid>
               <br/><br/>

               <Grid item>
                  <AsphaltButton>Save new password</AsphaltButton>
               </Grid>
               <br/><br/>


               <Grid item>
                   <Typography variant={"h6"}>All Web Credentials lists</Typography>
               </Grid>
               <br/>

               <Grid item>
                   <Grid container justify={"space-around"}>
                     <WebList
                         id={1}
                         title={"facebook"}
                         imgSrc={"https://image.flaticon.com/icons/svg/174/174848.svg"}
                         dateTime={"September 14, 2016"}
                     />
                     <WebList
                           id={2}
                           title={"Google"}
                           imgSrc={"https://image.flaticon.com/icons/svg/281/281764.svg"}
                           dateTime={"September 14, 2016"}
                     />
                     <WebList
                         id={2}
                           title={"Twitter"}
                           imgSrc={"https://image.flaticon.com/icons/svg/124/124021.svg"}
                           dateTime={"September 14, 2016"}
                      />
                     <WebList
                         id={2}
                         title={"Instagram"}
                         imgSrc={"https://image.flaticon.com/icons/svg/124/124032.svg"}
                         dateTime={"September 14, 2016"}
                     />
                     <WebList
                         id={2}
                         title={"Linked In"}
                         imgSrc={"https://image.flaticon.com/icons/svg/124/124011.svg"}
                         dateTime={"September 14, 2016"}
                     />
                     <WebList
                         id={2}
                         title={"Skype"}
                         imgSrc={"https://image.flaticon.com/icons/svg/124/124038.svg"}
                         dateTime={"September 14, 2016"}
                     />
                   </Grid>
               </Grid>


           </Grid>
       </MainLayout>
    )
}
