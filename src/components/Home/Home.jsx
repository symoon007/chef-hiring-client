import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import TriangleButton from "../../Shared/TriangleButton";

const Home = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} sx={styles.heroSection}>
        <Grid item md={6} xs={12}>
          <Box sx={styles.heroLeft}>
            <Typography variant="h7">Garlic&apos;s Special Chef</Typography>
            <Typography
              sx={{ marginTop: "10px", fontWeight: 400, marginBottom: "10px" }}
              variant="h2"
            >
              Indulge in the Finest Culinary Delights
            </Typography>
            <Typography variant="p" sx={{ fontFamily: "Helvetica" }}>
              Lorem, ipsum dolor sit amet consectetur <br />
              adipisicing elit. Nulla eligendi omnis magni <br />
              hic atque autem eos laborum perspiciatis. Eaque,
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} xs={12} sx={styles.heroRight}>
          <img width="100%" height="auto" src="/hero2.jpg" alt="Hero Image" />
        </Grid>
      </Grid>
      {/* hero section closed */}

      <Box sx={{ background: "#A9CCE3" }}>
        <Box sx={styles.culinarySection}>
          <Box>
            <Typography variant="h7">Culinary Specialities</Typography>
            <Typography variant="h4">
              Stay Up to Date with The Latest Food <br /> Trends, Recipes, and
              Cooking Techniques
            </Typography>
          </Box>
          <Box>
            <Link to="/view-recipes">
              <TriangleButton value="View Recipes" />
            </Link>
          </Box>
        </Box>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item md={4} xs={12}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/hero3.jpg"
                  alt="cook"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}></Grid>
          <Grid item md={4} xs={12}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;

const styles = {
  heroSection: {
    minHeight: "100vh",
    backgroundImage: `url(/bg-hero-2.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",

    "@media (max-width: 960px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      paddingLeft: "5%",
      paddingRight: "5%",
    },

    "@media (max-width: 600px)": {
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
    },

    "@media (min-width: 961px)": {
      padding: "20px 5%",
    },
  },
  heroLeft: {
    marginLeft: "5%",
    marginTop: "5%",
    padding: "20px",

    "@media (max-width: 600px)": {
      marginLeft: "0",
      marginTop: "80px",
      padding: "10px",
    },
  },
  heroRight: {
    marginTop: "10%",

    "@media (max-width: 600px)": {
      marginTop: "10px",
    },
  },
  culinarySection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "100px 80px",
    gap: "15px",

    "@media(max-width: 600px)": {
      flexDirection: "column",
      padding: "100px 10px",
      alignItems: "flex-start",
    },
  },
};
