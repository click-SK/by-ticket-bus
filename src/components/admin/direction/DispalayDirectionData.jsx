import React, {useState} from 'react';

const DispalayDirectionData = ({dataRout, setDataRout, dataBus, dataDriver, price, setPrice, drivers, setDrivers}) => {
    const [newDirection,setNewDirection] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState('');


    const handleChangeStarTime = (value, idx) => {
      // Клонуємо dataRout
      let newData = { ...dataRout };

      // Клонуємо allStops
      newData.allStops = [...newData.allStops];

      // Змінюємо потрібне поле
      newData.allStops[idx].timeStart = value;

      // Встановлюємо новий стан
      setDataRout(newData);
    };
    const handleChangeEndTime = (value, idx) => {
      // Клонуємо dataRout
      let newData = { ...dataRout };

      // Клонуємо allStops
      newData.allStops = [...newData.allStops];

      // Змінюємо потрібне поле
      newData.allStops[idx].timeEnd = value;

      // Встановлюємо новий стан
      setDataRout(newData);

    }
    const handleChangeStopTime = (value, idx) => {
      // Клонуємо dataRout
      let newData = { ...dataRout };

      // Клонуємо allStops
      newData.allStops = [...newData.allStops];

      // Змінюємо потрібне поле
      newData.allStops[idx].timeStops = value;

      // Встановлюємо новий стан
      setDataRout(newData);

    }

    // const handleChange = (e) => {
    //     const dateValue = e.target.value;
    //     setNewDirection(dateValue);
    
    //     // Розбиваємо дату на компоненти
    //     const [year, month, day] = dateValue.split('-');
    
    //     // Створюємо новий об'єкт Date (місяці починаються з 0)
    //     const date = new Date(year, month - 1, day);
    
    //     // Отримуємо день тижня (0 - неділя, 1 - понеділок, і т.д.)
    //     const dayIndex = date.getDay();
    
    //     // Отримуємо назву дня тижня
    //     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //     const dayName = days[dayIndex];
    
    //     setDayOfWeek(dayName);
    // };

    return (
        <div>
            {/* <p>Rout name: {dataRout && dataRout.routName}</p>
            <p>Bus name: {dataBus && dataBus.nameBus}</p>
            <div>Driver name: {drivers.map((item,idx) => (
                <p key={idx}>{item}</p>
            ))}</div> */}
            <div className='info-roads'>
                <p>All distance: {dataRout && dataRout.distanceAll}</p>
                <div className='road_price'>
                    <p>Price per kilometer</p>
                    <input
                    type='number'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}/>
                </div>
            </div>

            <div className='point_stops_wrap'>
                {dataRout && dataRout?.allStops.map((rout, idx) => (
                    <div key={rout._id} className='point_item'>
                        <div className='google_info-road'>
                            <p>From: {rout?.start}</p>
                            <p>To: {rout.end}</p>
                            <div>Google duration: {rout.duration} min</div>
                            <div>Google distance: {rout.distance} km</div>
                        </div>
                        <div className='wrap_time-stops'>
                            <div>
                                <p>Time start</p>
                                <input 
                                value={rout?.timeStart || "00:00"}
                                onChange={(e) => handleChangeStarTime(e.target.value, idx)}
                                type='time'/>
                            </div>
                            <div>
                                <p>Time end</p>
                                <input 
                                value={rout?.timeEnd || "00:00"}
                                onChange={(e) => handleChangeEndTime(e.target.value, idx)}
                                type='time'/>
                            </div>
                            <div>
                                <p>Time stop</p>
                                <input 
                                value={rout?.timeStops || 0}
                                onChange={(e) => handleChangeStopTime(e.target.value, idx)}
                                type='number'/>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default DispalayDirectionData;