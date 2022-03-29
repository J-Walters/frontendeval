import './Modal.css';
import Modal from './Modal.js';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal show={show} onClose={() => setShow(false)} />
    </div>
  );
}

export default App;
