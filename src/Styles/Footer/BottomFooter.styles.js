const styles = {
  Location: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  Address: {
    mt: "15px",
    gap: "20px",
    alignItems: "center",
    svg: {
      fontSize: "30px",
      mr: "5px",
    },
    "& p": {
      fontSize: "15px",
      fontWeight: 500,
    },
    a: {
      textDecoration: "none",
      color: "text.primary",
      transition: "0.2s ease",
      "& p": {
        fontSize: "15px",
        fontWeight: 500,
      },
      "&:hover": {
        color: "primary.main",
      },
    },
  },
  Copyright: {
    flex: 1,
    fontWeight: 500,
    textAlign: {
      sm: "unset",
      xxs: "center",
    },
  },
};

export default styles;
