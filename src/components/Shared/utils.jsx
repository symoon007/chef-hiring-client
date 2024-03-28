import { Button } from "@mui/material";
import { motion } from "framer-motion";

export const AnimatedButton = ({ value }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }} // Scale up the button on hover
      whileTap={{ scale: 0.9 }} // Scale down the button on tap
    >
      <Button variant="contained" color="primary">
        {value}
      </Button>
    </motion.div>
  );
};
