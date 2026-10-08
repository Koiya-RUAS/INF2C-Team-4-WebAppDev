import React from 'react';
import './button.css';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';
type ButtonSize = 'small' | 'medium';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    children,
    type = 'button',
    className = "",
    disabled = false,
    ...rest
}) => {
    const classes = [
        'btn',
        `btn-${variant}`,
        `btn-${size}`,
        fullWidth ? 'btn-full-width' : '',
        className,
    ]
    .filter(Boolean)
    .join(' ');

    return (
        <button className={classes} type={type} disabled={disabled}  {...rest}>
            {children}
        </button>
    );
}

export default Button;