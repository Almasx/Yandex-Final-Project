const Circle = (size : string) => {
    return (<svg fill="none" className={"opacity-70 w-[" + size.size + "%] absolute top-[50%] translate-y-[-50%] h-[" + size.size + "%] translate-x-[-50%] left-[50%]"} viewBox="0 0 479 477" xmlns="http://www.w3.org/2000/svg">
        <path d="M239.519 476.587C371.259 476.587 478.057 369.912 478.057 238.321C478.057 106.73 371.259 0.0539551 239.519 0.0539551C107.779 0.0539551 0.981445 106.73 0.981445 238.321C0.981445 369.912 107.779 476.587 239.519 476.587Z" fill="url(#linear_1)" fill-opacity="0.01"/>
        <path d="M477.557 238.321C477.557 369.635 370.984 476.087 239.519 476.087C108.055 476.087 1.48145 369.635 1.48145 238.321C1.48145 107.006 108.055 0.553955 239.519 0.553955C370.984 0.553955 477.557 107.006 477.557 238.321Z" className="stroke-[url(#linear_3)] dark:stroke-[url(#linear_2)]" stroke-opacity="0.36"/>
        <defs>
        <linearGradient id="linear_1" x1="239.519" y1="0.0539551" x2="240" y2="477" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="linear_2" x1="239.518" y1="-0.224147" x2="239.518" y2="476.865" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#8D8D8D" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="linear_3" x1="239.518" y1="-0.224147" x2="239.518" y2="476.865" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stop-color="#8D8D8D" stop-opacity="0"/>
        </linearGradient>
        </defs>
    </svg>
    );
};

export default Circle;
