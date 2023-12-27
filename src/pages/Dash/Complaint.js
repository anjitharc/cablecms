import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Url } from '../../Global';



function preventDefault(event) {
  event.preventDefault();
}

export default function Complaint() {

  const [cmpdashdta ,cmpdashdtachange] = React.useState();
  React.useEffect(() => {
    fetch(Url + "dashboard_datas")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        cmpdashdtachange(resp.data.complintsTot);     
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  return (
    <React.Fragment>
     
      <Title><h2 className='title'>Total Complaints</h2> </Title>
      <Typography className="techmod" component="p" variant="h3">
        {cmpdashdta}
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