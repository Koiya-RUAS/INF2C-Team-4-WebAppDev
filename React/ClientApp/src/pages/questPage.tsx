import Button from "../components/ui/button/button";
import Modal from "../components/ui/modal/modal";
import QuestForm from "../components/quest/questForm";
import QuestOverview from "../components/quest/questOverview";
import useModal from "../hooks/useModal";
import "./questPage.css";

function QuestPage() {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <main className="quest-page">
      <header className="quest-header">
        <div className="top-title">
          <h1>Quest board</h1>
        </div>
        <Button onClick={openModal}>Quest toevoegen</Button>
      </header>
      <QuestOverview />
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        eyebrow="Quest"
        title="Quest toevoegen"
      >
        <QuestForm onCancel={closeModal} />
      </Modal>
    </main>
  );
}

export default QuestPage;
