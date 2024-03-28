import { Box, TextField, Button, Typography, IconButton } from "@mui/material";
import { useContext, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setName("");
    setPhoto(null);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log("New User:", createdUser);
        toast.success("User created successfully!");
      })
      .catch((error) => {
        console.error("user creatin failed", error);
        toast.error("User creation failed!");
      });
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
            boxShadow: "0px 2px 5px rgba(25, 20, 40, 0.75)",
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
            type="file"
            onChange={handlePhotoChange}
            accept="image/*"
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
