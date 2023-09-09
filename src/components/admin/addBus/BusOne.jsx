import React, {useState, useEffect} from "react";
import EditBus from "./EditBus";
const BusOne = ({ item }) => {
    const [isOpen, setisOpen] = useState(false);
    console.log('isopen',isOpen);
  return (
    <>
    <div className="table_info_item">
      <p className="colum row colum_name table_partner-item">{item.nameBus}</p>
      <p className="colum row colum_progres table_partner-item">
        {item.numberBus}
      </p>
      <p onClick={() => setisOpen(!isOpen)}>Edit</p>
    </div>
    {isOpen && <EditBus isOpen={isOpen} setisOpen={setisOpen} item={item}/>}
    </>
  );
};

export default BusOne;
