import Sidebar from "@/components/Sidebar/Sidebar";
import { Grid } from "@mui/material";

export default function HealthIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { healthId: string };
}) {
  const { healthId } = params;

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={1.75}>
          <Sidebar healthId={healthId} />
        </Grid>
        <Grid item xs={10.25}>
          {children}
        </Grid>
      </Grid>
    </>
  );
}
