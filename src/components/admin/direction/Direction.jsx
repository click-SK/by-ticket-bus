import React, {useState} from 'react';
import { useTranslation } from "react-i18next";
import SelectBuses from './SelectBuses';
import SelectDrivers from './SelectDrivers';
import SelectRoutes from './SelectRoutes';
import DispalayDirectionData from './DispalayDirectionData';
const Direction = () => {
    const [selectedRout, setSelectedRout] = useState(null);
    const [selectedBuses, setSelectedBuses] = useState(null);
    const [selectedDrivers, setSelectedDrivers] = useState(null);
    const { t } = useTranslation();

    return (
        <div className='admin_content_wrap'>
            <h2>{t('Direction')}</h2>
            <div>
            <SelectBuses setSelectedBuses={setSelectedBuses}/>
            <SelectDrivers setSelectedDrivers={setSelectedDrivers}/>
            <SelectRoutes setSelectedRout={setSelectedRout}/>
            </div>
            <DispalayDirectionData dataRout={selectedRout} dataBus={selectedBuses} dataDriver={selectedDrivers}/>
        </div>
    );
};

export default Direction;