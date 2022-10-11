import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { HouseType } from '../types/House.types';
import { Link } from 'react-router-dom';

interface Props {
    house: HouseType;
}

const House:React.FC<Props> = ({house}) => {
    const houseId = house ? house.url.split('/').pop() : null;

    return (
        <div data-testid={`house-${houseId}`}>
            <Link to={`/house/${houseId}`} style={{ textDecoration: 'none' }}>
                <Card sx={{ maxWidth: 345 }} style={{ padding: '5px', marginTop: '30px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={"/images/castle-icon.png"}
                        alt="castle icon"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {  house.name }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Click for details
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Link>
        </div>
    );
}

export default House;