import * as React  from "react"
import {
  Admin,
  Resource,
  // ListGuesser,
  // EditGuesser 
} from "react-admin"
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./Components/User";
import { 
  PostCreate, 
  PostEdit, 
  PostList 
} from "./Components/Posts";
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import Dashboard from "./Components/Dashboard";
import authProvider from "./Components/AuthProvider";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
    
      <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}icon={PostIcon}/>
        {/* recordRepresentation='name' will remove the auther id .<ReferenceField> component fetches the reference data, creates a RecordContext with the result, and renders the record representation */}
        <Resource name="users" list={UserList} recordRepresentation="name"icon={UserIcon}  />
      </Admin>
   
  );
}

export default App;
