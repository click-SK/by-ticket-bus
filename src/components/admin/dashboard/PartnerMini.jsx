import React from 'react';

const PartnerMini = () => {
    return (
        <div className='admin_panel_items partner_wrap_content'>
            <h3 className='admin_panel_items-title'>Partner</h3>
            <div className='derection_table_wrap'>
                <div className='table_header  '>
                    <p className='colum colum_name table_partner-item'>Name</p>
                    <p className='colum table_partner-item'>Status</p>

                </div>
                <div className='table_body'>
                    <div className='table_info_item'> 
                        <p className='colum row colum_name table_partner-item'>Bussfor</p>
                        <p className='colum row colum_progres table_partner-item'> 
                        <img src="./image/admin/approved.svg" alt="" />
                        Approved</p>
                        
                    </div>
                    <div className='table_info_item'> 
                        <p className='colum row colum_name table_partner-item'>TicketWay</p>
                        <p className='colum row colum_progres table_partner-item'>
                        <img src="./image/admin/cancel.svg" alt="" />
                        Disabled</p>
                       
                    </div>
                    <div className='table_info_item'> 
                        <p className='colum row colum_name table_partner-item'>RoutesWorld</p>
                        <p className='colum row colum_progres table_partner-item'>
                        <img src="./image/admin/error.svg" alt="" />
                        error</p>
                    </div>
                    <div className='table_info_item'> 
                        <p className='colum row colum_name table_partner-item'>DerectSpace</p>
                        <p className='colum row colum_progres table_partner-item'> 
                        <img src="./image/admin/approved.svg" alt="" />
                        Approved</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerMini;