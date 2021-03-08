import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import addnewproject from "./addnewproject";
import "mdbreact/dist/css/mdb.css";

function Card(props) {
  return (
    <div >
      <MDBCol>
        <MDBCard className = "mx-auto cards card-size">
          <MDBCardImage className="img-fluid" src={props.image} waves />
          <MDBCardBody>
            <MDBCardTitle className="card-texts">{props.name}</MDBCardTitle>
            <MDBCardText className="card-texts"> {props.meaning}</MDBCardText>
            <MDBBtn href={props.website}>View Project</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
}

function createCard(addnewproject) {
  return (
    <Card
      key={addnewproject.key}
      name={addnewproject.name}
      image={addnewproject.image}
      meaning={addnewproject.meaning}
      website={addnewproject.website}
    />
  );
}

function ProjectEntry() {
  return <div className=" dictionary">{addnewproject.map(createCard)}</div>;
}

export default ProjectEntry;
