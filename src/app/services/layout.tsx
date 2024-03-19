import PageHeader from "@/src/components/page-header/PageHeader";
import { Container } from "@mui/joy";
import React from "react";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <PageHeader
        background="/pages-headers/services.jpg"
        title="خــدمــاتــنــا"
      />
      <Container sx={{ my: 5 }}>{children}</Container>
    </div>
  );
}

export default layout;
