import { Link, useLoaderData } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid } from "@mui/material";
import TriangleButton from "../Shared/TriangleButton";

const ViewRecipes = () => {
  const chefsData = useLoaderData();

  return (
    <Box sx={{ margin: 10 }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {chefsData.map((chef) => (
          <Grid key={chef.id} item md={4} xs={12}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="450"
                  width="100%"
                  image={chef.chefPicture}
                  alt="cook"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {chef.chefName}
                  </Typography>
                  <Box>
                    <Box>
                      <Typography sx={{ color: "gray" }} variant="small">
                        Likes: {parseInt(chef.likes) / 1000}k
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ color: "gray" }} variant="small">
                        Total Recipes: {chef.totalRecipes}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/recipes/${chef.id}`}>
                  <TriangleButton value="View Recipes" />
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ViewRecipes;
