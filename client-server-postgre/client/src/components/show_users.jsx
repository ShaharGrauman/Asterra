import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import { getUsers } from '../api/users';
import UsersSelection from './dropdown.tsx'

const ShowUsers = () => {
    const [isUsersListPopulated, setPopulated] = useState(false)
    const [usersList, setList] = useState({
        names:["test", "one", "two", "three"]
    })
    
    //read about useEffect on react documents
    useEffect(() => {
      const users = getUsers()
    
    //   setList(data.users.split(","));
    //             setPopulated(true);
      return () => {
        second
      }
    }, [])

    return (
        <div>
            <View style={{ flexDirection: 'column', backgroundColor: 'black' }}>
            {isUsersListPopulated && (
                <UsersSelection UsersList={usersList}/>
            )}
            </View>
        </div>
    );
}

export default ShowUsers;