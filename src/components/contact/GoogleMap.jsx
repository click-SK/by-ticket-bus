import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    // Ініціалізація карти після завантаження компонента
    this.initMap();
  }

  initMap() {
    const map = new window.google.maps.Map(this.refs.map, {
      center: { lat: 50.4501, lng: 30.5234 }, // Координати Києва
      zoom: 15,
      styles: [
        {
          featureType: "all",
          stylers: [{ saturation: -100 }, { visibility: "simplified" }],
        },
        {
          featureType: "road",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ],
    });
    new window.google.maps.Marker({
      position: { lat: 50.4501, lng: 30.5234 }, // Координати офісу компанії
      map: map,
      title: "Company Location",
    });
  }

  render() {
    return <div ref="map" style={{ width: "100%", height: "100%" }} />;
  }
}

export default GoogleMap;
