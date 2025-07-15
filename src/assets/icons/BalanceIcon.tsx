import * as React from "react";
import { SVGProps } from "react";
const BalanceIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
        <g>
            <path
                stroke="#4C4C4C"
                strokeWidth={0.3}
                d="M13.532 2H7.11A2.11 2.11 0 0 0 5 4.108v11.784A2.11 2.11 0 0 0 7.11 18h6.422a2.11 2.11 0 0 0 2.11-2.108V4.108A2.11 2.11 0 0 0 13.533 2zm1.559 13.892a1.559 1.559 0 0 1-1.559 1.556H7.11c-.86 0-1.557-.696-1.558-1.556V4.108A1.559 1.559 0 0 1 7.11 2.552h6.422c.86 0 1.558.696 1.559 1.556v11.784z"
                className={props.className}
            />
            <path d="M10.321 14.571a.946.946 0 1 0 0 1.892.946.946 0 0 0 0-1.892zm0 1.34a.394.394 0 1 1 0-.788.394.394 0 0 1 0 .789zM9.828 4.759h.987a.276.276 0 1 0 0-.552h-.987a.276.276 0 1 0 0 .552z" />
        </g>
    </svg>
);
export default BalanceIcon;
