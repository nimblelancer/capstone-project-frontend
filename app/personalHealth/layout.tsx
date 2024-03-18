import Sidebar from "@/component/Sidebar/Sidebar";
import { Grid } from "@mui/material";

export default function PersonalHealthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={1.75}>
          <Sidebar />
        </Grid>
        <Grid item xs={10.25}>
          {children}
        </Grid>
      </Grid>
    </>
  );
}
