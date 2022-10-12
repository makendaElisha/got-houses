import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { HouseType } from '../types/House.types';
import { useParams } from "react-router-dom";
import { Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Props {
    houses: HouseType[] | null;
}

const Details:React.FC<Props> = ({houses}) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { image } = useParams();
    const [house, setHouse] = useState<HouseType|null>();

    useEffect(() => {
        const currentHouse = houses 
            ? houses.find(hs => {
                const houseId = hs.url.split('/').pop();
                return houseId === id;
            })
            : null;
      setHouse(currentHouse);
      setHouse(currentHouse);
    }, [houses, id])

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
                            image={`/images/${image}.PNG`}
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
            <div style={{marginBottom: '50px'}}>
                <Button variant="contained" startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)}>
                    Back
                </Button>
            </div>
        </div>
    );
}

export default Details;