import React from "react";
import "./Education.css";
import ArroyoMascot from "../../assets/arroyo_mascot.jpeg";
import HarvMascot from "../../assets/harvard_mascot.png";

function School(props) {
  return (
    <div
      className="school"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
        props.setMascotInfo("About the mascot: " + props.mascotInfo);
      }}
    >
      <div>
        <img src={props.pic} className="mascot-picture" />
      </div>
    </div>
  );
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = React.useState("");
  const [activeDescription, setActiveDescription] = React.useState("");
  const [mascotInfo, setMascotInfo] = React.useState("");

  return (
    <div className="screen-background">
      <div className="school-background">
        <div className="timeline-background">
          <School
            title="Arroyo High School"
            description="My young and innocent years. Class of 2018."
            mascotInfo="it is a 'Don', but no one really knew what that meant."
            pic={ArroyoMascot}
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
            setMascotInfo={setMascotInfo}
          />
          <School
            title="Harvard College"
            description="Might upgrade to a dropout? Maybe that woule be more cool, or class of
            2023?"
            pic={HarvMascot}
            mascotInfo="it's John Harvard, if that can even be a mascot..."
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
            setMascotInfo={setMascotInfo}
          />
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p>{activeDescription}</p>
          <p>{mascotInfo}</p>
        </div>
      </div>
    </div>
  );
}
