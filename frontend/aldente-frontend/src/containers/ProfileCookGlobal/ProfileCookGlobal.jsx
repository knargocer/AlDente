// import React, { useEffect } from "react";
// import { Container, Card, Button, Form } from "react-bootstrap";
// import "./ProfileCookGlobal.css";
// import { useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Products from "../../components/Products/Products";
// import { getOrders } from "../../actions/order";

// import Chef from "./images/Chef.png";

// export default function ProfileCookGlobal(props) {
//   const history = useHistory();
//   const user = props.user;
//   console.log(user);

//   return (
//     <Container className="profilePageContainer">
//       <Container className="profileDetails">
//         <Card style={{ width: "18rem" }} className="profileCard">
//           <Card.Img className="profileImage" variant="top" src={Chef} />
//           <Card.Body>
//             <Card.Title>{user.username}</Card.Title>
//             <Card.Text></Card.Text>
//           </Card.Body>
//         </Card>
//       </Container>
//       <Container className="profileActivity">
//         <Container>
//           <Form.Label className="profileLabel">
//             Products by {user.username}
//           </Form.Label>
//         </Container>
//         <Products user={user} />
//         <Form.Label className="profileLabel">Orders Recieved</Form.Label>
//       </Container>
//     </Container>
//   );
// }
