'use client'
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import { Container, Typography } from "@mui/material"; // Assuming you're using Material-UI for a more modern look

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30 bg-gray-100">
        <Container maxWidth="lg" style={{ marginTop: "40px" }}>
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Health Record",
              subtitle: "THE FUTURE OF MEDIC!",
              description: `At our website, we believe that every individual deserves access to reliable and up-to-date information about their health and well-being. Our mission is to empower you to take control of your health journey by providing comprehensive resources, expert advice, and a supportive community.`,
            }}
          />
        </Container>
      </section>
    </>
  );
};

export default Feature;
