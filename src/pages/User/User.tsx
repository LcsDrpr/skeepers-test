import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Input,
  Typography,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const User = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        // spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 6, md: 10 }}
        alignItems="stretch"
      >
        <Grid item xs={12} sm={6} md={12}>
          <Card>
            <CardHeader
              avatar={
                <Avatar alt="test" src="" sx={{ width: 60, height: 60 }} />
              }
            ></CardHeader>
            <CardContent>
              <Stack direction="row">
                <Typography>Firstname</Typography>{" "}
                <Input defaultValue="Prénom" />
              </Stack>
              <Stack direction="row">
                <Typography>Lastname</Typography>
                <Input defaultValue="Nom" />
              </Stack>
              <Stack direction="row">
                <Typography>email</Typography>
                <Input defaultValue="email" />
              </Stack>
              <Stack direction="row">
                <Typography>Adress</Typography>
                <Input defaultValue="city" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default User;
