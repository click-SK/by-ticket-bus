import React from 'react';

const DispalayDirectionData = ({dataRout, dataBus, dataDriver}) => {
    return (
        <div>
            <p>Rout name: {dataRout && dataRout.routName}</p>
            <p>Bus name: {dataBus && dataBus.nameBus}</p>
            <p>Driver name: {dataDriver && dataDriver.fullName}</p>
        </div>
    );
};

export default DispalayDirectionData;