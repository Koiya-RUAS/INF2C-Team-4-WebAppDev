import type React from "react";
import Button from "../ui/button/button";
import "../archive/reportsForm.css"

interface Report {
    id: string;
    region: string;
    departureDate: string;
    description: string;
    status: "draft";
}

interface ReportFromProps {
    onCancel: () => void;
    onSaved: (report: Report) => void;
}

function ReportsForm({ onCancel, onSaved }: ReportFromProps) {
    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const report: Report = {
            id: crypto.randomUUID(),
            region: String(formData.get("region")).trim(),
            departureDate: String(formData.get("departureDate")),
            description: String(formData.get("description")).trim(),
            status: "draft",
        };

        onSaved(report);

        event.currentTarget.reset();
    }
    return (
        <div className="report-form-overlay">
            <form className="report-form" onSubmit={handleSubmit}>

                <div className="report-form-header">
                    <div>
                        <span className="report-form-label">RAPPORT</span>
                        <h2>Rapport toevoegen</h2>
                    </div>
                </div>

                 
                <div className="form-group">
                    <label htmlFor="reportRegion">Region</label>
                    <input
                        type="text"
                        id="reportRegion"
                        name="region"
                        placeholder="Region van de expeditie"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="departureDate">Dag van vertrek</label>
                    <input
                        type="date"
                        id="departureDate"
                        name="departureDate"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="reportDescription">Wat gebeurde er?</label>
                    <textarea
                        id="reportDescription"
                        name="description"
                        placeholder="Beschrijf wat er tijdens de expeditie gebeurde..."
                        required
                    />
                </div>

                <div className="modal-actions">
                    <Button type="submit">Draft Opslaan</Button>

                    <Button
                        type="button"
                        variant="secondary"
                        onClick={onCancel}
                    >
                        Annuleren
                    </Button>
                </div>
            </form>
        </div>

    );
}

export default ReportsForm



