import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import UserCard from "../../components/UserCard/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { setUserData, userInfosSlice } from "../../feature/userInfosSlice";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  // const dispatch = useDispatch();
  // const userData = useSelector((userInfos: any) => userInfos.userInfos);

  //states
  const [users, setUsers] = useState<any[]>([]);

  // we get the data and put them in a state.
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=20").then(
      (res) => setUsers(res.data.results)
      // (res) => dispatch(setUserData(res.data.results))
    );
  }, []);

  // const getUserInfo = (info: any) => {
  //   dispatch(setUserData(info));
  // };

  return (
    <Container maxWidth="lg" className="home-page">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="stretch"
      >
        {users.map((user: any, index: any) => (
          <Grid item xs={12} sm={4} md={3}>
            <Link
              to={"/" + index}
              state={{
                firstName: user.name.first,
                lastName: user.name.last,
                avatarUrl: user.picture.medium,
                email: user.email,
                city: user.location.city,
              }}
            >
              <UserCard
                index={index}
                key={user.name.last}
                title={user.name.title}
                firstName={user.name.first}
                lastName={user.name.last}
                avatarUrl={user.picture.medium}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
