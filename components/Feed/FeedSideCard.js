import React from 'react';

function FeedSideCard(props) {
    return (
        <div
            className="shadow-md h-screen bg-gray100 my-2 dark:bg-dark300 text-green-500 text-lg font-bold text-center p-10  ">{props.data}
        </div>
    );
}

export default FeedSideCard;