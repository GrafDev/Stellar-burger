import React from 'react';
import clsx from 'clsx';

import './empty-constructor-element.css';

export const EmptyConstructorElement: React.FC<{
    text: string;
    type?: 'top' | 'bottom';
    extraClass?: string;
    handleClose?: () => void;
}> = ({ type, text, extraClass = '', handleClose }) => {
    const className = clsx(
        'empty-constructor-element',
        {
            [`empty-constructor-element_pos_${type}`]: type,
        },
        extraClass
    );

    return (
        <div className={className}>
             <span className={'empty-constructor-element_text'}>{text}</span>
        </div>
    );
};