import React, { useEffect, useState } from 'react';
import Ernings from './Ernings' 
import BalanceSalesCom from './BalanceSalesCom';
import Derection from './Direction';
import PartnerMini from './PartnerMini';
import TiketsMini from './TiketsMini';

const DashboardWrap = () => {

    const [isSales, setSales] = useState(true)

    return (
        <div className='admin_content_wrap'>
            <h2>Main Dashboard</h2>
            <div className='erning_sales_info_wrap'>
            <Ernings
                img = './image/admin/ernings.svg'
                sum = '350$'
                title = 'Ernings'
            />
            <Ernings
                img = './image/admin/month.svg'
                sum = '642$'
                title = 'Spend this month'
            />
            <BalanceSalesCom
                title = 'Sales'
                sum = '574$'
                isSales = {true}
            />
            <BalanceSalesCom
                title = 'Your balance'
                sum = '1000$'
                isSales = {false}
            />
            </div>
            <Derection/>
            <div className='partner_info_wrap'>
                <PartnerMini/>
                <TiketsMini/>
            </div>

        </div>
    );
};

export default DashboardWrap;