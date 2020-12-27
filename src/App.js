import "./App.css";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Posts from "./components/posts/Posts";
import Form from "./components/form/Form";

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar className="appBar" position="static" color="inherit">
        <Typography className="heading" variant="h2" align="center">
          Memories
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alighItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
