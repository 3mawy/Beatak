import React, {useEffect, useState} from 'react';
import styles from '/styles/components/slider.module.css'

import {getTrackBackground, Range} from 'react-range';
import Slider from "rc-slider/lib/Slider";
const STEP = 10;
const MIN = 5;
const MAX = 105;
function SongRange(props) {
    const [songAt, setSongAt] = useState([]);
    const [muted, setMuted] = useState(false);
    const muteToggle = () => setMuted(!muted);
    useEffect(() => {
        setSongAt([0])
    }, [])
    const audio = {
        duration:500,

    }
    return (
        <div className={` flex items-center  ${props.className}`}>
            <Slider
                className={`slider -mt-1`}
                defaultValue={0}
                min={0}
                max={audio.duration}
                trackStyle={{ height: 3,zIndex:9999, backgroundColor:'#efeaea'}}
                handleStyle={{
                    borderColor: 'blue',
                    height: 15,
                    width: 15,
                    marginLeft: -14,
                    marginTop: -5,
                    backgroundColor: 'black',
                    display:'none',
                }}
                railStyle={{ height: 3, backgroundColor:'#141515'}}
            />

        </div>

    );
}

export default SongRange;