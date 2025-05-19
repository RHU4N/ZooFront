import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListAnimais from './components/Animais/ListAnimais';
import AddAnimais from './components/Animais/AddAnimais';
import ReadAnimais from './components/Animais/ReadAnimais';
import ListTrabalhadores from './components/Trabalhadores/ListTrabalhadores';
import AddTrabalhadores from './components/Trabalhadores/AddTrabalhadores';
import ReadTrabalhadores from './components/Trabalhadores/ReadTrabalhadores';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/animais" element={<ListAnimais />} />
            <Route path="/addAnimais" element={<AddAnimais />} />
            <Route path="/readAnimais/:id" element={<ReadAnimais />} />
            <Route path="/updateAnimais/:id" element={<AddAnimais />} />

            <Route path='/trabalhadores' element={<ListTrabalhadores />} />
            <Route path='/addTrabalhadores' element={<AddTrabalhadores />} />
            <Route path='/readTrabalhadores/:id' element={<ReadTrabalhadores />} />
            <Route path='/updateTrabalhadores/:id' element={<AddTrabalhadores />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
