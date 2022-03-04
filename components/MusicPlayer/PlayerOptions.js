import React from 'react';
import {DotsVerticalIcon, PlusIcon} from "@heroicons/react/solid";
import MusicMenu from "./Menu";

function PlayerOptions(props) {
    return (
        <>
            <button className="focus:outline-none px-3 rounded-md hover:bg-dark hidden md:inline-block">
                <PlusIcon className={`h-6 w-6`}/>
            </button>
            <MusicMenu/>
        </>
    );
}

export default PlayerOptions;