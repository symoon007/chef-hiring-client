import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, TextField, Button, Typography, IconButton } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathnem || "/recipes";

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail("");
    setPassword("");
    //user sign In
    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log("User logged in", loggedInUser);
        toast.success("Logged In Successfully!");
        navigate(from, { replace : true });
      })
      .catch((error) => {
        console.error("Login Failed", error);
        toast.error("Login failed! Invalid email or password.");
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
