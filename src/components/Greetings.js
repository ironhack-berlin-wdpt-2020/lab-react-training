import React, { Component } from "react";


// function component  ( only props )
function Greetings(props) {

  // props.lang ( de XOR fr )

  let greet = ""

  if (props.lang === "de") {
    greet = "Hallo"
  } else if (props.lang === "fr") {
    greet = "Bonjour"
  }

  return (
    <div className="IdCard box">
      {props.lang === "de" ? "Hallo" : "Bonjour"} {props.children}
    </div>
  )
}

export default Greetings;