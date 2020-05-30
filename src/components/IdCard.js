import React, { Component } from "react";


// function component  ( only props )
function IdCard(props) {

  // props.firstName props.lastName props.gender .......

  return (
    <div className="IdCard box">
      <img src={props.picture} alt={props.firstName + " " + props.lastName} />
      <div className="right">
        <strong>First name</strong>: {props.firstName} <br />
        <strong>Last name</strong>: {props.lastName} <br />
        <strong>Gender</strong>: {props.gender} <br />
        <strong>Height</strong>: {props.height + 1} cm <br />
        <strong>Birth</strong>: {String(props.birth).split(' ').splice(0, 4).join(' ')} <br />
      </div>
    </div>
  )
}

export default IdCard;