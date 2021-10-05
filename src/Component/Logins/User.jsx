import React from "react";
import { Card, Button } from "react-bootstrap";

const User = ({ users }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
            fullname: {users.fullname}
            email:{users.email}
            password:{users.password}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
