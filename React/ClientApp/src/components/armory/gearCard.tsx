import type { GearItem } from "../../services/gearRepository"
import Badge from "../ui/badge/badge"
import Card from "../ui/card/card"
import "./gearCard.css"
import PlaceholderImage from "../ui/placeholderImage/placeholderImage"

interface GearCardProps {
    gear: GearItem;
}

function GearCard({ gear }: GearCardProps) {
    return (
        <Card className="gear-card">
            <div className="gear-card-top">
                <span className="gear-card-label">{gear.kind}</span>
                {gear.dangerous ? (
                    <Badge variant="danger">Gevaarlijk</Badge>
                ) : (
                    <Badge>Veilig</Badge>
                )}
            </div>
            <div className="gear-card-content">
                <h3 className="gear-card-title">{gear.name}</h3>
            </div>

            <div className="gear-card-image">
                <PlaceholderImage alt={gear.name} />
            </div>

            <dl className="gear-card-facts">
                <div className="gear-card-fact">
                    <dt>Toestand</dt>
                    <dd>{gear.condition}</dd>
                </div>
                <div className="gear-card-fact gear-card-fact-end">
                    <dt>Status</dt>
                    <dd>{gear.retired ? "Buiten dienst" : "Beschikbaar"}</dd>
                </div>
            </dl>
        </Card>
    )
}

export default GearCard;