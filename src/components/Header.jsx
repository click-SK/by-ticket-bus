import React from 'react';
import '../style/header.scss'

const Header = () => {
    return (
        <div>
            <div className='change_color_wrapper'>
                <div className='color-1'>1</div>
                <div className='color-2'>2</div>
                <div className='color-3'>3</div>
                <div className='color-4'>4</div>
            </div>
        </div>
    );
};

export default Header;