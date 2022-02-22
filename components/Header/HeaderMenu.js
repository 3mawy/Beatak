import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import styles from '/styles/components/header.module.css'
import SearchBar from "./SearchBar/SearchBar";
import {useMediaQuery} from './useMediaQueryHook';
import HeaderMenuDrawer from "./HeaderMenuDrawer";


const pages = [{id: 1, text: 'Pricing', NavIcon: 'MenuIcon'}
    , {id: 2, text: 'Products', NavIcon: 'MenuIcon'}
    , {id: 3, text: 'Blog', NavIcon: 'MenuIcon'}];

const HeaderMenu = () => {
    const isMobile = useMediaQuery(899);


    function handleCloseNavMenu() {
        return
    }

    return (
        <Toolbar className={styles.Toolbar} disableGutters>
            <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                <HeaderMenuDrawer pages={pages}/>
            </Box>
            {isMobile ? <SearchBar/> : null}
            <Box className={styles.BoxSpacing} sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                {pages.map((page) => (
                    <Button
                        key={page.id}
                        onClick={handleCloseNavMenu}
                        sx={{my: 2, color: 'white', display: 'block'}}
                    >
                        {page.text}
                    </Button>
                ))}
            </Box>
        </Toolbar>

    );
};
export default HeaderMenu;
