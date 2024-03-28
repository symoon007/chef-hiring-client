import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import TriangleButton from "../Shared/TriangleButton";

const ViewSingleRecipe = () => {
  const singleRecipe = useLoaderData();
  const { chefName, chefPicture, totalRecipes, likes, yearOfExperience } =
    singleRecipe;
  console.log(singleRecipe);
  console.log(singleRecipe);

  return (
    <Box
      sx={{
        margin: 20,
        display: "flex",

        justifyContent: "center",
      }}
    >
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            width="500px"
            image={chefPicture}
            alt="cook"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {chefName}
            </Typography>
            <Box>
              <Box>
                <Typography sx={{ color: "gray" }} variant="small">
                  Likes: {parseInt(likes) / 1000}k
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "gray" }} variant="small">
                  Total Recipes: {totalRecipes}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "gray" }} variant="small">
                  Total Recipes: {yearOfExperience}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/recipes">
            <TriangleButton value=" Go Back Recipes" />
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ViewSingleRecipe;
