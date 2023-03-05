import React from "react";
import TimelineView from "../components/TimelineView";
import { profileData } from "../config/ProfileConfig";

const Carrer = ({ id }) => {
  const { carrer } = profileData;
  return (
    <div  className="pageContainer">
      <div style={{ width: "100%" }}>
        <TimelineView data={carrer} />
      </div>
    </div>
  );
};
export default Carrer;
