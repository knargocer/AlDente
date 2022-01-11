import React from "react";
import "./UserCard.css";
import { Card } from "react-bootstrap";
// import ProfileCookGlobal from "../../containers/ProfileCookGlobal/ProfileCookGlobal";
// import { useHistory } from "react-router-dom";

export default function UserCard(props) {
  const user = props.user;
  // const history = useHistory();
  // const handleUserNameClick = () => {
  //   history.push("/" + user.username);
  // };

  if (user) {
    return (
      <Card className="globalCard">
        <Card.Body className="globalCardBody">
          <div className="headerCard">
            <Card.Title className="globalCardTitle">{user.username}</Card.Title>
            <Card.Text className="globalCardText globalCardEmphasis">
              Role: {user.role.charAt(0) + user.role.slice(1).toLowerCase()}{" "}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    );
  } else {
    return <></>;
  }
}
