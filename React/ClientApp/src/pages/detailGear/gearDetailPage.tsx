import GearDetailHeader from "../../components/armory/detail/gearDetailHeader";
import type { GearItem } from "../../services/gearRepository";
import GearDetailImage from "../../components/armory/detail/gearDetailImage";
import GearDetailInfo from "../../components/armory/detail/gearDetailInfo";
import GearDetailTabs from "../../components/armory/detail/gearDetailTabs";
import "./gearDetailPage.css";

const testGear: GearItem = {
    id: "1",
    name: "Lantern",
    kind: "Verlichting",
    condition: "new",
    dangerous: false,
    retired: false,
    loanedTo: null
}

function GearDetailPage() {
    return (
        <main className="gear-detail-page">
            <GearDetailHeader gear={testGear} description="Uitrusting van Hollowmere. Deze lantaarn is van hoge kwaliteit en kan gebruikt worden om donkere gebieden te verlichten." />
            
            <div className="gear-detail-content">
                <GearDetailImage gear={testGear} />
                <GearDetailInfo gear={testGear} />
            </div>
            <GearDetailTabs />
        </main>
    )
}

export default GearDetailPage;