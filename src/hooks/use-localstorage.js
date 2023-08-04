import { useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
    const [storedValue, setStoredValue] = useState(() =>{
        try{ 
            const value = localStorage.getItem(key)

            console.log('value language',value);
            
            if(value){
                return JSON.parse(value)
            }else{
                console.log('language not work');
                localStorage.setItem(key, JSON.stringify(defaultValue))
                return defaultValue;
            }
        }catch(error){
            return defaultValue;
        }
    })


    const setValue = (newValue) =>{
        try{ 
            localStorage.setItem(key, JSON.stringify(newValue))
        }catch (error){
            console.log(error)
        }
        setStoredValue(newValue)
    }

  return [storedValue, setValue]
}

export default useLocalStorage