import React from "react";
import "./Option.css";
const Option = (props) => {
    const { title, link, id } = props;
    //console.log(link);

    return (
        <div className="option">
            <button>
                <a href={link}>{title}</a>
            </button>
        </div>
    );
};

export default Option;
