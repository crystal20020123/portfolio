import { Box, Stack, Typography, ButtonBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

//Icons
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

//User
import User from "Assets/header/user.jpg";

//Data
import Navs from "Data/Header/Navs.data";

//Styles
import styles from "Styles/Header/Dialogs.styles";

const Drawers = ({ toggleDrawer }) => {
  return (
    <Box>
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <Box sx={{ flex: 1, mt: "5px" }}>
          {/* <Image src={User} width={60} height={40} alt="User" /> */}
        </Box>
        <ButtonBase onClick={toggleDrawer(false)} sx={styles.CrossButton}>
          <CloseRoundedIcon />
        </ButtonBase>
      </Stack>
      <Typography variant="body1" component="p" sx={styles.Description}>
        Dynamic and results-driven Full Stack Generative AI Developer and
        Machine Learning Engineer with 6years of experience in designing,
        developing, and deploying innovative AI solutions. Proficient in
        leveraging advanced machine learning algorithms and full-stack
        development technologies to create scalable applications that enhance
        user experience and drive business growth. Adept at collaborating with
        cross-functional teams to translate complex requirements into functional
        software, with a strong focus on performance optimization and code
        quality. Passionate about staying at the forefront of AI advancements
        and applying cutting-edge techniques to solve real-world problems. Feel
        free to customize the 5 with your years of experience or any specific
        technologies or frameworks you want to highlight.
      </Typography>
      <Box sx={styles.Navs}>
        {Navs &&
          Navs.map((nav, i) => (
            <Scroll
              key={i}
              activeClass="active"
              to={nav.Id}
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleDrawer(false)}
            >
              <ButtonBase sx={styles.Buttons}>{nav.name}</ButtonBase>
            </Scroll>
          ))}
      </Box>
      <Stack direction="row" sx={styles.Location}>
        <Box>
          <LocationOnIcon style={{ fontSize: "36px" }} />
        </Box>
        <Box>
          <Typography variant="h6" component="p">
            Kuala Lumpur, Malaysia
          </Typography>
        </Box>
      </Stack>
      <Stack direction="row" sx={styles.Address}>
        <Box>
          <Link href="mailto:mlpioneer122@gmail.com">
            <a>
              <EmailIcon style={{ fontSize: "36px" }} />
            </a>
          </Link>
        </Box>
        <Box>
          <Link href="https://t.me/tradingTitan_off">
            <a>
              <TelegramIcon style={{ fontSize: "36px" }} />
            </a>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default Drawers;
