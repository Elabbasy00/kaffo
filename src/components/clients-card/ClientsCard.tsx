import { Avatar, Card, Typography } from "@mui/joy";
import React from "react";

function ClientsCard({ item }: { item: { image: string; name: string } }) {
  return (
    <Card
      variant="plain"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
      }}
    >
      <Avatar
        src={item.image}
        sx={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          textAlign: "center",
          background: "transparent",
        }}
      />
      <Typography textColor="neutral.solidBg" fontWeight="700">
        {item.name}
      </Typography>
    </Card>
  );
}

export default ClientsCard;
