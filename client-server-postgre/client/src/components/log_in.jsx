import React, {useState} from 'react';
import { View } from 'react-native';
import Input from './input.tsx'

const LogIn = ({ stateChanger , logInResult}) => {
    const [UserName, setUserName] = useState("")
    const [Password, setPassword] = useState("")

    function userDataIn(event)
    {
        event.preventDefault()
        let userData = {
            UserName:UserName,
            Password:Password,
        }
    
        fetch("/api/logIn",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(userData)
        }).then(response => response.json()).then(data=>{
            if(data.message === "Success"){
                stateChanger(true);
            }
            logInResult(data.message)
        })
    }

    return (
        <div>
            <View style={{ flexDirection: 'column', backgroundColor: 'black' }}>
            <form onSubmit={userDataIn}>
                <Input required type="text" label="User Name" name='UserName' onChange={e=>setUserName(e.target.value)} /><br/>
                <Input required type='password' label="Password" name='Password' onChange={e=>setPassword(e.target.value)}/><br/>
                <input type='submit' value='Log In' style={{ color: 'green', lineHeight : 1, textAlign: 'center', padding: 20, fontSize: 24}}/>
            </form>
            </View>
        </div>
    );
}

export default LogIn;