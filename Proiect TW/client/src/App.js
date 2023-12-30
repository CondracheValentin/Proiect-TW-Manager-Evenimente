import {useEffect,useState,useCallback} from 'react';
import './App.css';

function App() {
const [name,setName]= useState('');


  // async function getMsg(){
  //   const result = await fetch('http://localhost:8080/');
  //   const response =await result.text();

  //   console.log(response);
  // }

  const getMsg = useCallback(() => {
    fetch('http://localhost:8080')
    .then(res => res.json())
    .then(res=> console.log(res))
  },[name])

  useEffect(()=> {
    console.log('Hello');
  },[])

  console.log(name);
  return (
    <div className="App">
      {/* <button onClick={() => getMsg()}>Get message</button> */}
      <input
         type='name'
         name='name'
         onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
