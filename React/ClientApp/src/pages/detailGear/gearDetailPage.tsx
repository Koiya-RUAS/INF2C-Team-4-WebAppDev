import { useParams } from "react-router";
import GearDetailHeader from "../../components/armory/detail/gearDetailHeader";
import GearDetailImage from "../../components/armory/detail/gearDetailImage";
import GearDetailInfo from "../../components/armory/detail/gearDetailInfo";
import GearDetailTabs from "../../components/armory/detail/gearDetailTabs";
import { dummyGear, getGearItems } from "../../services/gearRepository";
import "./gearDetailPage.css";

function GearDetailPage() {
    const { id } = useParams();
    const gear = [...dummyGear, ...getGearItems()].find(item => item.id === id);

    if (!gear) {
        return <main><p>Uitrusting niet gevonden</p></main>
    }
    return (
        <main className="gear-detail-page">
            <GearDetailHeader gear={gear} description={gear.description} />
            
            <div className="gear-detail-content">
                <GearDetailImage gear={gear} />
                <GearDetailInfo gear={gear} />
            </div>
            <GearDetailTabs />
        </main>
    )
}

export default GearDetailPage;