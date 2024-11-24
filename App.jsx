import { useState } from 'react';
import enkrypt from './components/images/enkrypt.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './config/firebase';
import Chat from './components/chat';
function App() {
  const [user, setUser] = useState(null)
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => setUser(result.user))
      .catch(error => console.log(error));
  };

  return (
    <div className='App'>
      {user ? (
        <Chat user={user} />
      ) : (
        <div className='p-5 text-center'>
          <div>
          <img src={enkrypt} width={400} height={400} alt='logo' className='pr-2' style={{borderRadius:200}}/>
          </div>
          <div>
            <button 
              className='btn btn-primary' 
              style={{ marginTop: '50px' }} 
              onClick={handleSignIn}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

