import Container from "@mui/material/Container";
import "..//App.css";
import SearchAppBar from "../components/SearchAppBar";

import Typography  from "@mui/material/Typography";
import PermanentDrawerLeft from "../components/Navbar/PermanentDrawerLeft";

function Home() {
  return (
    <div className="App">
      <SearchAppBar />
      <PermanentDrawerLeft />

      <Container sx={{ marginY: 5, marginLeft: 5 }}>
        
          <Typography
            variant="h4"
            component="h2"
            marginTop={10}
            marginBottom={2}
            marginLeft={35}
          >
            This is the Home page
          </Typography>
        
      </Container>
    </div>
  );
}
export default Home;
