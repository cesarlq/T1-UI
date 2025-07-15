import * as React from "react";
import { SVGProps } from "react";
const MenuIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={17} {...props}>
        <path
            stroke={props.color}
            strokeLinecap="round"
            strokeWidth={1.3}
            d="M.5.5h24m-24 8h24m-24 8h24"
        />
    </svg>
);
export default MenuIcon;
