import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Detail from "./detail";
import CloseRoundedIcon from "@mui/icons-material/Cancel";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Link from "next/link";

export default function ReadDialog({ open, setOpen, title, count, url }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            width: "1000px",
            maxWidth: "100%",
          },
        }}
      >
        <DialogTitle>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link href={url} passHref>
              <a style={{ color: "black" }} target="_blank">
                <ArrowCircleRightIcon sx={{ transform: "rotate(-45deg)" }} />
              </a>
            </Link>
            <CloseRoundedIcon
              style={{ float: "right", cursor: "pointer" }}
              onClick={handleClose}
            />
          </div>
        </DialogTitle>
        <DialogContent>
          <Detail title={title} count={count} />
        </DialogContent>
      </Dialog>
    </>
  );
}
