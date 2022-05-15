import { Box, Container, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BackgroundImage from './components/BackgroundImage';
import DataInput from './components/DataInput';
import DataTable from './components/DataTable';
import FilterBar from './components/FilterBar';

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
            paddingTop: 16,
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
