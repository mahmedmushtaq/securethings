import React from "react";
import {Route} from "react-router-dom";


export default props=>{

    return(
        <Route exact={props.exact} path={props.path} render={(matchProps)=><props.component {...matchProps}/>}/>
    )
}
