import React from 'react';
import './App.css';
import Cards from './components/cards/cards';
import CountryPicker from './components/countrypicker/countrypicker';
import Charts from './components/charts/charts';
import { fetchData } from './api';
import styles from './App.module.css'

class App extends React.Component {
 
  async componentDidMount(){
    const data= await fetchData()

    console.log(data)
  }

  render (){ 
    return(
    <div className={styles.container}>
     <Cards/>
     <CountryPicker/>
     <Charts/>
    </div>
    )
  };
}

export default App;
