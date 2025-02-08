import { Container } from "@mui/material";

//Components
import BottomFooter from "Components/Footer/BottomFooter";

const Footer = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      as="footer"
      sx={{ backgroundColor: "#efffff", padding: "20px" }}
    >
      <BottomFooter />
    </Container>
  );
};

export default Footer;
