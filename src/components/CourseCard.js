import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { AccessTime } from "@mui/icons-material";



const CourseCard = ({ course }) => {
  return (
    <Grid item xs={4}>
      <Paper elevation={3}>
        <img src={course.image} alt="image course" className="img" />
        <Box paddingx={1}>
          <Typography variant={"subtitle1"} component={"h2"}></Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            bgcolor: "primary.main",
            color: "white",
          }}
        >
          <AccessTime sx={{ width: 16.5 }} />
          <Typography variant={"body2"} component={"p"} marginLeft={0.5}>
            {course.duration} hours
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            bgcolor: "primary.main",
            color: "white",
          }}
        ></Box>
      </Paper>
    </Grid>
  );
};
export default CourseCard;
