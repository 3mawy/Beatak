import React from 'react';
import Image from "next/image";

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

function FeedFollowCard(props) {
    return (
        <div
            className="shadow-md h-screen bg-gray100 dark:bg-dark300 my-2 px-3 md:px-5 py-3 md:py-5">
            <div className={`flex grid grid-cols-1 text-start space-y-5`}>
                <h1 className={`text-2xl font-bold`}>Trending searches</h1>
                <div className={`space-y-5  text-lg `}>
                    {data.map((i) => (
                        <div key={i.name} className={`flex`}>
                            <div className={``}>
                                <h2 className={`block flex`}>{i.name}</h2>
                                <span className={`text-gray text-sm flex`}> {`${i.results}k results`}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeedFollowCard;