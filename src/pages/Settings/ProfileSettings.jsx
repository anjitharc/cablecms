import { Container, Typography } from "@material-ui/core";
import { Box, Stack } from "@mui/material";
import { SettingsPassword } from "../../sections/settings/settings-password";
import React from "react";

const ProfileSettings = () => {
  return (
    <div>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <Typography
              variant="h4"
              style={{
                textAlign: "left",
                fontStyle: "normal",
                color: "GrayText",
                textShadow: "initial",
              }}
            >
              Profile Details
            </Typography>

           
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default ProfileSettings;
