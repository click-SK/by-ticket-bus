import React from 'react';
import SelectRouteSvg from './SelectRouteSvg';
import ByTicketSvg from './ByTicketSvg';
import ReadySvg from './ReadySvg';
import { useTranslation } from "react-i18next";
import '../../../style/howItWork.scss'
const HowItWork = () => {
    const { t } = useTranslation();
    return (
        <div className='how_it_work_wraper'>
            <h2>{t('How it work')}</h2>
            <div className='content_wrap_how-it-work' >
                <div className='item_how-it-work'>
                    <h3 className='item_h3'> 1. {t('How it work item 1')}</h3>
                    <SelectRouteSvg/>
                    <p className='item_text'>{t('How it work item 1 paragraph 1')}</p>
                </div>
                <div className='item_how-it-work'>
                    <h3 className='item_h3'>  2. {t('How it work item 2')}</h3>
                    <ByTicketSvg/>
                    <p className='item_text'>{t('How it work item 2 paragraph 1')}</p>
                </div>
                <div className='item_how-it-work'>
                    <h3 className='item_h3'>  3. {t('How it work item 3')}</h3>
                    <ReadySvg/>
                    <p className='item_text'>{t('How it work item 3 paragraph 1')}</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWork;