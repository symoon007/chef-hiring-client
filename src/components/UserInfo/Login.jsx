import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, TextField, Button, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail("");
    setPassword("");
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
          Login
        </Typography>

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

        <Box mt={4} display="flex" justifyContent="center">
          <Button
            sx={{
              width: "100%",
              backgroundColor: "rgb(22,45,100)",
            }}
            variant="contained"
            type="submit"
          >
            Login
          </Button>
        </Box>
        <Box sx={{ marginTop: "10px", fontFamily: "cursive" }}>
          <Typography variant="small">
            Don&apos;t have an account? <Link to="/register">Register</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
