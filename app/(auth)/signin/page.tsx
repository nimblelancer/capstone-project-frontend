'use client';
// Import các thư viện và component cần thiết
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

// Tạo theme mặc định
const defaultTheme = createTheme();

// Component chính cho trang sign-in
export default function SignIn() {
  // State để lưu trữ dữ liệu nhập vào từ form
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  // Handler cho việc submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Gửi dữ liệu form đi (có thể gửi dữ liệu lên server ở đây)
    console.log(formData);
  };

  // Handler cho việc thay đổi giá trị của input
  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          
            <Avatar sx={{ m: 'auto', bgcolor: 'secondary.main', marginTop: '90px' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" align="center">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox name="rememberMe" color="primary" checked={formData.rememberMe} onChange={handleChange} />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
