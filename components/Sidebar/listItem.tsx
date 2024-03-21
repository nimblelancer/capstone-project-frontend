import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import DvrIcon from "@mui/icons-material/Dvr";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import Link from "next/link";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Your Profile" />
    </ListItemButton>
    <Link href={"/personalHealth"}>
      <ListItemButton>
        <ListItemIcon>
          <PermContactCalendarIcon />
        </ListItemIcon>
        <ListItemText primary="Personal Health" />
      </ListItemButton>
    </Link>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItemButton>
  </React.Fragment>
);

export const SecondaryListItems = ({ healthId }: { healthId: string }) => (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Your Personal Health
    </ListSubheader>
    <Link
      href={{
        pathname: `/personalHealth/${healthId}/overview`,
        // query: { healthId: healthId },
      }}
    >
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Overview" />
      </ListItemButton>
    </Link>
    <Link
      href={{
        pathname: `/personalHealth/${healthId}/medicalHistory`,
        // query: { healthId: healthId },
      }}
    >
      <ListItemButton>
        <ListItemIcon>
          <DvrIcon />
        </ListItemIcon>
        <ListItemText primary="Medical History" />
      </ListItemButton>
    </Link>
    <Link
      href={{
        pathname: `/personalHealth/${healthId}/vaccination`,
        // query: { healthId: healthId },
      }}
    >
      <ListItemButton>
        <ListItemIcon>
          <VaccinesIcon />
        </ListItemIcon>
        <ListItemText primary="Vaccination" />
      </ListItemButton>
    </Link>
    <Link
      href={{
        pathname: `/personalHealth/${healthId}/doctor`,
        // query: { healthId: healthId },
      }}
    >
      <ListItemButton>
        <ListItemIcon>
          <SelfImprovementIcon />
        </ListItemIcon>
        <ListItemText primary="Doctor" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
