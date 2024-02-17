import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "..//App.css";
import CourseCard from "../components/CourseCard";
import SearchAppBar from "../components/SearchAppBar";

import courseName from "../data.json";
import { Typography } from "@mui/material";
import PermanentDrawerLeft from "../components/Navbar/PermanentDrawerLeft";



function Learning() {
    return (
      <div className="App">
        <SearchAppBar  />
        <PermanentDrawerLeft />
       
        <Container sx={{ marginY: 5 , marginLeft:5}}>
          {courseName.map((courseType) => {
            return (
              <>
                <Typography
                  variant="h4"
                  component="h2"
                  marginTop={10}
                  marginBottom={2}
                  marginLeft={35}
                >
                  {courseType.name}  {/*name of the course array located in the data.json file  */}
  
                </Typography>
                <Grid  marginLeft={30}container spacing={2}>
                  {courseType.course_list.map((course, index) => {
                    return <CourseCard course={course} key={course.id} />;
                  })}
                </Grid>
              </>
            );
          })}
          
        </Container>
      </div>
    );
  }
  export default Learning;