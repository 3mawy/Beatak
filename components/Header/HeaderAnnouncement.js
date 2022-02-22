import React from 'react';

function HeaderAnnouncement(props) {
    return (<>
            {props.title &&
                <p className="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
                    {props.title}
                </p>}
        </>

    );
}

export default HeaderAnnouncement;