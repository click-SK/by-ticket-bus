import React, {useEffect} from 'react';
import { useDispatch } from "react-redux";
import { checkAuthUser } from "../store/authUser";
import { checkAuthAdministration } from "../store/authAdministration";
import { getCurrencies } from "../store/currentCurrencies";
import { currentLang } from "../store/language";
const FirstRequest = () => {
    const dispatch = useDispatch();
    return useEffect(() => {
        try {
          dispatch(getCurrencies());
          dispatch(currentLang());
          if(localStorage.getItem('bus-u-t')) {
            setTimeout(() => {
              dispatch(checkAuthUser());
            },500)
          }
          if(localStorage.getItem('bus-a-t')) {
            setTimeout(() => {
              dispatch(checkAuthAdministration());
            },500)
          }
        } catch(e) {
          console.log(e);
        }
      },[])
};

export default FirstRequest;

// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { checkAuthUser } from '../store/authUser';
// import { checkAuthAdministration } from '../store/authAdministration';
// import { getCurrencies } from '../store/currentCurrencies';
// import { currentLang } from '../store/language';

// const FirstRequest = () => {
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 await dispatch(getCurrencies());
//                 await dispatch(currentLang());

//                 if (localStorage.getItem('bus-u-t')) {
//                     await dispatch(checkAuthUser());
//                 }

//                 if (localStorage.getItem('bus-a-t')) {
//                     await dispatch(checkAuthAdministration());
//                 }
//             } catch (error) {
//                 console.error('Error during initial data fetch:', error);
//             }
//         };

//         fetchData();
//     }, [dispatch]);

//     return null; // Компонент не має рендерити нічого на UI, тому повертаємо null
// };

// export default FirstRequest;