import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Bill from "./components/Bill";
import { useState, useReducer, useEffect } from "react";
import {GSTContextComponent} from './contexts/GSTContext';

function App() {

  const [list, setList] = useState([]);

  const [totalPrice, dispatch] = useReducer((state, action) => {
    switch(action.type.toUpperCase()){
      case "SUM": 
      default:
        let result = 0;
        list.forEach(item => {
          result += Number(item.price);
        })
        return result;
    }
  }, 0)

  useEffect(()=>{
    if(list.length === 0) return; // Don't do anything if list is empty

    dispatch({type:"sum"});
  }, [list])

  const addNewItem = (newItem) => {
    setList(prevState => {
      return [
        ...prevState,
        newItem
      ]
    })
  }

  return (
    <>
      <GSTContextComponent>
        <Display currentList={list} handleAddNewItem={addNewItem}></Display>
        <Bill totalPrice={totalPrice}></Bill>
      </GSTContextComponent>
    </>
  );
}

export default App;
