import { Box, Button, Menu, MenuItem } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import React, { useState } from 'react';
import NameFilter from './NameFilter';

const FilterBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [nameFilter, setNameFilter] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
    >
      <Box>{nameFilter && <NameFilter setNameFilter={setNameFilter} />}</Box>
      <Button onClick={handleClick} endIcon={<FilterListIcon />}>
        Filter
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {!nameFilter && (
          <MenuItem
            onClick={() => {
              setNameFilter(true);
              setAnchorEl(null);
            }}
          >
            Name
          </MenuItem>
        )}
        {nameFilter && <MenuItem>No filters available</MenuItem>}
      </Menu>
    </Box>
  );
};

export default FilterBar;
