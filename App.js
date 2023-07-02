import React from 'react';
import './App.css';
import Cards from './components/cards/cards';
import CountryPicker from './components/countrypicker/countrypicker';
import Charts from './components/charts/charts';
import { fetchData } from './api';
import styles from './App.module.css'

class App extends React.Component {
 state={
    data:{},
  }

 
  async componentDidMount(){
    const data= await fetchData()

    this.setState({data:fetchData})
  }

  render (){ 
   const {data}=this.state;
    return(
    <div className={styles.container}>
     <Cards data={data}/>
     <CountryPicker/>
     <Charts/>
    </div>
    )
  };
}

export default App;
