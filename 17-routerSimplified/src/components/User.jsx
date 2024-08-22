import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
    const params = useParams();
    return (
        <div className="userContainer">
            Hi, i am <span className="tomato"> {params.username}</span>
        </div>
    );
};

export default User;
