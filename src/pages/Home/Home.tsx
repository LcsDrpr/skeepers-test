import React, { useEffect, useState } from "react";
import axios from "axios";
import { setEnvironmentData } from "worker_threads";

const Home = () => {
  //states
  const [users, setUsers] = useState([]);

  // we get the data and put them in a state.
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((res) => setUsers(res.data.results));
  }, []);

  console.log("DATA : ", users);

  return <div></div>;
};

export default Home;
