import React from 'react';

const SelectDays = ({setDays, days}) => {
    const handleAddDay = (value) => {
        if(days.includes(value)) {
            const newArr = days.filter((item) => item !== value);
            setDays(newArr);
        } else {
            setDays((state) => [...state,value])
        }
    }
    return (
        <div className='days_wrap-activs'>
            <div>
            <p>Sunday</p>
            <input
            type='checkbox'
            value={'Sunday'}
            onChange={(e) => handleAddDay(e.target.value)}/>
            </div>
            <div>
            <p>Monday</p>
            <input
            type='checkbox'
            value={'Monday'}
            onChange={(e) => handleAddDay(e.target.value)}/>
            </div>
            <div>
            <p>Tuesday</p>
            <input
            type='checkbox'
            value={'Tuesday'}
            onChange={(e) => handleAddDay(e.target.value)}/>
            </div>
            <div>
            <p>Wednesday</p>
            <input
            type='checkbox'
            value={'Wednesday'}
            onChange={(e) => handleAddDay(e.target.value)}/>
            </div>
            <div>
            <p>Thursday</p>
            <input
            type='checkbox'
            value={'Thursday'}
            onChange={(e) => handleAddDay(e.target.value)}/>
            </div>
            <div>
            <p>Friday</p>
            <input
            type='checkbox'
            value={'Friday'}
            onChange={(e) => handleAddDay(e.target.value)}/>
            </div>
            <div>
            <p>Saturday</p>
            <input
            type='checkbox'
            value={'Saturday'}
            onChange={(e) => handleAddDay(e.target.value)}/>
            </div>
        </div>
    );
};

export default SelectDays;