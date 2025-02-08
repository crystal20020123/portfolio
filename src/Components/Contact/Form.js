import { useState } from "react";
import {
  Box,
  Grid,
  InputBase,
  InputAdornment,
  ButtonBase,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

//Icons
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
import ErrorIcon from "@mui/icons-material/Error";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

//Styles
import styles from "Styles/Contact/Form.styles";

const public_key = "C40325bKcofwtsQBg";
const service_id = "service_8t08gwl";
const template_id = "template_4640nyd";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data, e) => {
    setLoading(true);
    emailjs.sendForm(service_id, template_id, e.target, public_key).then(
      () => {
        setLoading(false);
        setSuccess(true);
        setMessage("Email received! I will contact you soon.");
        reset();
      },
      () => {
        setLoading(false);
        setSuccess(false);
        setMessage("Something went wrong. Try again!");
      }
    );
  };

  return (
    <Box sx={{ mt: "3em" }} component="form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={{ md: 2, sm: 3, xxs: 2 }}>
        <Grid item md={4} lsm={6} xxs={12}>
          <InputBase
            placeholder="Email Address"
            endAdornment={
              <InputAdornment position="end">
                <Box sx={styles.Icon}>
                  <MailOutlineIcon />
                </Box>
              </InputAdornment>
            }
            sx={styles.InputField}
            {...register(
              "email",
              {
                required: "Please enter an email addreess!",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "The email you enter is invalid email!",
                },
              },
              { required: true }
            )}
          />
          {errors.email && (
            <Typography variant="body1" component="p" sx={styles.ErrorMessage}>
              <ErrorIcon />
              {errors.email.message}
            </Typography>
          )}
        </Grid>
        <Grid item md={4} lsm={6} xxs={12}>
          <InputBase
            placeholder="Write Message"
            sx={styles.MessageFiled}
            {...register(
              "message",
              {
                required: "Please add your message!",
                minLength: {
                  value: 10,
                  message: "Message should not be less than 10 characters!",
                },
                maxLength: {
                  value: 1000,
                  message: "Message should not be more than 1000 characters!",
                },
              },
              { required: true }
            )}
          />
          {errors.message && (
            <Typography variant="body1" component="p" sx={styles.ErrorMessage}>
              <ErrorIcon />
              {errors.message.message}
            </Typography>
          )}
        </Grid>
        <Grid item md={4} lsm={6} xxs={12}>
          <Box>
            <ButtonBase
              type="submit"
              sx={{
                ...styles.SubmitButton,
                backgroundColor: `${
                  success ? "primary.success" : "primary.main"
                }`,
              }}
            >
              {!loading && !message && (
                <>
                  Send Message
                  <ArrowForwardTwoToneIcon className="css-svg-icon" />
                </>
              )}
              {loading && (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress
                    sx={{ color: "background.default" }}
                    size={22}
                  />
                </Box>
              )}
              {message && !loading && (
                <>
                  {success && (
                    <Box>
                      <DoneIcon sx={{ fontSize: "35px" }} />
                    </Box>
                  )}
                  {!success && (
                    <Box>
                      <CloseIcon sx={{ fontSize: "35px" }} />
                    </Box>
                  )}
                </>
              )}
            </ButtonBase>
          </Box>
          <Typography
            variant="body1"
            component="p"
            sx={{
              ...styles.SendText,
              color: `${success ? "primary.success" : "primary.main"}`,
            }}
          >
            {message}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
