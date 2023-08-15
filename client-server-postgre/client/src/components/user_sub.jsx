import React, {useState} from 'react';
import { View } from 'react-native';
import Input from './input.tsx'

function UserSub() {
    const [FirstName, setUserName] = useState("")
    const [LastName, setUserLastName] = useState("")
    const [Address, setUserAddress] = useState("")
    const [Phone, setUserPhone] = useState("")
    
    function userDataIn(event)
    {
        event.preventDefault()
        let userData = {
            FirstName:FirstName,
            LastName:LastName,
            Address:Address,
            Phone:Phone
        }
    
        fetch("/api/addUser",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(userData)
        }).then(response => response.json()).then(data=>{
            console.log(data)
        })
        console.log("Clicked")
    }

    return (
        <div>
            <View style={{ flexDirection: 'column', backgroundColor: 'black' }}>
            <form onSubmit={userDataIn}>
                <Input required type="text" label="First Name" name='firstName' onChange={e=>setUserName(e.target.value)} /><br/>
            
                <Input required type="text" label="Last Name" name='lastName' onChange={e=>setUserLastName(e.target.value)}/><br/>

                <Input required type="text" label="Address" name='address' onChange={e=>setUserAddress(e.target.value)}/><br/>

                <Input required type="text" label="Phone" name='phone' onChange={e=>setUserPhone(e.target.value)}/><br/>

                <input type='submit' value='Send'/>

            </form>
            </View>
        </div>
    );
}

export default UserSub;