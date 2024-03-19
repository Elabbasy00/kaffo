import ContactUs from "@/src/components/contact-us/ContactUs";
import PageHeader from "@/src/components/page-header/PageHeader";
import { Container } from "@mui/joy";
import React from "react";

function page() {
  return (
    <div>
      <PageHeader
        background="/pages-headers/contact.jpg"
        title="تـواصـل مـعـانـا"
      />
      <Container>
        <ContactUs />
      </Container>
    </div>
  );
}

export default page;
