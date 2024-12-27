import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { skills } from "./Componentdata.js";

function ProfileCard (props){
    return(
        <Card style={{ width: '24rem' }} className="card">
         <Avtar />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        < div className="Card-Text">
          <Intro />
          <Skillist />
        </div>
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Card>
    )
}

function Avtar(){
 return(
  <Card.Img variant="top" src="./Image/naveen.jpg" />
 )
}

function Intro(){
    return(
        <>
            <p>Live in ANUPGARH city of SGNR</p>
        </>
    );
}

function Skillist(){
    return(
      <div className="Skill-list">
       {skills.map((skill) =>(
        <Skill skill = {skill.skill} color = {skill.color} level = {skill.level} subject = {skill.subject}  key={skill.skill}/>
       ))}
      </div>
    );
}

function Skill({skill, subject, color, level}){
    return(
  <div className="skil" style={{backgroundColor:color}}>
  <span id="skill">{skill}</span>
  <span id="skill">{subject}</span>
  <span id="skill">{level === "strong" && "💪"}
  {level === "normal" && "🙂"}
  {level === "not known" && "👶"}
  </span>
  </div>
    )
}

export { ProfileCard };