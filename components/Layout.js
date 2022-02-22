import React from "react";
import style from "../styles/layout.module.css";
import Header from "../components/Header/Header";
import HeaderMenu from "./Header/HeaderMenu";
import header from "../styles/components/header.module.css";
import { makeStyles } from '@material-ui/core/styles';
import HeroSection from "./HeroSection/HeroSection";

const useStyles = makeStyles({
    header: {

        boxShadow: '0',

    },
});

const Layout = ({children}) => {
    const classes = useStyles();

    return (

        <div className={style.container}>
            <Header className={classes.header}/>
            <HeroSection/>
            {children}
            <div className={style.footer}>
                <h3>Browse and listen to music of your choice</h3>
            </div>
        </div>
    );
};
export default Layout;