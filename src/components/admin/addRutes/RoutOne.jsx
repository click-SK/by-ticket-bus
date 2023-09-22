import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import {
  useJsApiLoader,
  GoogleMap,
  DirectionsRenderer,
} from '@react-google-maps/api';

const center = { lat: 49.2294024, lng: 28.470266 };
const googleMapsLibraries = ['places'];
const RoutOne = () => {
    const [routes, setRoutes] = useState([]);
    const [curentId, setCurrentId] = useState('');

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyBOWGA8hA02Dzp6svWFsxLAKGQ7CNgPMfM',
        libraries: googleMapsLibraries,
      });

    useEffect(() => {
        const url = window.location.href;
        const urlParts = url.split('/');

        // Останній елемент масиву буде ID, яке вам потрібно.
        const id = urlParts[urlParts.length - 1];
        setCurrentId(id);
    },[])

    console.log('curentId',curentId);

    useEffect(() => {
        if(curentId) {
            axios.get(`${API_URL}/get-one-rout/${curentId}`).then((res) => {
                console.log('res.data',res.data.routes);
                calculateRoutes(res.data.routes)
            }).catch((error) => {
              console.error('Request error:', error);
            });
        }
    },[curentId])

    const calculateRoutes = async (data) => {
  const directionsService = new window.google.maps.DirectionsService();
  const newRoutes = [];
  console.log('hello',data);
  for (const request of data) {
    console.log('iteration for directionsRequests request',request);
    const route = await directionsService.route(request);
    newRoutes.push(route);
    console.log('route',route);
  }
  setRoutes(newRoutes);
}

    console.log('one routes',routes);

    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            position: 'relative'
        }}
      >
        {isLoaded && routes.length != 0 && 
                <div style={{
                    position:'absolute',
                    left: '0',
                    top: '0',
                    width: '100%',
                    height: '100%'
                }} >
                  <GoogleMap
                    center={center}
                    zoom={15}
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                  >
                    {routes.map((route, index) => (
                      route && <DirectionsRenderer key={index} directions={route} />
                    ))}
                  </GoogleMap>
                </div>}
      </div>
    );
};

export default RoutOne;