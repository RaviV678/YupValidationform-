import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import * as yup from 'yup';
// import axios from 'axios';
import { useFormik } from 'formik';
import {signUpSchema} from "./schemas"

const theme = createTheme();
const initialValues = {
  firstName:"",
  lastName:"",
  email:"",
  password:"",
  confirmpassword:"",
}

export default function SignUp() {

  //   const [inputVal , setInputval]=useState({firstName:'',lastName:"",email:'',password:''})
  //   const [error , setError]=useState({firstName:'',lastName:"",email:'',password:''})
  //   const handleInput = (e)=>{
  //       const {name,value}=e.target;
  //           setInputval({...inputVal,[name]:value})
            
            
  //   }

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(inputVal);
  //   const formError={}
  //   axios.post('http://localhost:8000/students',inputVal).then(()=>{
  //       alert('sucess full submit')
  //   })
    

  //   setError(formError)
  // };

const {values,errors,handleBlur,handleChange,handleSubmit}=useFormik({
  initialValues:initialValues,
  validationSchema:signUpSchema,
  onSubmit:(values)=>{
    console.log("data",values);

  }
});
console.log('ERRORS',errors);





  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
        <Box component="form" noValidate  onSubmit={handleSubmit}  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  label="First Name"
                  autoFocus
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
             <p style={{color:"red", fontSize: '1rem'}}>{errors.firstName}</p>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  name="lastName"
                  autoComplete="family-name"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              <p style={{color:"red", fontSize: '1rem'}}>{errors.lastName}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p style={{color:"red", fontSize: '1rem'}}>{errors.email}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
        <p style={{color:"red", fontSize: '1rem'}}>{errors.password}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  autoComplete="new-password"
                  value={values.confirmpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
        <p style={{color:"red", fontSize: '1rem'}}>{errors.confirmpassword}</p>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}