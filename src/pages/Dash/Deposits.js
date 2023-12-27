import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useEffect } from 'react';
import { Url } from '../../Global';
import { useState } from 'react';
import './dash.css'

function preventDefault(event) {
  event.preventDefault();
}


export default function Deposits() {


  const [dashdta ,dashdtachange] = useState();
  useEffect(() => {
    fetch(Url + "dashboard_datas")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        dashdtachange(resp.data.leadTot);     
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
   
    <React.Fragment>
      
      <Title><h3  className='title'>Total Leads</h3></Title>
      <Typography className='techmod' component="p" variant="h3">
   {dashdta}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
         
        </Link>
      </div>
    </React.Fragment>
  
  );
}