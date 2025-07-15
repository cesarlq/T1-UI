import * as React from "react";
import { SVGProps } from "react";
const FilterIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={14} {...props}>
        <g fill="none" fillRule="evenodd" stroke="#DB3B2B">
            <circle cx={8} cy={3} r={3} />
            <circle cx={14} cy={11} r={3} />
            <path strokeLinecap="square" d="M11.5 2.5h10m-21 9h10m-10-9h4m13 9h4" />
        </g>
    </svg>
);
export default FilterIcon;
