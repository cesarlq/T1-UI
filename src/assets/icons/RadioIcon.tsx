import * as React from "react";
import { SVGProps } from "react";
const RadioIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path fill="#DB3B2B" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path fill="#fff" stroke="#fff" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default RadioIcon;