import * as React from "react";
import { useMediaQuery, Card, CardContent } from '@mui/material';
// import { List, Datagrid, TextField, EmailField ,UrlField } from 'react-admin';
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    EmailField
} from 'react-admin';
import MyUrlField from "./MyUrlField";

export const UserList = () => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        // customising list by adding Components we can add or delete fields
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => (
                        <Datagrid rowClick="edit">
                            <TextField source="id" />
                            <TextField source="name" />
                            {/* <TextField source="username" /> */}
                            <EmailField source="email" />
                            {/* <TextField source="address.street" /> */}
                            <TextField source="phone" />
                            {/* <TextField source="website" /> // fiel as a text */}
                            {/* <UrlField source="website" /> //  field as a  url */}
                            {/* a component to custom hooks used to fetch perticular source data */}
                            <MyUrlField source="website" />
                            <TextField source="company.name" />
                        </Datagrid>


                    )}
                />
            ) : (
                
                <Card sx={{ mr: 1, mt:2,ml:2,mb:2,width:1050 }}>
                    <CardContent>
                        <Datagrid rowClick="edit">
                            <TextField source="id" />
                            <TextField source="name" />
                            {/* <TextField source="username" /> */}
                            <EmailField source="email" />
                            {/* <TextField source="address.street" /> */}
                            <TextField source="phone" />
                            {/* <TextField source="website" /> // fiel as a text */}
                            {/* <UrlField source="website" /> //  field as a  url */}
                            {/* a component to custom hooks used to fetch perticular source data */}
                            <MyUrlField source="website" />
                            <TextField source="company.name" />
                        </Datagrid>
                    </CardContent>
                </Card>
            )}
        </List>
    )

};