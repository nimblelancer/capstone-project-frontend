import React, { useState } from "react";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';

function Tdee() {
    const [weight, setWeight] = useState<string>('');
    const [height, setHeight] = useState<string>('');
    const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState("0");
  const [activityLevel, setActivityLevel] = useState("0");
  const [tdee, setTdee] = useState("");
  const [bmi, setBmi] = useState("");
  const [status, setStatus] = useState("");
  const [range, setRange] = useState("");
  const [save, setSave] = useState(false);

  const SetStatusRange = (bmiValue) => {
    if (bmiValue < 18.5) {
      setStatus("Thiếu Cân");
      setRange("Dưới18.5");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setStatus("Khỏe mạnh");
      setRange("18.5–24.9");
    } else if (bmiValue > 25 && bmiValue < 29.9) {
      setStatus("Thừa Cân");
      setRange("25–29.9");
    } else if (bmiValue >= 30) {
      setStatus("Béo phì");
      setRange("Trên 30");
    }
  };

  function calculateTDEE(e) {
    e.preventDefault();
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);
    const ageValue = parseFloat(age);
    const bmiValue = (weightValue / Math.pow(heightValue / 100, 2)).toFixed(2);
    const bmr =
      gender === "0"
        ? 88.362 + 13.397 * weightValue + 4.799 * heightValue - 5.677 * ageValue
        : 447.593 + 9.247 * weightValue + 3.098 * heightValue - 4.33 * ageValue;
    const activityFactor = getActivityFactor(activityLevel);
    const tdeeValue = Math.round(bmr * activityFactor);
    setTdee(tdeeValue.toString());
    setBmi(bmiValue);
    SetStatusRange(bmiValue);
    setWeight("");
    setHeight("");
    setAge("");
    setGender("0");
    setActivityLevel("0");
  }

  function getActivityFactor(activityLevel) {
    switch (activityLevel) {
      case "0":
        return 1.2;
      case "1":
        return 1.375;
      case "2":
        return 1.55;
      case "3":
        return 1.725;
      case "4":
        return 1.9;
      default:
        return 1.2;
    }
  }

  const SaveTdee = () => {
    // Logic to save tdee and bmi, you can implement this based on your requirements
    // Example: save to localStorage, send to server, etc.
    setSave(true);
    alert("Save Success");
  };

  return (
    <div className="container" style={{ padding: "3.5rem",paddingBottom:"0 rem" }}>
      <h2 className="text-center mb-4" style={{ color: "#022559", fontSize: "2rem", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>
    HOW STRONG YOU ARE ?
</h2>

      <a className="tdee-button" type="button" href="#tdeeCal">
        <i className="fa-solid fa-film"></i>
      </a>
      <div className="tdee" id="tdeeCal">
      <form onSubmit={calculateTDEE} className="row gx-5 gy-4">
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        id="weight"
        label="Weight (kg)"
        variant="outlined"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        id="height"
        label="Height (cm)"
        variant="outlined"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        id="age"
        label="Age"
        variant="outlined"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <FormControl fullWidth variant="outlined">
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
          labelId="gender-label"
          id="gender"
          value={gender}
          label="Gender"
          onChange={(e) => setGender(e.target.value)}
        >
          <MenuItem value="0">Male</MenuItem>
          <MenuItem value="1">Female</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <FormControl fullWidth variant="outlined">
        <InputLabel id="activity-level-label">Activity Level</InputLabel>
        <Select
          labelId="activity-level-label"
          id="activityLevel"
          value={activityLevel}
          label="Activity Level"
          onChange={(e) => setActivityLevel(e.target.value)}
        >
          <MenuItem value="0">Sedentary (little to no exercise + work a desk job)</MenuItem>
          <MenuItem value="1">Lightly Active (light exercise 1-3 days / week)</MenuItem>
          <MenuItem value="2">Moderately Active (moderate exercise 3-5 days / week)</MenuItem>
          <MenuItem value="3">Very Active (heavy exercise 6-7 days / week)</MenuItem>
          <MenuItem value="4">Extremely Active (very heavy exercise, hard labor job, training 2x / day)</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12} className="text-center">
      <Button
        type="submit"
        color="success"
        style={{ width: '100%', fontSize: '1.6rem',backgroundColor: '#27a9e3',color: '#ffffff' }}
      >
        Calculate TDEE
      </Button>
    </Grid>
  </Grid>
</form>
      </div>

      {tdee && (
        <div className="tdee-result">
          <div className="" style={{ display: "flex", flexDirection: "column", width: "500px" }}>
            <h5 style={{ marginBottom: "16px" }}>
              The estimated TDEE or body weight maintenance energy requirement is{" "}
              <span style={{ color: "#198754" }}>{tdee}</span> Calories per day.
            </h5>
            <span style={{width:"100%",textAlign:"center"}}>
              BMI Score: <span style={{ color: "#198754" }}>{bmi} ({status})</span>, Healthy BMI Range: <span style={{ color: "#198754" }}>{range}</span> kg/m2
            </span>
          </div>
          <img src="/icons/bmi.png" alt="BMI scale" />
        </div>
      )}
    </div>
  );
}

export default Tdee;

