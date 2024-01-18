import React, { useState,useEffect } from 'react';

const EvenimentList = () => {
  const [evenimente, setEvenimente] = useState([]);
  const [noulEveniment, setNoulEveniment] = useState({
    nume: '',
    descriere: '',
    data: '',
    durata: 0,
    organizator: ''
  });

  const adaugaEveniment = () => {
    if (noulEveniment.nume.trim() !== '' && noulEveniment.descriere.trim() !== '' && noulEveniment.data.trim() !== '' && noulEveniment.organizator.trim() !== '') {
      setEvenimente(prevEvenimente => [...prevEvenimente, noulEveniment]);
      setNoulEveniment({
        nume: '',
        descriere: '',
        data: '',
        durata: 0,
        organizator: ''
      });
    }
  };

  useEffect(() => {
    // Solicitare către server pentru a obține lista de evenimente
    fetch('http://localhost:8080/eveniments')
      .then(response => response.json())
      .then(data => setEvenimente(data))
      .catch(error => console.error('Eroare la obținerea datelor evenimentelor:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Evenimente</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nume</th>
            <th>Descriere</th>
            <th>Data</th>
            <th>Durata (ore)</th>
            <th>Organizator</th>
          </tr>
        </thead>
        <tbody>
          {evenimente.map((eveniment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{eveniment.nume}</td>
              <td>{eveniment.descriere}</td>
              <td>{eveniment.data}</td>
              <td>{eveniment.durata}</td>
              <td>{eveniment.organizator}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <label>Nume:</label>
        <input
          type="text"
          value={noulEveniment.nume}
          onChange={(e) => setNoulEveniment({ ...noulEveniment, nume: e.target.value })}
        />

        <label>Descriere:</label>
        <input
          type="text"
          value={noulEveniment.descriere}
          onChange={(e) => setNoulEveniment({ ...noulEveniment, descriere: e.target.value })}
        />

        <label>Data:</label>
        <input
          type="text"
          value={noulEveniment.data}
          onChange={(e) => setNoulEveniment({ ...noulEveniment, data: e.target.value })}
        />

        <label>Durata (ore):</label>
        <input
          type="number"
          value={noulEveniment.durata}
          onChange={(e) => setNoulEveniment({ ...noulEveniment, durata: parseInt(e.target.value) || 0 })}
        />

        <label>Organizator:</label>
        <input
          type="text"
          value={noulEveniment.organizator}
          onChange={(e) => setNoulEveniment({ ...noulEveniment, organizator: e.target.value })}
        />

        <button onClick={adaugaEveniment}>Adaugă Eveniment</button>
      </div>
    </div>
  );
};

export default EvenimentList;