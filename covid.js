import React, { useEffect, useState } from 'react'
import './covid.css'

const Covid = () => {

    const[data,setData]=useState([])

    const getCovidData =  async() =>{
        try {
            const res= await  fetch('https://data.covid19india.org/data.json')
           const actualData= await res.json()
           console.log(actualData.statewise[0])
           setData(actualData.statewise[0])
        } catch (error) {
            console.log(error)
        }
      
    }

    useEffect(() =>{
        getCovidData()
    }, [] )

  return (
    <>
    <section>
      <h1>Live</h1>
      <h2>Covid-19 CoronaVirus Tracker</h2>

    <ul>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'> OUR COUNTRY </p>
                    <p className='card__total card__small'>NEPAL</p>

                </div>

            </div>

        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'> Total Recovered </p>
                    <p className='card__recovered card__small'>{data.recovered}</p>

                </div>

            </div>

        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'> Total Confirmed</p>
                    <p className='card__confirmed card__small'>{data.confirmed}</p>

                </div>

            </div>

        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'> Total Death </p>
                    <p className='card__total card__small'>{data.deaths}</p>

                </div>

            </div>

        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'> Total Active </p>
                    <p className='card__active card__small'>{data.active}</p>

                </div>

            </div>

        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'> Last Updated</p>
                    <p className='card__total card__small'>{data.lastupdatedtime}</p>

                </div>

            </div>

        </li>
    </ul>
    </section>
    </>
  )
}

export default Covid

