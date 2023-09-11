import React, {useEffect, useState} from 'react';
import { useTranslation } from "react-i18next";
import SelectBuses from './SelectBuses';
import SelectDrivers from './SelectDrivers';
import SelectRoutes from './SelectRoutes';
import DispalayDirectionData from './DispalayDirectionData';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import SelectDays from './SelectDays';
const Direction = () => {
    const [selectedRout, setSelectedRout] = useState(null);
    const [formatedSelectedRout, setFormatedSelectedRout] = useState(null);
    const [selectedBuses, setSelectedBuses] = useState(null);
    const [selectedDrivers, setSelectedDrivers] = useState(null);
    const [price, setPrice] = useState('');
    const [drivers, setDrivers] = useState([]);
    const [daysArray, setDaysArray] = useState([]);
    const [description, setDescription] = useState('');
    const { t } = useTranslation();

    const handleGenerateDirection = () => {
        if(selectedRout) {
            let newRout = selectedRout;
            newRout.allStops = newRout.allStops.map(stop => ({
                ...stop,
                price,
                daysWork: daysArray,
                childRouts: generateChildRouts(stop, selectedRout.allStops),
              }));
            newRout.timeStart = selectedRout.allStops[0].timeStart;
            newRout.timeEnd = selectedRout.allStops[selectedRout.allStops.length - 1].timeEnd;
            setFormatedSelectedRout(newRout);
            saveDb(newRout);
          }
    }

     function saveDb (newRout) {
        axios.post(`${API_URL}/create-directions`, {
            newRout,
            price,
            drivers,
            daysWork: daysArray,
            description
        }).then(() => {
            alert('succsess')
        })
    }

    console.log('daysArray',daysArray);
    
      function generateChildRouts(stop, allStops) {
        const startIndex = allStops.indexOf(stop);
        const childRouts = [];
      
        for (let i = startIndex + 1; i < allStops.length; i++) {
          let distance = 0;
          let duration = 0;
      
          // Сумування distance та duration між початковою та кінцевою точками
          for (let j = startIndex; j <= i; j++) {
            distance += allStops[j].distance;
            duration += allStops[j].duration;
      
            // Додати час стоянки, якщо це не остання зупинка
            // if (j < i - 1) {
            //   duration += parseInt(allStops[j + 1].timeStops, 10);
            // }
          }
      
          const endStop = allStops[i];
          const currentObj = allStops[i - 1]
          childRouts.push({
            start: stop.start,
            end: endStop.end,
            distance,
            duration,
            timeStart: stop.timeStart,
            timeEnd: endStop.timeEnd,
            timeStops: currentObj.timeStops,
            price,
            daysWork: daysArray
          });
        }
      
        return childRouts;
      }

    console.log('formatedSelectedRout',formatedSelectedRout);

    return (
        <div className='admin_content_wrap'>
            <h2>{t('Direction')}</h2>
            <div>
            <SelectBuses setSelectedBuses={setSelectedBuses}/>
            <SelectDrivers setSelectedDrivers={setSelectedDrivers} drivers={drivers} setDrivers={setDrivers}/>
            <SelectRoutes setSelectedRout={setSelectedRout}/>
            </div>
            <DispalayDirectionData 
            dataRout={selectedRout} 
            setDataRout={setSelectedRout} 
            dataBus={selectedBuses} 
            dataDriver={selectedDrivers} 
            price={price}
            drivers={drivers}
            setPrice={setPrice}
            setDrivers={setDrivers}/>
            <SelectDays setDays={setDaysArray} days={daysArray}/>
            <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}/>
            <div>
                <button 
                style={{background: 'black'}}
                onClick={handleGenerateDirection}>Generate direction</button>
            </div>
        </div>
    );
};

export default Direction;