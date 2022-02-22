import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchBarSelect from "./SearchBarSelect";
import {useMediaQuery} from "../useMediaQueryHook";

function SearchBar(props) {
    const isMobile = useMediaQuery(899);


    const Search = styled('div')(({theme}) => ({
        position: 'relative',
        borderRadius: "25px",
        backgroundColor: theme.palette.common.grey,
        display: 'inline-flex',
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(1.8),
            width: '50%',
        },
    }));

    const SearchIconWrapper = styled('div')(({theme}) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({theme}) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, .2, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '100%',
            },
        },
    }));
    return (
        <>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="What are you looking for?"
                    inputProps={{'aria-label': 'search'}}
                />
                {isMobile ? null : <SearchBarSelect/>}
            </Search>


        </>

    );
}

export default SearchBar;