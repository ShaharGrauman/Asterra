import React, {useState} from 'react';
import { View } from 'react-native';

const ShowUsers = () => {
    const [isUsersListPopulated, setPopulated] = useState(false)
    const [usersList, setList] = useState([])

    fetch("/api/hobbies",{
            method: "get",
            headers:{
                "Content-Type": "application/json"
            },
        }).then(response => response.json()).then(data=>{
            console.log(data)
            if(data.message === "Success"){
                setPopulated(true);
                setList(Array(data.users.rows));

                console.log(data.users.rows);
            }
        })

    return (
        <div>
            <View style={{ flexDirection: 'column', backgroundColor: 'black' }}>
            {isUsersListPopulated && (
                <h1 style={{color: 'red', lineHeight : 2, textAlign: 'center' }}>{usersList}</h1>
            )}
            </View>
        </div>
    );
}

export default ShowUsers;