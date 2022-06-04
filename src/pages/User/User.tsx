import { CancelOutlined, DoneOutlined, EditSharp } from "@mui/icons-material";
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
  Divider,
  Button,
  TextField,
} from "@mui/material";
import React, { Fragment, useState } from "react";
// import EditIcon from "@mui/icons-material/Edit";

const User = () => {
  //fake data supposed to be replaced by dynamic data get via Redux
  const [userInfos, setUserInfos] = useState({
    firstName: "Arthur",
    lastName: "Schoppenhauer",
    city: "Marseille",
    email: "lesangdelaveine@gmail.com",
  });

  const [userInfosCopy, setUserInfosCopy] = useState({
    firstName: userInfos.firstName,
    lastName: userInfos.lastName,
    city: userInfos.city,
    email: userInfos.email,
  });

  const [disabledInput, setDisabledInput] = useState<boolean>(true);
  const [editActivated, setEditActivated] = useState<boolean>(false);

  const editValues = () => {
    setDisabledInput(!disabledInput);
    setEditActivated(!editActivated);
  };

  const handleChangeValues = (event: any) => {
    setUserInfosCopy({
      ...userInfosCopy,
      [event.target.name]: event.target.value,
    });
  };

  const saveData = () => {
    if (userInfosCopy != userInfos) {
      setUserInfos(userInfosCopy);
      setDisabledInput(!disabledInput);
      setEditActivated(!editActivated);
    }
  };

  console.log("User Infos : ", userInfos, " User Infos Copy : ", userInfosCopy);

  const cancelEdit = () => {
    setUserInfosCopy(userInfos);
    setDisabledInput(!disabledInput);
    setEditActivated(!editActivated);
  };
  console.log("User Infos : ", userInfos, " User Infos Copy : ", userInfosCopy);

  return (
    <Container maxWidth="lg" className="user-page">
      <Grid
        container
        // spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 6, md: 8 }}
        alignItems="stretch"
      >
        <Grid item xs={12} sm={6} md={8}>
          <Card>
            <CardHeader
              avatar={
                <Avatar alt="test" src="" sx={{ width: 60, height: 60 }} />
              }
            ></CardHeader>
            <Divider></Divider>
            <CardContent>
              <Stack direction="row">
                <p className="field-label">Firstname</p>
                <TextField
                  name="firstName"
                  value={userInfosCopy.firstName}
                  variant="standard"
                  disabled={disabledInput}
                  onChange={handleChangeValues}
                />
              </Stack>
              <Stack direction="row">
                <p>Lastname</p>
                <TextField
                  name="lastName"
                  value={userInfosCopy.lastName}
                  variant="standard"
                  disabled={disabledInput}
                  onChange={handleChangeValues}
                />
              </Stack>
              <Stack direction="row">
                <p>Email</p>
                <TextField
                  name="email"
                  value={userInfosCopy.email}
                  variant="standard"
                  disabled={disabledInput}
                  onChange={handleChangeValues}
                />
              </Stack>
              <Stack direction="row">
                <p>Adress</p>
                <TextField
                  name="city"
                  value={userInfosCopy.city}
                  variant="standard"
                  disabled={disabledInput}
                  onChange={handleChangeValues}
                />
              </Stack>
              <Stack direction="row" className="button-stack">
                {!editActivated && (
                  <Button
                    variant="outlined"
                    startIcon={<EditSharp />}
                    size="small"
                    className="edit-button"
                    onClick={editValues}
                  >
                    <p>Edit</p>
                  </Button>
                )}
                {editActivated && (
                  <Fragment>
                    <Button
                      variant="outlined"
                      startIcon={<CancelOutlined />}
                      size="small"
                      className="cancel-button"
                      onClick={cancelEdit}
                    >
                      <p>Cancel</p>
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<DoneOutlined />}
                      size="small"
                      className="validate-button"
                      onClick={saveData}
                    >
                      <p>Validate</p>
                    </Button>
                  </Fragment>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default User;
function editValues() {
  throw new Error("Function not implemented.");
}
