export interface GearItem {
    id: string;
    name: string;
    kind: string;
    condition: string;
    dangerous: boolean;
    retired: boolean;
}

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