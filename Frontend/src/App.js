import React from 'react';


import Chat from './components/chat/Chat';
import Join from './components/Join/Join';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Join/>} />
            <Route path="/chat" element={<Chat/>} />
        </Routes>
    </Router>
);

export default App;
