import { useState } from "react";
import Button from "../components/ui/button/button";
import Modal from "../components/ui/modal/modal";
import ReportsForm from "../components/archive/reportsForm";


interface Report {
  id: string;
  region: string;
  departureDate: string;
  description: string;
  status: "draft" | "filed";
  writtenBy?: string;
}



function ArchivePage() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [reports, setReports] = useState<Report[]>([
    {
      id: "example-1",
      region: "Western Marsh",
      departureDate: "2026-03-12",
      description: "The Marsh Expedition",
      status: "filed",
      writtenBy: "Aragorn",
    },
    {
      id: "example-2",
      region: "Ford Valley",
      departureDate: "2026-03-18",
      description: "The Haunted Mill",
      status: "draft",
      writtenBy: "Legolas",
    },
  ]);

  function handleSaveReport(report: Report) {
    setReports((currentReports) => [
      ...currentReports,
      report,
    ]);

    closeModal();
  }

 

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Archive</h1>
          <p>Your Reports</p>
        </div>

        <Button onClick={openModal}>
          Add Report
        </Button>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        eyebrow="Archive"
        title="Report toevoegen"
      >
        <ReportsForm
          onCancel={closeModal}
          onSaved={handleSaveReport}
        />
      </Modal>

      <div className="reports">
        {reports.map((report) => (
          <div className="report-card" key={report.id}>
            <h3>{report.description}</h3>
            <p>Written by: {report.writtenBy ?? "You"}</p>
            <p>Region: {report.region}</p>
            <p>Departure: {report.departureDate}</p>
            <p>Status: {report.status}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ArchivePage;