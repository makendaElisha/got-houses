import React from 'react';
import House from "./House";
import { HouseType } from '../types/House.types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
    houses: HouseType[] | null;
}

const HousesList:React.FC<Props> = ({houses}) => {
    return (
        <div style={{marginTop: '20px'}}>
            <Typography gutterBottom variant="h3" component="div">
                Game Of Throne Houses
            </Typography>

            <div className='center-house'>
                <Box sx={{ width: '60%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {houses && houses.map(house => {
                            return (
                                <Grid item xs={4}>
                                    <House house={house}/>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </div>
        </div>
    );
}

export default HousesList;