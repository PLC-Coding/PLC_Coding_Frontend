// src/components/Button.tsx
import React from 'react';
import { COLORS } from './brandColors';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    children: React.ReactNode;
    color?: string;
    textColor?: string;
    size?: string;
    icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    ...props
}) => {
    const baseStyle: React.CSSProperties = {
        fontFamily: 'MyriadPro, sans-serif',
        fontSize: '1rem',
        padding: '0.75rem 1.5rem',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
    };

    const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
        primary: {
            backgroundColor: COLORS.loneStarRed,
            color: '#fff',
        },
        secondary: {
            backgroundColor: COLORS.texasBlue,
            color: '#fff',
        },
        ghost: {
            backgroundColor: 'transparent',
            color: COLORS.texasBlue,
            border: `2px solid ${COLORS.texasBlue}`,
        },
    };

    const combinedStyle = {
        ...baseStyle,
        ...variantStyles[variant],
    };

    return (
        <button style={combinedStyle} {...props}>
            {children}
        </button>
    );
};

export default Button;