import * as React from "react";
import { useMediaQuery } from '@mui/material';
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput,
    useRecordContext
} from 'react-admin';




const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];


export const PostList = () => {

    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    
    return (

        <List filters={postFilters}>
            {isSmall ? (

                <SimpleList primaryText={record => record.title} secondaryText={record => (
                    <ReferenceField label="User" source="userId" reference="users" />
                )}
                />
            ) : (

                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    {/* list the data of each user from posts using reference userid  */}
                    <ReferenceField source="userId" reference="users" />
                    <TextField source="title" />
                    <EditButton />
                </Datagrid>

            )}
        </List>


    )
}



// To customize title 
const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};


// for customizing the edit form 

export const PostEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            {/* ReferenceField used as a reference and creates a context with the possible choices and renders an <AutocompleteInput> */}
            <ReferenceInput source="userId" reference="users" />
            {/* disabled used to disable the edition of the primary key */}
            <TextInput disabled source="id" />
            <TextInput source="title" />
            {/* multiline used to longer text input for the body field */}
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);


export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);