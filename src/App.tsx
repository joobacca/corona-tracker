import { Box, Container, CssBaseline, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BackgroundImage from './components/BackgroundImage';
import DataInput from './components/DataInput';
import DataTable from './components/DataTable';
import FilterBar from './components/Filter/FilterBar';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: '100vh',
          backgroundColor: 'grey',
          position: 'relative',
        }}
      >
        <BackgroundImage />
        <Container
          component="main"
          maxWidth="md"
          sx={{
            paddingTop: 8,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Typography component="h1" variant="h5">
              Corona Tracker
            </Typography>
            <DataInput />
            <hr style={{ margin: '1rem', width: '100%' }} />
            <FilterBar />
            <DataTable />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
