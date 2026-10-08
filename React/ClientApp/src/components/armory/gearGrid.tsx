import type { GearItem } from "../../services/gearRepository"
import GearCard from "./gearCard"
import "./gearGrid.css"

interface GearGridProps {
    items: GearItem[];
}

function GearGrid({ items }: GearGridProps) {
    if (items.length === 0) {
        return(
            <p className="gear-grid-empty">Geen uitrusting gevonden. Voeg er eerst 1 toe</p>
        )
    }
    return (
        <ul className="gear-grid">
            {items.map(item => (
                <li key={item.id}>
                    <GearCard gear={item} />
                </li>
            ))}
        </ul>
    )
}

export default GearGrid;