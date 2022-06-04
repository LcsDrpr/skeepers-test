import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

interface InfosProps {
  title: string;
  firstName: string;
  lastName: string;
  key: string;
  avatarUrl: string;
  index: number;
}

const UserCard = ({
  key,
  firstName,
  title,
  lastName,
  avatarUrl,
  index,
}: InfosProps) => {
  const [newElevation, setNewElevation] = useState<number>(6);

  const onmouseover = () => {
    setNewElevation(2);
  };
  const onmouseleave = () => {
    setNewElevation(6);
  };

  return (
    <Card
      elevation={newElevation}
      onMouseOver={onmouseover}
      onMouseOut={onmouseleave}
      className="user-card"
    >
      <CardHeader
        avatar={
          <Avatar alt="test" src={avatarUrl} sx={{ width: 60, height: 60 }} />
        }
      ></CardHeader>
      <Divider></Divider>
      <CardContent>
        <Typography variant="h6">
          {title} {firstName} {lastName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
