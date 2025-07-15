import * as React from "react";

const UnCheckboxIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
    >
        <g clipPath="url(#clip0_70_1179)">
            <path
                fill="#fff"
                stroke="#C3C3C3"
                strokeWidth="0.7"
                d="M15.539 3.889v8a3.65 3.65 0 0 1-3.65 3.65h-8a3.65 3.65 0 0 1-3.65-3.65v-8a3.65 3.65 0 0 1 3.65-3.65h8a3.65 3.65 0 0 1 3.65 3.65Z"
                opacity="0.7"
            ></path>
        </g>
        <defs>
            <clipPath id="clip0_70_1179">
                <path fill="#fff" d="M0 0h16v16H0z"></path>
            </clipPath>
        </defs>
    </svg>
);

export default UnCheckboxIcon;