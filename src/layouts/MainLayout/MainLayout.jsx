import {Grid, useMediaQuery} from "@material-ui/core";
import {Sidebar, TopBar} from "../../components";
import React, {useState} from "react";
import {makeStyles, useTheme} from "@material-ui/styles";
import clsx from "clsx";


const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 56,
        height: '100%',
        [theme.breakpoints.up('sm')]: {
            paddingTop: 64
        }
    },
    shiftContent: {
        paddingLeft: 240
    },
    content: {
        height: '100%',
        width:"97%",
        overflow:"hidden",
        marginTop:"50px"


    }
}));


export default props=>{
    const theme = useTheme();
    const { children } = props;

    const classes = useStyles();

    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
        defaultMatches: true
    });

    const [openSidebar, setOpenSidebar] = useState(false);
    const handleSidebarClose = () => {
        setOpenSidebar(false);
    };

    const shouldOpenSidebar = isDesktop ? true : openSidebar;

    const handleSidebarOpen = () => {
        setOpenSidebar(true);
    };


    return(
        <div>
            <TopBar dashboard onSidebarOpen={handleSidebarOpen} />

        <div
            className={clsx({
                [classes.root]: true,
                [classes.shiftContent]: isDesktop
            })}
        >

            <Sidebar
                onClose={handleSidebarClose}
                open={shouldOpenSidebar}
                variant={isDesktop ? 'persistent' : 'temporary'}
            />
            <main className={classes.content} >
                {children}
            {/*    <Footer />*/}
            </main>
        </div>
        </div>
    )
}
