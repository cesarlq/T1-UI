import * as React from "react";
import { SVGProps } from "react";
const UnCheckRadioIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                stroke="#C3C3C3"
                d="M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default UnCheckRadioIcon;
