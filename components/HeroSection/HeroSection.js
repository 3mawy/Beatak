import React from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {theme} from "../../pages/theme";
const backgroundImage =
    '/static/images/heroimage.jpg';

function HeroSection(props) {
    return (
        <div>
            <Box
                sx={{
                    backgroundImage: `linear-gradient(to bottom, transparent, ${theme.palette.background.default} 85%)
                    ,linear-gradient(to top, transparent, ${theme.palette.background.default} 140%) ,
                    url(${backgroundImage})`,
                    backgroundColor: '#7fc7d9', // Average color of the background image.
                    backgroundPosition: 'center',
                    height: '80vh',
                    justifyContent: 'center',

                }}
            >
                {/* Increase the network loading priority of the background image. */}
                <img
                    style={{display: 'none'}}
                    src={backgroundImage}
                    alt="increase priority"
                />
                <Typography color="inherit" align="center" variant="h4" marked="center">
                    Upgrade your Sundays
                </Typography>


            </Box>
        </div>
    );
}

export default HeroSection;