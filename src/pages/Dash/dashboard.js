import {
  Box,
  Button,
  CardHeader,
  Container,
  Toolbar,
  colors,
} from "@material-ui/core";
import { Grid, Paper } from "@mui/material";
import React from "react";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import { Copyright } from "@mui/icons-material";
import { red } from "@material-ui/core/colors";
import Complaint from "./Complaint";
import "./dash.css" 

const dashboard = () => {
  const myStyle = {
    height: "100vh",
    marginTop: "-70px",
    fontSize: "20px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={myStyle}>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="xl" sx={{ mt: 2, mb: 1 }}>

          <Grid container spacing={3}>
            {/* Recent Deposits */}
<Grid item xs={12} md={4} lg={3}     
                        
              >
           
    <Paper className="csp" sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 150,
                  
                }}>
             
              
                <Deposits />
              </Paper>
            
          
           </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className="card2"
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 150,
                  
                }}
              >
                <Complaint />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className="card3"
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 150,
                  
                }}
              >
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className="card4"
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 150,
                                  
                }}
              
              >
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </div>
  );
};

export default dashboard;
