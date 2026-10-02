import Button from "../components/ui/button/button";
import Modal from "../components/ui/modal/modal";
import GearForm from "../components/armory/gearForm";
import useModal from "../hooks/useModal";
import "./armoryPage.css";

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
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        eyebrow="Uitrusting"
        title="Uitrusting toevoegen"
      >
        <GearForm onCancel={closeModal} />
      </Modal>
    </main>
  )
}

export default ArmoryPage;