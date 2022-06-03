import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

interface InfosProps {
  title: string;
  firstName: string;
  lastName: string;
  key: string;
  avatarUrl: string;
}

const UserCard = ({
  key,
  firstName,
  title,
  lastName,
  avatarUrl,
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
