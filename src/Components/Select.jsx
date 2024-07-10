import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, width:{xs:'100%',sm:'100%',md:'97%',lg:'97%'},marginTop:'0',marginLeft:{xs:'0',sm:'0',md:'13px',lg:'13px'} }}>
        <Select
          value={age}     
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" sx={{fontSize:'14px',fontWeight:'400',color:'RGB(33, 37, 41)'}}>
            <em style={{fontSize:'18px',fontWeight:'400',color:'RGB(33, 37, 41)'}}>Featured</em>
          </MenuItem>
          {/* <MenuItem value={10}>Featured</MenuItem> */}
          <MenuItem value={20}>A to Z </MenuItem>
          <MenuItem value={30}>Item</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
