import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Logic for handling signup
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Bio:', bio);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { marginBottom: '1rem' },
      }}
      onSubmit={handleSignup}
    >
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        label="Subject"
        variant="outlined"
        fullWidth
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        multiline
        rows={8}
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <Button  variant="contained" type="submit" sx={{marginRight:"0",backgroundColor:'rgb(89,171,110)',height:'50px',fontWeight:'500',fontSize:'16px'}}>
        Let's Talk
      </Button>
    </Box>
  );
};

export default SignupForm;
