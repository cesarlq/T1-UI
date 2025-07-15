import * as React from "react";

const IndeterminateCheckboxIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
    >
        <g clipPath="url(#clip0_5814_4994)">
            <path fill="#fff" d="M0 0h16v16H0z"></path>
            <path
                fill="#DB3B2B"
                d="M13 0H3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3"
            ></path>
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="1.778"
                d="M3 8.071h10"
            ></path>
        </g>
        <defs>
            <clipPath id="clip0_5814_4994">
                <path fill="#fff" d="M0 0h16v16H0z"></path>
            </clipPath>
        </defs>
    </svg>
);

export default IndeterminateCheckboxIcon;