"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Breadcrum.module.css";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Breadcrum() {
  const pathName = usePathname();
  const startIndex = pathName.lastIndexOf("/") + 1;

  return (
    <div
      role="presentation"
      onClick={handleClick}
      style={{ alignSelf: "flex-start" }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/" className={styles.link}>
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home Page
        </Link>

        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="text.primary"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {pathName.substring(startIndex).charAt(0).toLocaleUpperCase() +
            pathName.substring(startIndex).slice(1)}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
