import Button from "../components/ui/button/button";
import Modal from "../components/ui/modal/modal";
import GearForm from "../components/armory/gearForm";
import useModal from "../hooks/useModal";
import "./armoryPage.css";
import type { GearItem } from "../services/gearRepository";
import GearGrid from "../components/armory/gearGrid";

const dummyGear: GearItem[] = [
  {
    id: "1",
    name: "Rope",
    kind: "rope",
    condition: "good",
    dangerous: false,
    retired: false,
  },
  {
    id: "2",
    name: "Lantern",
    kind: "lantern",
    condition: "new",
    dangerous: false,
    retired: false,
  },
  {
    id: "3",
    name: "Sword",
    kind: "sword",
    condition: "worn",
    dangerous: true,
    retired: false,
  },
  {
    id: "4",
    name: "Shield",
    kind: "shield",
    condition: "damaged",
    dangerous: false,
    retired: true,
  }
]

function ArmoryPage() {
  const {
    isOpen,
    openModal,
    closeModal,
  } = useModal();
  return (
    <main className="armory-page">
      <header className="armory-header">
        <div className="top-title">
          <p className="modal-eyebrow">Armory</p>
          <h1>Uitrusting</h1>
        </div>
        <Button onClick={openModal}>
          Uitrusting toevoegen
        </Button>
      </header>

      <GearGrid items={dummyGear} />
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        eyebrow="Uitrusting"
        title="Uitrusting toevoegen"
      >
        <GearForm onCancel={closeModal} onSaved={closeModal} />
      </Modal>
    </main>
  )
}

export default ArmoryPage;