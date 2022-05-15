import { Dispatch, SetStateAction, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, TextField } from '@mui/material';
import { Box } from '@mui/system';
import shallow from 'zustand/shallow';
import useMuiInput from 'src/hooks/useMuiInput';
import useStore from 'src/hooks/useStore';

const NameFilter = ({
  setNameFilter,
}: {
  setNameFilter: Dispatch<SetStateAction<boolean>>;
}) => {
  const [encounters, setFilteredEncounters, clearFilteredEncounters] = useStore(
    (state) => [
      state.encounters,
      state.setFilteredEncounters,
      state.clearFilteredEncounters,
    ],
    shallow,
  );

  const { value: nameValue, bind: bindName } = useMuiInput({
    initialValue: '',
    validate: () => true,
  });

  useEffect(() => {
    const newEncounters = encounters.filter(({ name }) =>
      name.includes(nameValue),
    );
    setFilteredEncounters(newEncounters);
  }, [encounters, nameValue, setFilteredEncounters]);

  return (
    <Box display="flex" alignItems="center">
      <TextField
        name="Name-filter"
        label="Name filter"
        {...bindName}
        InputLabelProps={{ shrink: true }}
      />
      <IconButton
        onClick={() => {
          clearFilteredEncounters();
          setNameFilter(false);
        }}
        sx={{ ml: 1 }}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

export default NameFilter;
