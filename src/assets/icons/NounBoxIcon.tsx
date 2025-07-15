import * as React from "react";
import { SVGProps } from "react";
const NounBoxIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={16} {...props}>
        <g fill="#4C4C4C">
            <path d="m4.053 1.462 6.906 3.059-.258.582-6.906-3.058z" />
            <path d="M7.33 16 0 13.004V2.996L7.33 0l7.331 3.315v9.976L7.331 16zM.638 12.558l6.694 2.74 6.693-2.421V3.729L7.33.67.637 3.412v9.147z" />
            <path d="m.435 2.922 7.02 2.872-.241.59-7.02-2.872z" />
            <path d="M7.65 15.65h-.638V5.864l7.235-2.614.191.574L7.65 6.31z" />
        </g>
    </svg>
);
export default NounBoxIcon;
