import * as React from 'react';
import {styled, alpha, makeStyles} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CartIcon from '@mui/icons-material/AddShoppingCart';
import styles from '/styles/components/header.module.css'
import SearchBar from "./SearchBar/SearchBar"
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import HeaderMenu from "./HeaderMenu";
import {useMediaQuery} from "./useMediaQueryHook";
import HeaderUserMenu from "./HeaderUserMenu";


export default function Header() {

    const isMobile = useMediaQuery(899);


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" className={styles.AppBar}>
                <Toolbar >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{mr: 2}}
                    >
                        <Image height={30} width={27} src="/static/images/logo-red.svg" alt="logo"/>
                    </IconButton>


                    {isMobile ? null : <SearchBar isMobile={isMobile}/>}
                    <Box sx={{flexGrow: 1}}/>
                    <HeaderUserMenu/>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <MailIcon/>
                        </Badge>
                    </IconButton>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <CartIcon/>
                        </Badge>
                    </IconButton>

                </Toolbar>
                <HeaderMenu/>
            </AppBar>
        </Box>
    );
}