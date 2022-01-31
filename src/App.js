import React from 'react';
import logo from './logo.svg';
import './App.css';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Id from './components/Id';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
     {/* <Screen1/>
     <Screen2/> */}
     {/* <Id/> */}
<BrowserRouter>
<Routes>
<Route path='/id' element={<Id/>}></Route>
<Route path='/Screen1'  element={<Screen1/>}></Route>
<Route path='/Screen2' element={<Screen2/>}></Route>

</Routes>

</BrowserRouter>

    </div>
  );
}

export default App;
