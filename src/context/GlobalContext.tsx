import React, { createContext, useState } from 'react';

export const modalContext = createContext({});

const GlobalContext = ({ children }: any) => {
    const [open, setOpen] = useState(false);

    const openModal = (val: boolean) => {
        setOpen(val);
    };

    return (
        <modalContext.Provider value={{ open, openModal }}>
            {children}
        </modalContext.Provider>
    );
};

export default GlobalContext;
