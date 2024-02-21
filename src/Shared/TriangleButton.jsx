import { Button } from "@mui/material";

const TriangleButton = ({ value }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        position: "relative",
        overflow: "hidden",
        color: "rgb(22,45,100)",
        border: "1px solid rgb(22,45,100)",
        "&::before": {
          content: '""',
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 0,
          height: 0,
          borderTop: "20px solid transparent", // Adjust size and color of the triangle as needed
          borderLeft: "20px solid transparent",
          borderBottom: "20px solid rgb(22,45,100)",
        },
        "&:hover": {
          backgroundColor: "rgb(22,45,100) !important",
          color: 'white',
          "&::before": {
            borderBottomColor: "rgb(22,45,100) !important",
          },
        },
      }}
    >
      {value}
    </Button>
  );
};

export default TriangleButton;
