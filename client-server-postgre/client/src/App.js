import React, {useState} from 'react';
import { View, Image } from 'react-native';
import UserSub from './components/user_sub';
import LogIn from './components/log_in';
import ShowUsers from './components/show_users';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isShowUsers, setShowUsers] = useState(false);
  const [needsLogin, setNeedsLogin] = useState(true);
  const [logInResult, setLogInResult] = useState('pre');

  // const []

  function showAddUser() {
    setIsOpened(isOpened => !isOpened);
  }

  function showUsers() {
    setShowUsers(isShowUsers => !isShowUsers);
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
        {needsLogin && (
          <div className="logInBox">
            <LogIn stateChanger={setNeedsLogin} logInResult={setLogInResult}/>
          </div>
        )}


        {!needsLogin && (
          <button onClick={showUsers} className="green-center">Show Users</button>
        )}

        {!needsLogin && (
          <button onClick={showAddUser} className="green-center">Insert User</button>
        )}
       

        {isOpened && (
          <div className="boxContent">
            <UserSub/>
          </div>
        )}

        {isShowUsers && (
          <div className="boxContent">
            <ShowUsers/>
          </div>
        )}
      </div>
    </View>
    </div>
    
  );
}

export default App