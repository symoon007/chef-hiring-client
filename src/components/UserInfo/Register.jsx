import { Box, TextField, Button, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setName("");
    setPhoto(null);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          marginTop: "100px",
          backgroundColor: "white",
          padding: 4,
          borderRadius: 3,
          width: "70%",
          maxWidth: 400,
          border: "1px solid gray",
          "&:hover": {
            boxShadow: "0px 2px 10px rgba(25, 20, 40, 0.75)",
          },
        }}
      >
        <Typography variant="h4" align="center" sx={{ fontFamily: "serif" }}>
          Register
        </Typography>
        <Box mt={3}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
          />
        </Box>
        <Box mt={3}>
          <TextField
            // label="Photo"

            type="file"
            onChange={handlePhotoChange}
            fullWidth
          />
        </Box>
        <Box mt={3}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
        </Box>
        <Box mt={3}>
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            InputProps={{
              endAdornment: (
                <IconButton onClick={togglePasswordVisibility}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
        </Box>
        <Box mt={3}>
          <TextField
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            error={password !== confirmPassword}
            helperText={
              password !== confirmPassword ? "Passwords do not match" : ""
            }
            required
            InputProps={{
              endAdornment: (
                <IconButton onClick={togglePasswordVisibility}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
        </Box>
        <Box mt={4} display="flex" justifyContent="center">
          <Button
            sx={{ width: "100%", backgroundColor: "rgb(22,45,100)" }}
            variant="contained"
            type="submit"
          >
            Register
          </Button>
        </Box>
        <Box sx={{ marginTop: "10px", fontFamily: "cursive" }}>
          <Typography variant="small">
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
