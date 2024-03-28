import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Box, Skeleton } from "@mui/material";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <Box
        sx={{
          bgcolor: "#121212",
          p: 8,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={210}
          height={118}
        />
      </Box>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={{ from: location }} to="/login" replace />;
  }
};

export default ProtectedRoutes;
