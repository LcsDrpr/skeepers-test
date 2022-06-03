import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container } from "@mui/system";
import { Grid } from "@mui/material";
import UserCard from "../../components/UserCard/UserCard";

const Home = () => {
  //states
  const [users, setUsers] = useState<any[]>([]);

  // we get the data and put them in a state.
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((res) => setUsers(res.data.results));
  }, []);

  console.log("DATA : ", users);

  return (
    <Container maxWidth="lg">
      {/* <Box> */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="stretch"
      >
        {users.map((user, index) => (
          <Grid item xs={12} sm={4} md={3}>
            {/* <p>{user.email}</p> */}
            <UserCard
              key={user.name.last}
              title={user.name.title}
              firstName={user.name.first}
              lastName={user.name.last}
              avatarUrl={user.picture.medium}
            />
          </Grid>
        ))}
      </Grid>
      {/* </Box> */}
    </Container>
  );
};

export default Home;
