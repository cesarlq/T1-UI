
import { Checkbox } from '@mui/material';
import React from 'react';
import { ExtendedCheckBoxProps } from './CheckBox.types';

const CheckBox: React.FC<ExtendedCheckBoxProps> = ({
    children,
    renderIcon,
    ...props
}) => {
    const customIcon = renderIcon ? renderIcon(props) : undefined;

    if (children) {
        return (
            <div style={{display:'flex', gap: '1rem', alignItems: 'anchor-center'}}>
                <Checkbox
                    {...props}
                    icon={customIcon || undefined}
                    checkedIcon={customIcon || undefined}
                />
                {children}
            </div>
        );
    }

    return (
        <Checkbox
            {...props}
            icon={customIcon || undefined}
            checkedIcon={customIcon || undefined}
        />
    );
};

export default CheckBox;