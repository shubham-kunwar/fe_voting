import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SignIn from '../SingIn/SignIn';
import SignUp from '../SignUp/SignUp';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar/Navbar';

const defaultTheme = createTheme();

function HomePage() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div>
      <Navbar/>
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                'url(https://media.getmyuni.com/reviews/24281__3500/1477107972main_img_1.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRight: '1px solid #ccc',
              margin: 0,
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 2,
                mx: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} style={{ marginTop: '40px' }}>
                <LockOutlinedIcon />
              </Avatar>
              {showSignUp ? (
                <SignUp handleShowSignUp={setShowSignUp} />
              ) : (
                <SignIn setShowSignUp={setShowSignUp} />
              )}
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default HomePage;
