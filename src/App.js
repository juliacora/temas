import React from 'react';
import FundoProvider from './troca-de-cor';
import BotaoAlterarFundo from './BotaoAlterarFundo';
import './App.css';

const App = () => {
    return (
        <FundoProvider>
            <div className='App'>
                <BotaoAlterarFundo />
                <h1>Aplicação com tema claro e escuro</h1>
                <p>Altere o tema clicando no botão acima</p>
            </div>
        </FundoProvider>
    );
};

export default App;