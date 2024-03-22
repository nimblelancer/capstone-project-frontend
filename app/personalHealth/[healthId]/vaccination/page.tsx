import Disease from "@/components/Disease/Disease";
import Vaccine from "@/components/Vaccine/Vaccine";
import { Grid } from "@mui/material";
import axios from "axios";

const getDiseases = async () => {
  try {
    const res = await axios.get("http://localhost:3055/api/disease");
    return res.data;
  } catch (error) {
    console.error("Error fetching diseases:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

const getVaccine = async () => {
  try {
    const res = await axios.get("http://localhost:3055/api/vaccination");
    return res.data;
  } catch (error) {
    console.error("Error fetching vaccination:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};
// const getDiseases = async () => {
//   const res = await fetch("http://localhost:3055/api/disease", {
//     next: { tags: ["disease"] },
//   });
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

async function page() {
  const diseases = await getDiseases();
  const vaccines = await getVaccine();
  console.log(diseases);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Disease diseases={diseases} />
        </Grid>
        <Grid item xs={8}>
          <Vaccine vaccines={vaccines} />
        </Grid>
      </Grid>
    </div>
  );
}

export default page;
