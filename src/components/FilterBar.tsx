import { Box, Button, Menu, MenuItem } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import React, { useState } from 'react';
import NameFilter from './Filter/NameFilter';

const FilterBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [nameFilterOn, setNameFilterOn] = useState(false);
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
      <Box>{nameFilterOn && <NameFilter onClose={setNameFilterOn} />}</Box>
      <Button onClick={handleClick} endIcon={<FilterListIcon />}>
        Filter
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {!nameFilterOn && (
          <MenuItem onClick={() => {
            setNameFilterOn(true);
            setAnchorEl(null);
          }}>Name</MenuItem>
        )}
        {nameFilterOn && <MenuItem>No filters available</MenuItem>}
      </Menu>
    </Box>
  );
};

export default FilterBar;
