import { Avatar, Card, CardContent, CardHeader } from "@mui/material";
import React from "react";

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
  console.log(avatarUrl);
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar alt="test" src={avatarUrl} sx={{ width: 56, height: 56 }} />
        }
      ></CardHeader>
      <CardContent>
        <p>
          {title} {firstName} {lastName}
        </p>
      </CardContent>
    </Card>
  );
};

export default UserCard;
