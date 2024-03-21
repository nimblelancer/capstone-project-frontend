import React from "react";
import TextField from "@mui/material/TextField";

const Filter = ({ onFilterChange }) => {
  const handleChange = (event) => {
    const filterText = event.target.value;
    onFilterChange(filterText);
  };

  return (
    <TextField
      fullWidth
      label="Search"
      variant="outlined"
      onChange={handleChange}
    />
  );
};

export default Filter;
