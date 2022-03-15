import React from 'react';
import Image from "next/image";
import {UserAddIcon} from "@heroicons/react/solid";
const data = [
    {
        name: "xxxtentacion",
        results: 60
    },
    {
        name: "type beat",
        results: 40
    },
    {
        name: "drake type beat",
        results: 12
    },
    {
        name: "shfveeq type beat",
        results: 15
    },
    {
        name: "action",
        results: 10
    },
    {
        name: "xa type beat",
        results: 10
    },
]

function FeedSearchesCard(props) {
    return (
        <div
            className="shadow-md h-screen bg-gray50 dark:bg-dark300 my-2 px-3 md:px-5 py-3 md:py-5">
            <div className={`flex grid grid-cols-1 text-start space-y-5`}>
                <h1 className={`text-2xl font-bold`}>Who to follow</h1>
                <div className={`space-y-5  text-lg `}>
                    {data.map((i) => (
                        <div key={i.name} className={`flex`}>
                            <div className={`mr-2 w-fit`}>
                                <Image
                                    src="https://picsum.photos/300/300/?music"
                                    alt=""
                                    width={50}
                                    height={50}
                                    className={`rounded-sm`}
                                />
                            </div>
                            <div className={`flex grow h-fit`}>
                                <div className={`grow `}>
                                    <h2 className={`block text-sm font-bold flex truncate`}>{i.name}</h2>
                                    <span className={`dark:text-gray text-gray400 text-sm flex`}> {`${i.results}k results`}</span>
                                </div>
                                <div className={`mt-1 h-fit`}>
                                    <button className={`dark:bg-gray400 bg-gray200 rounded px-3 py-1.5 flex`}><UserAddIcon className={`h-5 self-center`}/></button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeedSearchesCard;