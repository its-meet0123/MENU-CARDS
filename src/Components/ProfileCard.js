import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProfileCard (props){
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="UDAMYgit2/pizza/src/Images/sukh.jpg" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <Intro />
          <Skillist />
        </Card.Text>
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Card>
    )
}

function Avtar(){
 return(
    <img className="Card.Img" src="" alt="SATNAME SINGH"></img>
 )
}

function Intro(){
    return(
        <div>
            <p>We live in backward ariya</p>
        </div>
    );
}

function Skillist(){
    return(
      <div className="ListGroup-Item">
        <Skill name = '12th' emoji = '😎' id = "Non Medical" color = "#FB4141" />
        
        <Skill name ='B.sc Math' emoji ='🙂' id = 'Graduate' color = "#F26B0F" />
      
        <Skill name ='M.sc Math' emoji ="😌" id = 'Post Graduate' color = "#FA4032" />
      </div>
    );
}

function Skill(props){
    return(
  <div className="skil" style={{backgroundColor:props.color}}>
  <span>{props.id} in </span>
  <span>{props.name}</span>
  <span>{props.emoji}</span>
  </div>
    )
}

export { ProfileCard };