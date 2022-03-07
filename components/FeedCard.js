import React from 'react';

function FeedCard(props) {
    return (
        <div
            className="shadow-md h-screen bg-gray100 my-2 dark:bg-dark300 text-green-500 text-lg font-bold text-center p-10 rounded-lg ">{props.data}
        </div>
    );
}

export default FeedCard;