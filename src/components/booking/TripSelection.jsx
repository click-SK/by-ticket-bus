import React from "react";
import { CgEditBlackPoint } from "react-icons/cg";
import { HiLocationMarker } from "react-icons/hi";

const TripSelection = () => {
  return (
    <div className="direct_way">
      <div className="direct_stop direct_stop-start">
        <p className="time_stop">6:54 am</p>
        <CgEditBlackPoint />
        <p className="city_stop">City</p>
      </div>
      <div className="direct_stop direct_stop-second">
        <p className="time_stop">8:05 pm</p>
        <CgEditBlackPoint />
        <p className="city_stop">City</p>
      </div>
      <div className="direct_stop direct_stop-second">
        <p className="time_stop">6:54 am</p>
        <CgEditBlackPoint />
        <p className="city_stop">City</p>
      </div>
      <div className="direct_stop direct_stop-end">
        <p className="time_stop">10:54 am</p>
        <HiLocationMarker />
        <p className="city_stop">City</p>
      </div>
    </div>
  );
};

export default TripSelection;
