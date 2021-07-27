import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getUser } from './service/user.service';
import List from './components/list';

interface ListProps{
  id: number,
  name: string,
  avatar: string,
  income: number
}

function App() {
  const [valueSearched, setValueSearched] = useState<number>(0)
  const [listSearched, setlistSearched] = useState<any>([])
  const validate = (n: number) =>{
    if(n < 99999){
      setValueSearched(n)
    }
  }
  const search = async () =>{
    const response = await getUser()
    const filterIncomePositive = response.filter(
      (fIncome: ListProps) => (fIncome.income <= valueSearched + 10000) && (fIncome.income >= valueSearched - 10000)
    )
    setlistSearched(filterIncomePositive)
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>my agent list</h1>
        <input type="number" max={5} onChange={(e)=>{
          validate(parseInt(e.target.value))
        }} value={valueSearched}/>
        <button onClick={search}>MATCH</button>
        <List listRender={listSearched}/>
      </header>
    </div>
  );
}

export default App;
