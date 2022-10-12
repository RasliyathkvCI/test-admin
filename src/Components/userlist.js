import * as React from 'react';
import {
    List,
    RecordContextProvider,
    useListContext,
} from 'react-admin';
import inflection from 'inflection';
import {
    Grid,
    Card,
    CardContent,
    CardActions,
    Typography,
} from '@mui/material';

const UserListCard = () => (
    <List
        sort={{ field: 'name', order: 'ASC' }}
        perPage={20}
        pagination={true}
        component="div"
        actions={false}
    >
        <UserListGrid />
    </List>
);

const UserListGrid = () => {
    const { data, isLoading } = useListContext();
    if (isLoading) {
        return null;
    }
    return (
        <Grid container  sx={{ mt:2 , ml: 5 , mr:1}}>
            {data.map(record => (
                <RecordContextProvider key={record.id} value={record}>
                    <Grid
                        key={record.id}
                        xs={12} sm={6} md={4} lg={3} 

                        item
                    >
                        <Card xs={4} sx={{ height: 160, mr:0.5, mt: 2, ml:0.5, mb: 2, width: 270 }}>
                            <CardContent sx={{ paddingBottom: '0.5em' }}>
                                <Typography
                                    variant="h7"
                                    component="h2"
                                    align="center"
                                    sx={{mb: 2}}>
                                    {inflection.humanize(record.name)}
                                </Typography>
                                <Typography align="center" variant="h7" component="h4" sx={{mb: 1}}>
                                    {inflection.humanize(record.email)}
                                </Typography>
                                <Typography align="center" variant="h7" component="h4" sx={{mb: 1}}>
                                    {inflection.humanize(record.phone)}
                                </Typography>
                                <Typography align="center"  variant="h7" component="h4" sx={{mb: 1}}>
                                    {inflection.humanize(record.website)}
                                </Typography>
                            </CardContent>
                            <CardActions
                                sx={{
                                    ml:12,
                                    '.MuiCardActions-spacing': {
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                    
                                    },
                                }}
                            >
                                
                            </CardActions>
                        </Card>
                    </Grid>
                </RecordContextProvider>
            ))}
        </Grid>
    );
};

export default UserListCard;