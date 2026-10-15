
import ropeImg from "../assets/rope.jpg";
import lanterImg from "../assets/lantern.jpg";
import swordImg from "../assets/sword.jpg";
import shieldImg from "../assets/shield.jpg";
export interface GearItem {
    id: string;
    name: string;
    kind: string;
    condition: string;
    description: string;
    dangerous: boolean;
    retired: boolean;
    loanedTo: String | null;
    imageUrl?: string;
}

export const dummyGear: GearItem[] = [
  {
    id: "1",
    name: "Rope",
    kind: "rope",
    condition: "good",
    description: "Een stevige touw dat gebruikt kan worden voor klimmen, binden of andere doeleinden. Het is gemaakt van duurzaam materiaal en kan aanzienlijke gewichten dragen.",
    dangerous: false,
    retired: false,
    loanedTo: null,
    imageUrl: ropeImg
  },
  {
    id: "2",
    name: "Lantern",
    kind: "lantern",
    condition: "new",
    description: "Een heldere lantaarn die gebruikt kan worden om donkere gebieden te verlichten. Het is gemaakt van hoogwaardig materiaal en heeft een lange levensduur.",
    dangerous: false,
    retired: false,
    loanedTo: null,
    imageUrl: lanterImg
  },
  {
    id: "3",
    name: "Sword",
    kind: "sword",
    condition: "worn",
    description: "Een scherp zwaard dat gebruikt kan worden voor gevechten en zelfverdediging. Het is gemaakt van hoogwaardig staal en heeft een comfortabele grip.",
    dangerous: true,
    retired: false,
    loanedTo: null,
    imageUrl: swordImg
  },
  {
    id: "4",
    name: "Shield",
    kind: "shield",
    condition: "damaged",
    description: "Een robuust schild dat gebruikt kan worden om aanvallen af te weren en bescherming te bieden. Het is gemaakt van duurzaam materiaal en heeft een comfortabele handgreep.",
    dangerous: false,
    retired: true,
    loanedTo: null,
    imageUrl: shieldImg
  } 
]

const storageKey = "gear";

export function getGearItems(): GearItem[] {
    const data = localStorage.getItem(storageKey);
    if (!data) {
        return [];
    }
    try {
        const items: unknown = JSON.parse(data);
        if (!Array.isArray(items)) {
            return [];
        }
        return items as GearItem[];
    } catch {
        return [];
    }
}

export function saveGearItem(item: GearItem): void {
    const items = getGearItems();
    localStorage.setItem(
        storageKey,
        JSON.stringify([...items, item])
    )
}


export function getGearById(id: string): GearItem | undefined{
    return getGearItems().find(item => item.id === id);
}