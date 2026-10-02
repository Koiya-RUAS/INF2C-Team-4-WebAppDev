import Button from "../ui/button/button";
import "./gearForm.css";

interface GearFormProps {
    onCancel: () => void;
}

function GearForm({ onCancel }: GearFormProps) {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Hier komt het opslaan logica
    }

    return (
        <form className="gear-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="gearName">Naam</label>
                <input type="text" id="gearName" name="name" placeholder="Naam van de uitrusting" required />
            </div>
            <div className="form-group">
                <label htmlFor="gearKind">Soort</label>
                <select id="gearKind" name="kind" defaultValue="" required>
                    <option value="">Kies een soort</option>
                    <option value="rope">Touw</option>
                    <option value="lantern">Lantaarn</option>
                    <option value="sword">Zwaard</option>
                    <option value="shield">Schild</option>
                    <option value="crossbow">Kruisboog</option>
                    <option value="lockpick">Sloten opener</option>
                    <option value="beartrap">Beerval</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="gearCondition">Toestand</label>
                <select id="gearCondition" name="condition" defaultValue="" required>
                    <option value="">Kies een toestand</option>
                    <option value="new">Nieuw</option>
                    <option value="good">Goed</option>
                    <option value="worn">Versleten</option>
                    <option value="damaged">Beschadigd</option>
                </select>
            </div>

            <fieldset className="checkbox-group">
                <legend>Eigenschappen</legend>

                <label className="checkbox-option" htmlFor="gearDangerous">
                    <input type="checkbox" id="gearDangerous" name="dangerous" />
                    Gevaarlijke uitruting
                </label>
                <p className="form-help">
                    Gevaarlijke uitrusting kan je alleen aan ervaren leden uitgeleend worden.
                </p>
            </fieldset>
            <div className="modal-actions">
                <Button type="submit">Opslaan</Button>
                <Button variant="secondary" onClick={onCancel}>Annuleren</Button>
            </div>
        </form>
    )
}

export default GearForm;