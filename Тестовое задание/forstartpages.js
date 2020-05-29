import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Работа через ссылки/my-app/src/components/Header/Header';

const App = (props) => {
    return (
    document.getElementById('butAv').onclick = function(){
    var login = document.getElementById('number1').value;
    var password = document.getElementById('number2').value;
    if( (login === '1') && (password === '2')) {
    
    <Header />
}
    else {
    alert ('Вход запрещен!')
}
  }
    )
}

export default App;