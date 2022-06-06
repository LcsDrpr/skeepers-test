import {
  ArrowBack,
  CancelOutlined,
  DoneOutlined,
  EditSharp,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Stack,
  Divider,
  Button,
  TextField,
} from "@mui/material";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";

// import { userInfos } from "../../feature/userInfosSlice";

const User = () => {
  //   const userData = useSelector((userInfos: any) => userInfos.userInfos);
  const location = useLocation();
  const navigate = useNavigate();

  const [userInfos, setUserInfos] = useState<any>(location.state);

  const [userInfosCopy, setUserInfosCopy] = useState({
    firstName: userInfos.firstName,
    lastName: userInfos.lastName,
    city: userInfos.city,
    email: userInfos.email,
    avatarUrl: userInfos.avatarUrl,
  });

  const [disabledInput, setDisabledInput] = useState<boolean>(true);
  const [editActivated, setEditActivated] = useState<boolean>(false);

  // function to activate the ability to modify textfields
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

  // function to save our changes in the data as it was persistent.
  const saveData = () => {
    if (userInfosCopy != userInfos) {
      setUserInfos(userInfosCopy);
      setDisabledInput(!disabledInput);
      setEditActivated(!editActivated);
    }
  };

  // function to cancel our changers. It put back the original data.
  const cancelEdit = () => {
    setUserInfosCopy(userInfos);
    setDisabledInput(!disabledInput);
    setEditActivated(!editActivated);
  };

  const goBack = () => {
    navigate("/", { replace: true });
  };

  return (
    <Container maxWidth="lg" className="user-page">
      <Grid
        container
        // spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 6, sm: 6, md: 8 }}
        alignItems="stretch"
      >
        <Stack>
          <Button
            variant="contained"
            startIcon={<ArrowBack />}
            size="small"
            className="back-button"
            onClick={goBack}
          >
            Back
          </Button>
        </Stack>
        <Grid item xs={12} sm={6} md={8}>
          <Card>
            <CardHeader
              avatar={
                <Avatar
                  alt="test"
                  src={userInfosCopy.avatarUrl}
                  sx={{ width: 60, height: 60 }}
                />
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
