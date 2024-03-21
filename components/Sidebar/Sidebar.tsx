"use client";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useState } from "react";
import { SecondaryListItems, mainListItems } from "./listItem";

function Sidebar({ healthId }: { healthId: string }) {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      {/* <Drawer variant="permanent" open={open}> */}
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img style={{ width: "100px" }} src="/images/logo/medic.png" alt="" />
      </Toolbar>
      <Divider />
      <List component="nav">
        {mainListItems}
        <Divider sx={{ my: 1 }} />
        <SecondaryListItems healthId={healthId} />
      </List>
      {/* </Drawer> */}
    </div>
  );
}

export default Sidebar;
