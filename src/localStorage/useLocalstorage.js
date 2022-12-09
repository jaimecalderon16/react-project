import React from "react";

function useLocalStorage(nameItem, inicialValue){
    const [error,setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [items, setItems] = React.useState(inicialValue);
    React.useEffect(()=>{

        setTimeout(() => {
            try {

            const localStorageItems = localStorage.getItem(nameItem);
            let parcedItems;
         
            if(!localStorageItems){
               localStorage.setItem(nameItem,JSON.stringify(inicialValue));
               parcedItems = inicialValue; 
            }else{
               parcedItems = JSON.parse(localStorageItems);
            }

            setItems(parcedItems);
            setLoading(false);
        } catch(error){
                setError(error);
            }
        }, 1000)

    })

    const saveItems = (newItem) => {
        try{
        const stringifiItems = JSON.stringify(newItem);
        localStorage.setItem(nameItem, stringifiItems);
        setItems(newItem);} catch(error){
            setError(error)
        }
     };

    return{items, saveItems, loading, error};
};

export {useLocalStorage};