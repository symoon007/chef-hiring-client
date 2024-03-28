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
import TriangleButton from "../Shared/TriangleButton";
import { motion } from "framer-motion";
import { fadeIn, fadeOut } from "../Shared/varitens";

const Home = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} sx={styles.heroSection}>
        <Grid item md={6} xs={12}>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Box sx={styles.heroLeft}>
              <Typography variant="h7" sx={{ fontFamily: "cursive" }}>
                Garlic&apos;s Special Chef
              </Typography>
              <Typography
                sx={{
                  marginTop: "10px",
                  fontWeight: 400,
                  marginBottom: "10px",
                  fontFamily: "serif",
                }}
                variant="h2"
              >
                Indulge in the Finest Culinary Delights
              </Typography>
              <Typography
                variant="p"
                sx={{ fontFamily: "sans-serif", lineHeight: "25px" }}
              >
                Lorem, ipsum dolor sit amet consectetur <br />
                adipisicing elit. Nulla eligendi omnis magni <br />
                hic atque autem eos laborum perspiciatis. Eaque,
              </Typography>
            </Box>
          </motion.div>
        </Grid>
        <Grid item md={6} xs={12} sx={styles.heroRight}>
          <img width="100%" height="auto" src="/hero2.jpg" alt="Hero Image" />
        </Grid>
      </Grid>
      {/* hero section closed */}

      <Box sx={{ background: "#A9CCE3" }}>
        <Box sx={styles.culinarySection}>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.75 }}
          >
            <Box>
              <Typography variant="h7" sx={{ fontFamily: "cursive" }}>
                Culinary Specialities
              </Typography>
              <Typography variant="h4" sx={{ fontFamily: "serif" }}>
                Stay Up to Date with The Latest Food <br /> Trends, Recipes, and
                Cooking Techniques
              </Typography>
            </Box>
          </motion.div>

          <Box>
            <Link to="/recipes">
              <motion.div
                variants={fadeOut("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.75 }}
              >
                <TriangleButton value="Recipes" />
              </motion.div>
            </Link>
          </Box>
        </Box>

        <Grid
          container
          sx={{ padding: "5% 5% " }}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item md={4} xs={12}>
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="auto"
                    width="100%"
                    image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
                    alt="cook"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Mastering Culinary Techniques: Tips and Tricks from
                      Gulliver
                    </Typography>
                    <Box sx={styles.authorNdate}>
                      <Box>
                        <Typography sx={{ color: "gray" }} variant="small">
                          by jhon Moriss
                        </Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ color: "gray" }} variant="small">
                          Feb 12, 2024
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
          <Grid item md={4} xs={12} animate={{ x: 0 }}>
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="auto"
                    width="100%"
                    image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/health-benefits-of-fasting22-bd0b21d-scaled.jpg?webp=true&quality=90&resize=620%2C563"
                    alt="cook"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      animate={{ x: 0 }}
                    >
                      Farm-to-Table Delights: Celebrating Freshness and Seasonal
                      Ingredients
                    </Typography>
                    <Box sx={styles.authorNdate}>
                      <Box>
                        <Typography sx={{ color: "gray" }} variant="small">
                          by jhon Moriss
                        </Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ color: "gray" }} variant="small">
                          Feb 12, 2024
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
          <Grid item md={4} xs={12}>
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="auto"
                    width="100%"
                    image="https://images.immediate.co.uk/production/volatile/sites/30/2022/07/Healthy-kids-recipes-5e523cd.jpg?webp=true&quality=90&resize=620%2C563"
                    alt="cook"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Unleashing the Flavors: Exploring the Art of Gourmet
                      Fusion
                    </Typography>
                    <Box sx={styles.authorNdate}>
                      <Box>
                        <Typography sx={{ color: "gray" }} variant="small">
                          by jhon Moriss
                        </Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ color: "gray" }} variant="small">
                          Feb 12, 2024
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
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
  authorNdate: {
    marginTop: "10%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: "1rem",
  },
};
