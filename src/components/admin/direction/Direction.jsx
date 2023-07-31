import React from 'react';
import { useTranslation } from "react-i18next";
const Direction = () => {
    const { t } = useTranslation();
    return (
        <div className='admin_content_wrap'>
            <h2>{t('Direction')}</h2>
        </div>
    );
};

export default Direction;