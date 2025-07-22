import React from 'react';

function Card({children, className}:{children: React.ReactNode, className?: string}) {
    return (
        <div className={`${className}`} style={{boxShadow: '0px 0px 5px 1px #0000001A', padding: '1rem', borderRadius:'10px'}}>
            {children}
        </div>
    );
}

export default Card;