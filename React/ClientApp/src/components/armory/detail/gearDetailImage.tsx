import type { GearItem } from "../../../services/gearRepository";
import PlaceholderImage from "../../ui/placeholderImage/placeholderImage";
import "./gearDetailImage.css";

interface GearDetailImageProps {
    gear: GearItem;
}

function GearDetailImage({ gear }: GearDetailImageProps) {
    return (
        <section className="gear-detail-image-section" aria-label="Afbeelding uitrusting">
            <div className="gear-detail-image">
                <PlaceholderImage src={gear.imageUrl} alt={`Afbeelding van ${gear.name}`} /> 
            </div>
        </section>
    )
}

export default GearDetailImage;