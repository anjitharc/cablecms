import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Fragment } from 'react';

import CmplntList from './CmplntList';
import ClosedList from './ClosedList';
import ComplaintCtgry from './ComplaintCtgry';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ComplainrMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='card'>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="COMPLAINT LIST" {...a11yProps(0)} />
          <Tab label="CLOSED COMPLAINTS" {...a11yProps(1)} />
          <Tab label="COMPLAINT CATAGORY" {...a11yProps(2)} />
       
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Fragment>
       <CmplntList />
       </Fragment>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Fragment>
       <ClosedList />
       </Fragment>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ComplaintCtgry />
      </CustomTabPanel>
    </Box>
    </div>
  );
}