import * as React from "react";

const CheckboxIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
    >
        <g clipPath="url(#clip0_70_1180)">
            <rect width="16" height="16" fill="#DB3B2B" rx="4"></rect>
            <path
                fill="#DB3B2B"
                stroke="#DB3B2B"
                strokeWidth="0.889"
                d="M12.444.889H3.555A2.667 2.667 0 0 0 .89 3.555v8.89a2.667 2.667 0 0 0 2.666 2.666h8.89a2.667 2.667 0 0 0 2.666-2.667V3.555A2.667 2.667 0 0 0 12.444.89Z"
            ></path>
            <g clipPath="url(#clip1_70_1180)">
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M6.814 11.217 3.741 8.139a.64.64 0 0 1 0-.901.637.637 0 0 1 .9 0l2.173 2.167 4.546-4.552a.64.64 0 0 1 .9 0 .64.64 0 0 1 0 .9z"
                    clipRule="evenodd"
                ></path>
            </g>
        </g>
        <defs>
            <clipPath id="clip0_70_1180">
                <rect width="16" height="16" fill="#fff" rx="4"></rect>
            </clipPath>
            <clipPath id="clip1_70_1180">
                <path fill="#fff" d="M3.556 3.556h8.889v8.889h-8.89z"></path>
            </clipPath>
        </defs>
    </svg>
);

export default CheckboxIcon;