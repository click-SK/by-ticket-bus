import En from './translation/en.json'
import Sp from './translation/sp.json'

import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'


const resources = {
    En: {
        translation: En,
    },
    Sp:{
        translation: Sp,
    }
}

i18n
.use(initReactI18next)
.init({
    resources,
    lng:localStorage.getItem('bus-language')|| '',
    fallbackLng:'Sp'
})

export default i18n;