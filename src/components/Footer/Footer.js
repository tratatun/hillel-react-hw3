import React from "react";

function Footer(props) {
    return (
      <footer style={{margin: '15px'}}>
        <p>{props.content}</p>
      </footer>
    )
  }
  

export default Footer;