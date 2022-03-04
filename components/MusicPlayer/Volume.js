import React, {useState} from 'react';
import Slider, {createSliderWithTooltip} from 'rc-slider';
import {Mute, VolumeIcon} from "components/Icons";
import 'rc-slider/assets/index.css';

import { Range } from 'react-range';

function Volume(props) {
    const [vol, setVol] = useState([50]);
    const [muted, setMuted] = useState(false);
    const muteToggle = () => setMuted(!muted);

    return (
        <div className={`w-32 flex items-center ${props.className}`}>
            <button
                id="vol_btn"
                type="button"
                className="ml-auto mr-3 "
                onClick={muteToggle}
            >
                {muted? <Mute/>:<VolumeIcon/>}
            </button>
            <Range
                step={0.1}
                min={0}
                max={100}
                values={vol}
                onChange={(vol) => setVol( vol )}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        className={`h-1 w-full dark:bg-light bg-dark rounded-full`}
                        style={{
                            ...props.style,
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        className={`h-4 w-4 bg-primary rounded-full`}
                        style={{
                            ...props.style,
                        }}
                    />
                )}
            />
        </div>

    );
}

export default Volume;