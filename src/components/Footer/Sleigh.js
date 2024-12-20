import React from "react";
import sleighImage from "../../Images/treno.png";

export default function Sleigh() {
    return (
        <div
            className="position-fixed"
            style={{
                bottom: "10px",
                right: "-100px",
                width: "250px",
                opacity: 0.8,
                animation: "fly 10s linear infinite",
            }}
        >
            <img src={sleighImage} alt="Papai Noel voando no trenó" className="w-100" />
        </div>
    );
}
