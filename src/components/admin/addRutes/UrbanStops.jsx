import React, { useEffect, useState, useRef } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import { useTranslation } from "react-i18next";
import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
  } from '@react-google-maps/api';
import '../../../style/addRoutes.scss'

const center = { lat: 49.2294024, lng: 28.470266 };
const googleMapsLibraries = ['places'];

const UrbanStops = () => {
    const [map, setMap] = useState(null);
    const [routes, setRoutes] = useState([]);
    const [routesOrigin, setRoutesOrigin] = useState([]);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const [inputBlocks, setInputBlocks] = useState([0]);
    const [markers, setMarkers] = useState([]);

    const originRef = useRef();
    const destinationRefs = useRef([]);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyBOWGA8hA02Dzp6svWFsxLAKGQ7CNgPMfM',
        libraries: googleMapsLibraries,
      });
    
      if (!isLoaded) {
        return 'Loading...';
      }

      const calculateRouteInput = async () => {
        const directionsService = new window.google.maps.DirectionsService();
        const directionsRequests = [];
    
        const origin = originRef.current.value;
        console.log('origin',origin);
        if (origin === '') {
          return;
        }
    
        let prevDestination = origin;
        console.log('prevDestination',prevDestination);
        console.log('directionsRequests',directionsRequests);
    
        if(inputBlocks.length != 0) {   
          for (let i = 0; i < inputBlocks.length; i++) {
            console.log('i',i);
            const destinationRef = destinationRefs.current[i];
            console.log('destinationRef',destinationRef);
            const destination = destinationRef.value;
            console.log('destination',destination);
            if (destination === '') {
              return alert('Write next places');
            }
      
            const request = {
              origin: prevDestination,
              destination,
              travelMode: window.google.maps.TravelMode.DRIVING,
            };
            console.log('request',request);
            directionsRequests.push(request);
      
            prevDestination = destination;
            console.log('prevDestination 2',prevDestination);
          }
        }
        console.log('after for prevDestination',prevDestination);
        console.log('after for directionsRequests',directionsRequests);
        if(directionsRequests.length != 0) {
          setRoutesOrigin(directionsRequests);
        }
    
    
        const newRoutes = [];
        let totalDistance = 0;
        let totalDuration = 0;
    
        for (const request of directionsRequests) {
          console.log('iteration for directionsRequests request',request);
          const route = await directionsService.route(request);
          newRoutes.push(route);
          console.log('route',route);
    
          const leg = route?.routes[0]?.legs[0];
          console.log('leg',leg);
          if (leg) {
            totalDistance += leg.distance.value;
            totalDuration += leg.duration.value;
          }
        }
    
        // Перетворюємо відстань та тривалість з метрів і секунд в більш зручний формат
        const totalDistanceInKm = (totalDistance / 1000).toFixed(2);
        const totalDurationInMinutes = (totalDuration / 60).toFixed(0);
    
        setRoutes(newRoutes);
        setDistance(`${totalDistanceInKm} km`);
        setDuration(`${totalDurationInMinutes} min`);
    
        console.log('newRoutes',newRoutes);
      };

      const clearRoute = () => {
        setRoutes([]);
        setDistance('');
        setDuration('');
        originRef.current.value = '';
    
        for (const ref of destinationRefs.current) {
          ref.value = '';
        }
      };
    
      const handleAddBlock = () => {
        setInputBlocks((prevBlocks) => [...prevBlocks, prevBlocks.length]);
      };
    
      const handleRemoveBlock = (index) => {
        const updatedRoutes = [...routes];
        updatedRoutes.splice(index, 1);
        setRoutes(updatedRoutes);
    
        setInputBlocks((prevBlocks) =>
          prevBlocks.filter((block) => block !== index)
        );
      };

      
  const handleSaveDb = () => {
    console.log('routesOrigin',routesOrigin);
    axios.post('http://localhost:4444/create-routes', {
      routes: routesOrigin
    }) .then(() => {
      alert('sucsses')
    })
  }

    return (
      <div className="content_wrap">
        <div className="one_block_wrap right_block-stops" >
          <h3 className="right_block-title">Add adress urban</h3>
          <p>Distance: {distance}</p>
          <p>Duration: {duration}</p>
          <div>
              <button onClick={handleAddBlock} style={{background: 'black', color: 'white'}}>Add route +</button>
            </div>
          <div style={{display: 'flex', flexDirection: 'column', position: 'relative'}}>
          <Autocomplete >
              <input
                type='text'
                placeholder={`Origin`}
                ref={originRef}
                style={{margin: '5px 0px',padding: '5px 25px'}}
              />
            </Autocomplete>
            {inputBlocks.map((block, index) => (
              <div key={index} style={{display: 'flex', gap: '10px'}}>
                <Autocomplete>
                  <input
                    type='text'
                    placeholder={`Destination ${index + 1}`}
                    ref={(ref) => (destinationRefs.current[index] = ref)}
                    style={{margin: '5px 0px', padding: '5px 25px'}}
                  />
                </Autocomplete>
                <button
                  className='btn_add_team'
                  onClick={() => handleRemoveBlock(index)}
                >
                  Remove -
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="one_block_wrap left_block-stops">
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            onLoad={(map) => setMap(map)}
          >
            {routes.length != 0 &&
              routes.map(
                (route, index) =>
                  route && <DirectionsRenderer key={index} directions={route} />
              )}
          </GoogleMap>
        </div>
      </div>
    );
};

export default UrbanStops;