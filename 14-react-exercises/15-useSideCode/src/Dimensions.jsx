import React from "react";
import { useEffect } from "react";

const Dimensions = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);

    // for setting width and height on window resize
    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Added");

        // do the code before next rerender or before component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event REMOVED");
        };
    }, []);

    useEffect(() => {
        document.title = `${width} x ${height} PX`;
    }, [width, height]);

    return (
        <div>
            <div>
                <p>W : {width}px</p>
                <p>H : {height}px</p>
            </div>
        </div>
    );
};

export default Dimensions;
