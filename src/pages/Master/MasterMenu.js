import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Fragment } from 'react';
import TeamList from '../team/TeamList';
import ExcelUpload from '../ExcelUpload/ExcelUpload';
import FullRole from '../team/FullRole';

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

export default function MasterMenu() {
  const [value, setValue] = React.useState(0);
  const [profile, setprofile] = React.useState(false);
  const [role, setrole] = React.useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="User Management" {...a11yProps(0)} />
          <Tab label=" Bulk Customer Upload" {...a11yProps(1)} />
        { profile &&
          <Tab label="Profile Management" {...a11yProps(2)} />
        }
        { role &&
          <Tab label="Role Allocation" {...a11yProps(3)} />
        }
          
       
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Fragment>
        <TeamList />
       </Fragment>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <ExcelUpload />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
      <Fragment>
      <FullRole />
       </Fragment>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      
      </CustomTabPanel>
     
    </Box>
  );
}