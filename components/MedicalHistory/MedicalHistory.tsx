import Breadcrum from "../Breadcrum/Breadcrum";
import { Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useState } from "react";
import styles from "./MedicalHistory.module.css";
import { medicalHistories } from "@/lib/data";
import CardMedicalHistory from "./CardMedicalHistory/CardMedicalHistory";
import Filter from "../Filter/Filter";
import FormMedicalHistory from "./FormMedicalHistory/FormMedicalHistory";

function MedicalHistory() {
  const [open, setOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [filteredMedicalHistories, setFilteredMedicalHistories] =
    useState(medicalHistories);
  const [selectedMedicalHistory, setSelectedMedicalHistory] = useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFilterChange = (text) => {
    setFilterText(text);
    const filteredData = medicalHistories.filter(
      (data) =>
        data.location.toLowerCase().includes(text.toLowerCase()) ||
        data.doctorName.toLowerCase().includes(text.toLowerCase()) ||
        data.diseaseName.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredMedicalHistories(filteredData);
  };

  const handleCardClick = (medicalHistory) => {
    setSelectedMedicalHistory(medicalHistory);
  };

  return (
    <div>
      <div className={styles.leftside}>
        <Breadcrum />
        <div className={styles.content}>
          <Filter onFilterChange={handleFilterChange} />
          <div className={styles.medicalHistoryCard}>
            {filteredMedicalHistories.map((data) => {
              return (
                <CardMedicalHistory
                  key={data.id}
                  location={data.location}
                  dateTime={data.dateTime}
                  diseaseName={data.diseaseName}
                  doctorName={data.doctorName}
                />
              );
            })}
          </div>
          <Button
            variant="outlined"
            style={{ alignSelf: "flex-end" }}
            onClick={handleClickOpen}
          >
            <AddRoundedIcon />
          </Button>
        </div>
        <FormMedicalHistory open={open} handleClose={handleClose} />
      </div>
    </div>
  );
}

export default MedicalHistory;
