import Sidebar from "@/components/Sidebar/Sidebar";
import { Grid } from "@mui/material";

export default function MainLayout({
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
