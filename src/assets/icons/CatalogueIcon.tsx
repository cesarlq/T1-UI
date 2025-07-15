import * as React from "react";
import { SVGProps } from "react";
const CatalogueIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
        <g>
            <path d="M16.263 2H6.075A2.075 2.075 0 0 0 4 4.072v11.856A2.075 2.075 0 0 0 6.075 18h10.188a.407.407 0 1 0 0-.814H6.075a1.261 1.261 0 1 1 0-2.519h10.188a.407.407 0 0 0 .407-.407V2.407A.407.407 0 0 0 16.263 2zM4.813 14.285V4.072a1.261 1.261 0 0 1 1.262-1.258h9.781v11.04H6.075c-.457 0-.9.152-1.261.43z" />
            <path d="M16.263 15.521H5.996a.407.407 0 0 0 0 .814h10.267a.407.407 0 1 0 0-.814z" />
        </g>
    </svg>
);
export default CatalogueIcon;
