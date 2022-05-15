import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import useStore from 'src/hooks/useStore';
import useLocation from 'src/hooks/useLocation';
import useMuiInput from 'src/hooks/useMuiInput';

const DataInput = () => {
  const { addNewEncounter } = useStore();
  const { currentLocation, error, getLocation } = useLocation();
  const { latitude, longitude } = currentLocation;

  const {
    value: name,
    setValue: setName,
    bind: bindName,
  } = useMuiInput({
    helperText: "Name can't be empty",
    initialValue: '',
    validate: (value: string) => value && value.length > 0,
  });

  const {
    value: encounterDate,
    setValue: setEncounterDate,
    bind: bindEncounterDate,
  } = useMuiInput({
    type: 'datetime-local',
    initialValue: '',
    validate: (value: string) => value && value.length > 0,
  });

  const reset = () => {
    setName('');
    setEncounterDate('');
  };

  const handleAddButtonClick = () => {
    if (name === '' || encounterDate === '') return;
    addNewEncounter({
      name,
      encounterDate,
      location: currentLocation,
    });
    reset();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <FormControl sx={{ m: 1 }}>
          <TextField name="Name" label="Name" {...bindName} />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl sx={{ m: 1 }}>
          <TextField
            label="Encounter date"
            InputLabelProps={{
              shrink: true,
            }}
            {...bindEncounterDate}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6} md={3}>
        <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="location">Location</InputLabel>
          <OutlinedInput
            id="location"
            type="text"
            label="Location"
            value={
              latitude !== -1 && longitude !== -1
                ? `${latitude}, ${longitude}`
                : ''
            }
            error={!!error}
            disabled
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  sx={{ m: 1, mr: 0 }}
                  onClick={getLocation}
                  aria-label="get-location"
                >
                  <MyLocationIcon />
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText error>{error}</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={6} md={1}>
        <FormControl sx={{ m: 1 }}>
          <Button
            onClick={handleAddButtonClick}
            variant="contained"
            sx={{ m: 1 }}
          >
            Add
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default DataInput;
