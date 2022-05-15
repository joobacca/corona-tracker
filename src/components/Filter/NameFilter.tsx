import { Dispatch, SetStateAction, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, TextField } from '@mui/material';
import { Box } from '@mui/system';
import useMuiInput from 'src/hooks/useMuiInput';
import useStore from 'src/hooks/useStore';

const NameFilter = ({
  onClose,
}: {
  onClose: Dispatch<SetStateAction<boolean>>;
}) => {
  const setFilteredEncounters = useStore(
    (state) => state.setFilteredEncounters,
  );
  const encounters = useStore((state) => state.encounters);
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
      <IconButton onClick={() => onClose(false)} sx={{ ml: 1 }}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

export default NameFilter;
