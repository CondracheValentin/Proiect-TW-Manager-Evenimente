import React, { useState } from 'react';

const LocatieList = () => {
  const [locatii, setLocatii] = useState([]);
  const [nouaLocatie, setNouaLocatie] = useState({
    adresa: '',
    judet: '',
    comuna: ''
  });

  const adaugaLocatie = () => {
    if (nouaLocatie.adresa.trim() !== '' && nouaLocatie.judet.trim() !== '' && nouaLocatie.comuna.trim() !== '') {
      setLocatii(prevLocatii => [...prevLocatii, nouaLocatie]);
      setNouaLocatie({
        adresa: '',
        judet: '',
        comuna: ''
      });
    }
  };

  return (
    <div>
      <h2>Lista de Locații</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Adresa</th>
            <th>Judet</th>
            <th>Comuna</th>
          </tr>
        </thead>
        <tbody>
          {locatii.map((locatie, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{locatie.adresa}</td>
              <td>{locatie.judet}</td>
              <td>{locatie.comuna}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <label>Adresa:</label>
        <input
          type="text"
          value={nouaLocatie.adresa}
          onChange={(e) => setNouaLocatie({ ...nouaLocatie, adresa: e.target.value })}
        />

        <label>Judet:</label>
        <input
          type="text"
          value={nouaLocatie.judet}
          onChange={(e) => setNouaLocatie({ ...nouaLocatie, judet: e.target.value })}
        />

        <label>Comuna:</label>
        <input
          type="text"
          value={nouaLocatie.comuna}
          onChange={(e) => setNouaLocatie({ ...nouaLocatie, comuna: e.target.value })}
        />

        <button onClick={adaugaLocatie}>Adaugă Locație</button>
      </div>
    </div>
  );
};

export default LocatieList;