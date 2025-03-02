import React, { createContext, useContext, useState } from 'react'

export const AppContext = createContext()

export const useAppContext = () => {
    const context = useContext(AppContext);
    return context;
  };

const AppContextProvider = (props) => {

    const [selectedPlan, setSelectedPlan] = useState({
      plan: 'Pro',
      price: '18'
    })

    const value = {selectedPlan, setSelectedPlan}
  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
