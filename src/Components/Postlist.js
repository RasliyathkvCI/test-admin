import * as React from 'react';
import {
    EditButton,
    List,
    RecordContextProvider,
    useListContext,
    // ReferenceField,   
} from 'react-admin';
import inflection from 'inflection';
import {
    Grid,
    Card,
    CardContent,
    CardActions,
    Typography,
} from '@mui/material';

const PostListCard = () => (
    <List
        sort={{ field: 'name'}}
        perPage={20}
        pagination={true}
        component="div"
        actions={false}
    >
        <PostListGrid />
    </List>
);

const PostListGrid = () => {
    const { data, isLoading } = useListContext();
    if (isLoading) {
        return null;
    }
    return (
        <Grid container spacing={2} sx={{ marginTop: '2em', ml: 1 ,mr:1}}>
            {data.map(record => (
                <RecordContextProvider key={record.id} value={record}>
                    <Grid
                        key={record.id}
                        xs={12} sm={6} md={4} lg={4} 
                        item
                    >
                        <Card xs={4} sx={{ height: 250, mr:0.5, mt: 2, ml:0.5, mb: 2, width: 350 }}>
                            <CardContent sx={{ paddingBottom: '0.5em' }}>                               
                                {/* <Typography   sx={{mb: 1,fontSize: '1.875rem'}}>
                                    <ReferenceField  source="userId" reference="users"sx={{fontSize: '1.875rem' }}/>
                                </Typography>                                */}
                                <Typography align="center">
                                    {inflection.humanize(record.title)}
                                </Typography>
                                <Typography align="center">
                                    {inflection.humanize(record.body)}
                                </Typography>                                
                            </CardContent>
                            <CardActions
                                sx={{
                                    ml:15,
                                    '.MuiCardActions-spacing': {
                                        display: 'flex',
                                        justifyContent: 'space-around',                                    
                                    },
                                }}
                            >
                                <EditButton />
                            </CardActions>
                        </Card>
                    </Grid>
                </RecordContextProvider>
            ))}
        </Grid>
    );
};

export default PostListCard;


