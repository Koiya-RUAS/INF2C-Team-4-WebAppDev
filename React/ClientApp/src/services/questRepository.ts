export interface QuestMember {
  id: string;
  name: string;
  trained: boolean;
}

export interface QuestCreature {
  id: string;
  name: string;
  region: string;
  dangerous: boolean;
}

export interface QuestRequest {
  id: string;
  memberId: string;
  confirmed: boolean;
}

export interface Quest {
  id: string;
  leaderId: string;
  village: string;
  areaDescription: string;
  creatureId: string | null;
  departureDate: string;
  durationDays: number;
  partySize: number;
  cancelled: boolean;
  requests: QuestRequest[];
}

export interface QuestDetails {
  village: string;
  areaDescription: string;
  creatureId: string | null;
  departureDate: string;
  durationDays: number;
  partySize: number;
}

export const questMembers: QuestMember[] = [
  { id: "member-7", name: "7", trained: true },
  { id: "member-12", name: "12", trained: true },
  { id: "member-3", name: "3", trained: false },
  { id: "member-1", name: "1", trained: false },
  { id: "member-9", name: "9", trained: true },
];

export const questCreatures: QuestCreature[] = [
  { id: "zombie", name: "Zombie", region: "Swamp", dangerous: true },
  { id: "creeper", name: "Creeper", region: "Forest", dangerous: true },
  { id: "skeleton", name: "Skeleton", region: "Plains", dangerous: true },
  {
    id: "spider",
    name: "Spider",
    region: "Cave",
    dangerous: true,
  },
  {
    id: "enderman",
    name: "Enderman",
    region: "End",
    dangerous: true,
  },
];

const storageKey = "quests";

function dateFromNow(daysFromNow: number): string {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

function getExampleQuests(): Quest[] {
  return [
    {
      id: "quest-1",
      leaderId: "member-7",
      village: "Oak",
      areaDescription: "Zoek de zombie bij het moeras.",
      creatureId: "zombie",
      departureDate: dateFromNow(5),
      durationDays: 2,
      partySize: 4,
      cancelled: false,
      requests: [
        { id: "request-1", memberId: "member-12", confirmed: true },
        { id: "request-2", memberId: "member-9", confirmed: false },
      ],
    },
    {
      id: "quest-2",
      leaderId: "member-3",
      village: "Spruce",
      areaDescription: "Zoek de kist in de grot.",
      creatureId: null,
      departureDate: dateFromNow(10),
      durationDays: 3,
      partySize: 5,
      cancelled: false,
      requests: [{ id: "request-3", memberId: "member-1", confirmed: false }],
    },
  ];
}

function isQuest(value: unknown): value is Quest {
  if (typeof value !== "object" || value === null) return false;
  const quest = value as Partial<Quest>;
  return (
    typeof quest.id === "string" &&
    typeof quest.leaderId === "string" &&
    typeof quest.village === "string" &&
    typeof quest.areaDescription === "string" &&
    (typeof quest.creatureId === "string" || quest.creatureId === null) &&
    typeof quest.departureDate === "string" &&
    typeof quest.durationDays === "number" &&
    typeof quest.partySize === "number" &&
    typeof quest.cancelled === "boolean" &&
    Array.isArray(quest.requests) &&
    quest.requests.every(
      (request) =>
        typeof request.id === "string" &&
        typeof request.memberId === "string" &&
        typeof request.confirmed === "boolean",
    )
  );
}

export function getQuests(): Quest[] {
  const storedQuests = localStorage.getItem(storageKey);
  if (storedQuests === null) return getExampleQuests();

  const parsed: unknown = JSON.parse(storedQuests);
  if (!Array.isArray(parsed) || !parsed.every(isQuest)) {
    throw new Error("De opgeslagen questgegevens zijn ongeldig.");
  }

  const exampleQuests = getExampleQuests();
  let updatedExamples = false;
  const quests = parsed.map((quest) => {
    const example = exampleQuests.find(({ id }) => id === quest.id);
    if (!example) return quest;

    const updatedQuest = {
      ...quest,
      village: example.village,
      areaDescription: example.areaDescription,
      creatureId: example.creatureId,
    };
    if (
      quest.village !== updatedQuest.village ||
      quest.areaDescription !== updatedQuest.areaDescription ||
      quest.creatureId !== updatedQuest.creatureId
    ) {
      updatedExamples = true;
    }
    return updatedQuest;
  });

  if (updatedExamples) {
    localStorage.setItem(storageKey, JSON.stringify(quests));
  }
  return quests;
}

export function saveQuests(quests: Quest[]): void {
  localStorage.setItem(storageKey, JSON.stringify(quests));
}
