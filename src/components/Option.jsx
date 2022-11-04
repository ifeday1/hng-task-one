import React from "react";
import "./Option.css";
const Option = (props) => {
    const { title, link, to, id } = props;
    //console.log(link);

    return (
        <div className="option">
            <button>
                <a id={id} href={link}>{title}</a>
            </button>
        </div>
    );
};

export default Option;
