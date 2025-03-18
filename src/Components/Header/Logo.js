import { Box } from "@mui/material";
import Image from "next/image";
import { Link } from "react-scroll";

//User
import User from "Assets/header/user.jpg";

const Logo = () => {
  return (
    <Box
      sx={{
        mt: "2px",
        a: {
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        },
      }}
    >
      <Link to="home" spy={true} smooth={true} duration={500}>
        {/* <Image src={User} width={60} height={60} alt="User" /> */}
        <Box
          sx={{
            display: {
              xxs: "none",
              md: "block",
            },
          }}
        >
          <p
            style={{
              fontSize: "28px",
              fontWeight: 500,
              textDecoration: "underline",
            }}
          >
            John Foo
          </p>
        </Box>
      </Link>
    </Box>
  );
};

export default Logo;
