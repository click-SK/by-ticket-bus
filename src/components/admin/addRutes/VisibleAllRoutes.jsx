import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import { Link } from 'react-router-dom';
const VisibleAllRoutes = () => {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/get-all-routes`).then((res) => {
            setRoutes(res.data)
        })
    },[])

  return (
    <>
      <div className="table_header  ">
        <p className="colum colum_name table_partner-item">Start point</p>
        <p className="colum table_partner-item">End Point</p>
      </div>
      {routes.length != 0 && routes.map((rout) => (
                <div key={rout._id}>
                    <Link to={`/rout/${rout._id}`} style={{color:'black'}}>{rout.startRout} - {rout.endRout} </Link>
                </div>
            ))}
    </>
  );
};

export default VisibleAllRoutes;
