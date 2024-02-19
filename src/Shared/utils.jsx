import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  appbar: {
    transition: "all 0.3s ease-in-out",
    backdropFilter: "blur(10px)",
  },
  toolbar: {
    height: 80,
    transition: "all 0.3s ease-in-out",
  },
  toolbarScrolled: { height: 50 },
}));
