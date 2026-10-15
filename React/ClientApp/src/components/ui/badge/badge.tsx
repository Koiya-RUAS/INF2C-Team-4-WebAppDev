import type { ReactNode } from 'react'
import "./badge.css"

export type BadgeVariant = "neutral" | "danger";

interface BadgeProps {
    variant?: BadgeVariant;
    children: ReactNode;
}

function Badge({
    variant = "neutral", children
}: BadgeProps) {
    return <span className={`badge badge-${variant}`}>{children}</span>;
}

export default Badge;