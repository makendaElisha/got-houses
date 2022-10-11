import React, { useState, useEffect } from 'react';
import { HouseType } from '../types/House.types';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import House from '../components/House';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


interface Props {
    houses: HouseType[] | null;
}
  
const Home:React.FC<Props> = ({houses}) => {
    return (
        <div style={{marginTop: '20px'}} data-testid="houses-list">
            <Typography gutterBottom variant="h3" component="div">
                Game Of Throne Houses
            </Typography>

            <div className='center-house'>
                <Box sx={{ width: '60%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {houses && houses.map(house => {
                            return (
                                <Grid item xs={4} key={house.url}>
                                    <House house={house} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </div>
        </div>
    );
}

export default Home;