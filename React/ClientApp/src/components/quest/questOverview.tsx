import "./questOverview.css";

const temporaryQuests = [
  {
    id: "quest-1",
    village: "Dorp 1",
    description: "Activiteit gemeld.",
    creature: "Wezen 1",
    biome: "Swamp",
    departureDate: "2026-10-14",
    durationDays: 2,
    partySize: 6,
    confirmedMembers: 3,
    leader: "Lid 7",
    dangerous: true,
  },
  {
    id: "quest-2",
    village: "Dorp 2",
    description: "Sporen gemeld.",
    creature: "Wezen 3",
    biome: "Forest",
    departureDate: "2026-10-17",
    durationDays: 4,
    partySize: 4,
    confirmedMembers: 2,
    leader: "Lid 12",
    dangerous: true,
  },
  {
    id: "quest-3",
    village: "Dorp 3",
    description: "Handelskar vermist.",
    creature: null,
    biome: null,
    departureDate: "2026-10-20",
    durationDays: 3,
    partySize: 8,
    confirmedMembers: 5,
    leader: "Lid 03",
    dangerous: false,
  },
];

function QuestOverview() {
  return (
    <section className="quest-overview" aria-labelledby="quest-overview-title">
      <div className="quest-overview-heading">
        <div>
          <p className="modal-eyebrow">Quest board</p>
          <h2 id="quest-overview-title">Beschikbare quests</h2>
        </div>
      </div>

      <div className="quest-grid">
        {temporaryQuests.map((quest) => (
          <article className="quest-card" key={quest.id}>
            <h3>{quest.village}</h3>
            <p>{quest.description}</p>

            {quest.creature && (
              <p>
                Wezen: {quest.creature} ({quest.biome})
              </p>
            )}
            <p>
              Vertrek:{" "}
              {new Intl.DateTimeFormat("nl-NL", {
                day: "numeric",
                month: "long",
              }).format(new Date(`${quest.departureDate}T00:00:00`))}
            </p>
            <p>Duur: {quest.durationDays} dagen</p>
            <p>
              Plekken: {quest.confirmedMembers} van {quest.partySize} bevestigd
            </p>
            <p>Leider: {quest.leader}</p>
            <p>
              Status:{" "}
              {quest.dangerous ? "Gevaarlijk wezen" : "Geen wezen bekend"}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default QuestOverview;
