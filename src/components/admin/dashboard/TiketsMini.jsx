import React from 'react';

const TiketsMini = () => {
    return (
<div className='admin_panel_items partner_wrap_content'>
            <h3 className='admin_panel_items-title'>Tickets</h3>
            <div className='derection_table_wrap'>
                {/* <div className='table_header  '>
                    <p className='colum colum_name table_partner-item'>Name</p>
                    <p className='colum table_partner-item'>Status</p>

                </div> */}
                <div className='table_body'>
                    <div className='table_info_item'> 
                        <p className='colum row colum_name table_partner-item'>Sold</p>
                        <p className='colum row colum_progres table_partner-item'> 100 pci</p>
                        
                    </div>
                    <div className='table_info_item'> 
                        <p className='colum row colum_name table_partner-item'>Booked</p>
                        <p className='colum row colum_progres table_partner-item'> 173 pci</p>
                        
                    </div>
                    <div className='table_info_item'> 
                        <p className='colum row colum_name table_partner-item'>Free for sale</p>
                        <p className='colum row colum_progres table_partner-item'> 254 pci</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TiketsMini;