import { useState, type FormEvent, useEffect } from "react";
import Button from "../ui/button/button";
import "./questForm.css";

const temporaryCreatures = [
  { id: "marsh-wyvern", name: "Wezen 1", region: "Swamp", dangerous: true },
  {
    id: "mill-ghost",
    name: "Wezen 2",
    region: "Plains",
    dangerous: true,
  },
  {
    id: "forest-road-wolves",
    name: "Wezen 3",
    region: "Forest",
    dangerous: true,
  },
  {
    id: "northern-range-wolves",
    name: "Wezen 4",
    region: "Snowy Taiga",
    dangerous: true,
  },
  {
    id: "western-meadows-rabbit",
    name: "Wezen 5",
    region: "Meadow",
    dangerous: false,
  },
];

interface QuestFormProps {
  onCancel: () => void;
}

function QuestForm({ onCancel }: QuestFormProps) {
  const [hasCreature, setHasCreature] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [daysBetween, setDaysBetween] = useState<number | null>(null);

  useEffect(() => {
    if (!startDate || !endDate) {
      setDaysBetween(null);
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
      setDaysBetween(null);
      return;
    }

    const diff = Math.abs(end.getTime() - start.getTime());
    setDaysBetween(Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, [startDate, endDate]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className="quest-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="village-name">Dorp</label>
        <input type="text" id="village-name" name="village" required />
      </div>

      <div className="form-group">
        <label htmlFor="description-quest">Beschrijving gebied</label>
        <textarea
          id="description-quest"
          name="areaDescription"
          rows={3}
          required
        />
      </div>

      <fieldset className="checkbox-group">
        <legend>Bijzonderheden</legend>
        <label className="checkbox-option" htmlFor="creature">
          <input
            type="checkbox"
            id="creature"
            name="creature"
            checked={hasCreature}
            onChange={(event) => setHasCreature(event.target.checked)}
          />
          Is er een wezen aanwezig?
        </label>

        {hasCreature && (
          <div className="form-group creature-details">
            <label htmlFor="creature-choice">Wezen uit de bestiary</label>
            <select
              id="creature-choice"
              name="creature"
              defaultValue=""
              required
            >
              <option value="">Kies een wezen</option>
              {temporaryCreatures.map((creature) => (
                <option key={creature.id} value={creature.id}>
                  {creature.name} - {creature.region}
                  {creature.dangerous ? " (gevaarlijk)" : ""}
                </option>
              ))}
            </select>
          </div>
        )}
      </fieldset>

      <div className="date-fields">
        <div className="form-group">
          <label htmlFor="date-start">Vertrekdatum</label>
          <input
            type="date"
            id="date-start"
            name="date-start"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            max={endDate || undefined}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date-end">Einddatum</label>
          <input
            type="date"
            id="date-end"
            name="date-end"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            min={startDate || undefined}
            required
          />
        </div>
      </div>

      <div className="quest-end">
        <div className="form-group">
          <label htmlFor="days-quest">Aantal dagen</label>
          <output id="days-quest">
            {daysBetween !== null && (
              <div className="result">
                <h3>{daysBetween} dagen</h3>
              </div>
            )}
          </output>
        </div>
        <div className="form-group">
          <label htmlFor="positions-quest">Aantal plekken</label>
          <input
            type="number"
            id="positions-quest"
            name="partySize"
            min={1}
            required
          />
        </div>
      </div>

      <div className="modal-actions">
        <Button type="submit">Opslaan</Button>
        <Button type="button" variant="secondary" onClick={onCancel}>
          Annuleren
        </Button>
      </div>
    </form>
  );
}

export default QuestForm;
