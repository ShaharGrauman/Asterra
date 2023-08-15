import React, {useState} from 'react';
import { View } from 'react-native';
import UsersSelection from './dropdown.tsx'

const ShowUsers = () => {
    const [isUsersListPopulated, setPopulated] = useState(false)
    const [usersList, setList] = useState({
        names:["test", "one", "two", "three"]
    })
    
    if(!isUsersListPopulated){
    fetch("/api/hobbies",{
            method: "get",
            headers:{
                "Content-Type": "application/json"
            },
        }).then(response => response.json()).then(data=>{
            if(data.message === "Success"){
                setList(data.users.split(","));
                setPopulated(true);
            }
        })
    }
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