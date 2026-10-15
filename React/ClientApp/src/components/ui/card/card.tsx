import type { ReactNode } from 'react'
import "./card.css"

interface CardProps {
    children: ReactNode;
    className?: string;
}

function Card({
    children, className = ""
}: CardProps) {
    return <div className={`card ${className}`.trim()}>{children}</div>
}

export default Card;