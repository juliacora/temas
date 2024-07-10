// ThemeToggleButton.js
import React, { useContext } from 'react';
import { FundoContext } from './troca-de-cor';

const BotaoAlterarFundo = () => {
    const { tema, alterarTema } = useContext(FundoContext);

    return (
        <button onClick={alterarTema}>
            Mudar para o tema {tema === 'claro' ? 'escuro' : 'claro'}
        </button>
    );
};

export default BotaoAlterarFundo;
