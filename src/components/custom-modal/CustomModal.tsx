import * as React from "react";
import Button from "@mui/joy/Button";

import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import { DialogContent, DialogTitle, ModalClose, Typography } from "@mui/joy";
interface Props {
  startDecorator?: any;
  btnText?: string;
  title?: string;
  subTitle?: string;
  children: React.ReactNode;
  btnColor?: "primary" | "danger" | "warning" | "neutral";
  btnVariant?: "soft" | "plain" | "solid" | "outlined";
  btnSize?: "sm" | "lg";
  customOpen?: boolean;
  customSetOpen?: Function;
  [x: string]: any;
}
export default function CustomModel({
  startDecorator,
  btnText,
  title,
  subTitle,
  btnColor = "neutral",
  btnVariant = "soft",
  btnSize = "sm",
  customOpen,
  customSetOpen,
  children,

  ...props
}: Props) {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      {!customSetOpen && (
        <Button
          variant={btnVariant}
          color={btnColor}
          size={btnSize}
          startDecorator={startDecorator}
          onClick={() => setOpen(true)}
        >
          {btnText}
        </Button>
      )}
      <Modal
        {...props}
        open={customOpen ? customOpen : open}
        keepMounted
        onClose={customOpen ? () => customSetOpen?.() : () => setOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ModalDialog {...props}>
          <ModalClose color="primary" variant="solid" />
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <Typography level="body-sm">{subTitle}</Typography>
          </DialogContent>
          {children}
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
