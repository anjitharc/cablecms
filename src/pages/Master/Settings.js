
import { Box, Card, Container, Divider, Stack, Typography } from '@mui/material';
import { SettingsNotifications } from '../../sections/settings/settings-notifications';
import { SettingsPassword } from '../../sections/settings/settings-password';
import { Layout as DashboardLayout } from '../../layouts/dashboard/layout';


const Page = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography variant="h4" style={{textAlign:"left", fontStyle:"normal", color:"GrayText", textShadow:"initial" }}>
           Settings            
          </Typography>             
         <SettingsPassword />
       </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;