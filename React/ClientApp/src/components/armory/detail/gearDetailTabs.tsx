import { useState } from "react";
import { BookOpen, Check, Clock3 } from "lucide-react";
import "./gearDetailTabs.css";

type GearDetailTabs = "history" | "conditions"

function GearDetailTabs() {
    const [activeTab, setActiveTab] = useState<GearDetailTabs>("history");

        return (
            <section className="gear-detail-tabs" aria-label="Extra informatie">
                <div className="gear-detail-tab-list" role="tablist">
                    <button type="button" className={`gear-detail-tab ${activeTab === "history" ? "is-active" : ""}`} role="tab" aria-selected={activeTab === "history"} onClick={() => setActiveTab("history")}>
                        <Clock3 size={14} strokeWidth={1.6} aria-hidden="true" />
                        <span>Uitleengeschiedenis</span>
                    </button>

                    <button type="button" className={`gear-detail-tab ${activeTab === "conditions" ? "is-active" : ""}`} role="tab" aria-selected={activeTab === "conditions"} onClick={() => setActiveTab("conditions")}>
                        <BookOpen size={14} strokeWidth={1.6} aria-hidden="true" />
                        <span>Uitleenvoorwaarden</span>
                    
                    </button>
                </div>

                {activeTab === "history" ? (
                    <div className="gear-detail-tab-panel" role="tabpanel">
                        <div className="gear-detail-history-header">
                            <div className="gear-detail-history-return">
                                <span className="gear-detail-eyebrow"> Laatste teruggebracht</span>
                                <h3>Toestand bij  terugkomst</h3>
                                <p>Er is nog geen retournotitie vastgelegd</p>
                            </div>
                            <div className="gear-detail-history-list">
                                <div className="gear-detail-history-heading">
                                    <h3>Eerdere uitleningen</h3>
                                    <span>0 uitleningen</span>
                                </div>
                                <p className="gear-detail-history-state">
                                    <Clock3 size={14} strokeWidth={1.6} aria-hidden="true" />
                                    <span>Er zijn nog geen uitleningen</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="gear-detail-tab-panel" role="tabpanel">
                        <div className="gear-detail-condition-list">
                            <p> <Check size={14} strokeWidth={1.8} aria-hidden="true" />
                                Voor deze uitrusting heb je geen training nodig
                            </p>
                            <p>
                                <Check size={14} strokeWidth={1.8} aria-hidden="true" />
                                Je mag deze uitrusting aan iedereen uitlenen
                            </p>
                            <p>
                                <Check size={14} strokeWidth={1.8} aria-hidden="true" />
                                Retour word vastgelegd door de lener of kwartiermeester
                            </p>
                            <p>
                                <Check size={14} strokeWidth={1.8} aria-hidden="true" />
                                De maximale uitleenperiode word door de gilde bepaald
                            </p>
                        </div>
                    </div>
                )}
            </section>
        )
}

export default GearDetailTabs;