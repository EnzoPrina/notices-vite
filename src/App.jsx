import { Container, Grid, Typography } from "@mui/material";
import Formulario from "./components/Formulario";
import { NoticiasProvider } from "./context/NoticiasProvider";
import ListadoNoticias from "./components/ListadoNoticias";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
import Headers from './components/Headers'

function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <Headers/>
      <NoticiasProvider>
        <Container>
          <header>
            <Typography align="center" marginY={5} component="h1" variant="h3">
             {''}
            </Typography>
          </header>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6} lg={4}>
              <Formulario />
            </Grid>
          </Grid>
          <ListadoNoticias />
        </Container>
      </NoticiasProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
