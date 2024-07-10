import React, { createContext, useState, useEffect } from 'react';

export const FundoContext = createContext();

const FundoProvider = ({ children }) => {
    const [tema, definirTema] = useState('claro');

    const alterarTema = () => {
        definirTema((temaAnterior) => (temaAnterior === 'claro' ? 'escuro' : 'claro'));
    };

    useEffect(() => {
        document.body.className = tema;
    }, [tema]);

    return (
        <FundoContext.Provider value={{ tema, alterarTema }}>
            {children}
        </FundoContext.Provider>
    );
};

export default FundoProvider;