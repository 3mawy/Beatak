import React from 'react';
import SearchBarSelect from "./SearchBarSelect";

function SearchBar(props) {
    return (
        <div className={` w-full ps-4 justify-start flex min-w-0 ${props.className}`}>
            <div className="flex bg-gray100 dark:bg-dark rounded-full w-full">
                <button className="flex items-center justify-center px-4 ">
                    <svg className="w-6 h-6 text-gray400 dark:text-gray300" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24">
                        <path
                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                        </path>
                    </svg>
                </button>
                <input type="text" className="py-2 placeholder:text-gray400 placeholder:dark:text-gray300 bg-transparent w-full rounded-full" placeholder="What are you looking for?"/>
                <SearchBarSelect/>
            </div>
        </div>
    );
}

export default SearchBar;