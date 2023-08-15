import React, {useState} from 'react';
import { View, Image } from 'react-native';
import UserSub from './components/user_sub';
import LogIn from './components/log_in';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [state, setState] = useState(false);
  const [logInResult, setLogInResult] = useState('pre');

  function showAddUser() {
    setIsOpened(wasOpened => !wasOpened);
  }

  return (
    <div className='App'>
      <View style={{ flexDirection: 'column', backgroundColor: 'black' }}>

      <Image source={require('./asterra_back.jpg')} style={{width: 640, height: 360, alignSelf: 'center' }} />
      <h1 style={{color: 'blue', lineHeight : 2, textAlign: 'center' }}>Ron Shani's Home Assignment</h1>

      {logInResult === "Error" && (
          <h1 style={{color: 'red', lineHeight : 2, textAlign: 'center' }}>LogIn Error</h1>
      )}

      <div style={{padding: 100}}>
        {state === false && (
          <div className="logInBox">
            <LogIn stateChanger={setState} logInResult={setLogInResult}/>
          </div>
        )}



        {state && (
          <button onClick={showAddUser} style={{ color: 'green', lineHeight : 1, textAlign: 'center', padding: 20, fontSize: 24}}>Insert User</button>
        )}
        
        {isOpened && (
          <div className="boxContent">
            <UserSub/>
          </div>
        )}
      </div>
    </View>
    </div>
    
  );
}

export default App