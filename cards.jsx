import React from "react";

import { Card, CardContent,Typography,Grid } from '@material-ui/core';
import styles from './cards.module.css';

const Cards = ( {data: {confirmed,recovered,tested} }) => {
    console.log(confirmed)

    if(!confirmed){
       return 'loading.....'
    }



    return (
       <div className={styles.container}>
        <Grid container spacing={3} justifyContent="center" >
        <Grid item component={Card}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom >Infected</Typography> 
                <Typography variant="h5" >Real Data</Typography> 
                <Typography color="textSecondary" > Real Date</Typography>
                <Typography variant="body2" >NO of active cases of COVID-19 </Typography>  
            </CardContent>
        </Grid>
        <Grid item component={Card}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom >Recovered</Typography> 
                <Typography variant="h5" >Real Data</Typography> 
                <Typography color="textSecondary" > Real Date</Typography>
                <Typography variant="body2" >NO of recovered cases of COVID-19 </Typography>  
            </CardContent>
        </Grid>
        <Grid item component={Card}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom >Deaths</Typography> 
                <Typography variant="h5" >Real Data</Typography> 
                <Typography color="textSecondary" > Real Date</Typography>
                <Typography variant="body2" >NO of deaths from  COVID-19 </Typography>  
            </CardContent>
        </Grid>
        </Grid>

       </div>
    )
}

export default Cards;
