import React from "react";

function EnterComponent(props) {
  return (
    <div className="Enter">
      <div className="Title">
        <h1 className="IN">IN&nbsp;</h1>
        <h1 className="T">T</h1>
        <h1 className="ER">&nbsp;&nbsp;ER</h1>
      </div>
      <h2>Typeface carefully crafted for Computer Screens</h2>
      <button
        onClick={() => {
          localStorage.setItem("Start", true);
          props.setStart(true);
        }}
      >
        START EXPERIENCE
      </button>
      <div className="Ref">
        <div>
          <h3 className="test">
            Extra:{" "}
            <i>
              <b>Test Variable Font Here</b>
            </i>
          </h3>
          <h3 className="redkey">&nbsp; (WIP - Design to Website)</h3>
        </div>

        <div>
          <a href="/">https://inter-nid-mohnishlandge.vercel.app/</a>
        </div>
      </div>
    </div>
  );
}

export default EnterComponent;
