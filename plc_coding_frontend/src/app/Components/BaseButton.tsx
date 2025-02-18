import { ReactNode } from "react";


interface BaseButtonProps {
    text: string;
    onClick?: () => void;
    icon?: ReactNode;
    color?: string;
    textColor?: string;
    size?: "small" | "medium" | "large";
    className?: string;
}

export default function BaseButton({
                                       text,
                                       onClick,
                                       icon,
                                       color = "bg-pink-500",
                                       textColor = "text-white",
                                       size = "medium",
                                       className = "",
                                   }: BaseButtonProps) {
    const sizeClasses = {
        small: "px-3 py-2 text-sm",
        medium: "px-5 py-3 text-base",
        large: "px-7 py-4 text-lg",
    };

    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 rounded-full font-semibold ${color} ${textColor} ${sizeClasses[size]} transition-all hover:opacity-80 ${className}`}
        >
            {icon && <span>{icon}</span>}
            {text}
        </button>
    );
}
