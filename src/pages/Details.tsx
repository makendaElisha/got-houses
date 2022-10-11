import React, { useState, useEffect } from 'react';
import { HouseType } from '../types/House.types';
import { useParams } from "react-router-dom";
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

interface Props {
    houses: HouseType[] | null;
}

const Details:React.FC<Props> = ({houses}) => {
    const { id } = useParams();
    const [house, setHouse] = useState<HouseType|null>();
    const images = [
        'baelish', 
        'baratheon', 
        'bolton', 
        'clegane', 
        'frey', 
        'greyjoy', 
        'lannister', 
        'martell', 
        'mormont', 
        'stark', 
        'targaryen', 
        'tully', 
        'tyrell',
    ];

    useEffect(() => {
        const currentHouse = houses 
            ? houses.find(hs => {
                const houseId = hs.url.split('/').pop();
                return houseId === id;
            })
            : null;
      setHouse(currentHouse);
      setHouse(currentHouse);
    }, [])

    return (
        <div className='top-spacing' data-testid="house-detail">
            <Typography color="primary" variant="h3">
                {house ? house.name : ''}
            </Typography>
            <Typography color="secondary" variant="subtitle1">
                Region: {house ? house.region : ''}
            </Typography>

            <div className='center-house'>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="500"
                            image={`/images/${images[Math.floor(Math.random()*images.length)]}.PNG`}
                            alt="random house image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Coat Of Arms
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {house ? house.coatOfArms : ''}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}

export default Details;