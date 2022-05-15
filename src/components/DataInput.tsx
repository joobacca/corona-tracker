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
import { flushSync } from 'react-dom';
import { formatLatLong } from 'src/utils/format';

const DataInput = () => {
  const { addNewEncounter } = useStore();
  const { currentLocation, error, getLocation } = useLocation();
  const { latitude, longitude } = currentLocation;

  const {
    value: name,
    reset: resetName,
    error: nameError,
    bind: bindName,
    setAllowValidation: validateName,
  } = useMuiInput({
    helperText: 'Please enter a valid name',
    initialValue: '',
    validate: (value: string) => !!value && /[a-zA-Z ]{2,99}/.test(value),
  });

  const {
    value: encounterDate,
    reset: resetDate,
    error: encounterDateError,
    bind: bindEncounterDate,
    setAllowValidation: validateDate,
  } = useMuiInput({
    type: 'datetime-local',
    helperText: 'Please enter a valid date',
    initialValue: '',
    validate: (value: string) => !!value && value.length > 0,
  });

  const reset = () => {
    resetName();
    resetDate();
  };

  const handleAddButtonClick = () => {
    flushSync(() => {
      validateName(true);
      validateDate(true);
    });
    if (nameError || encounterDateError) return;
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
            value={formatLatLong(latitude, longitude)}
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
