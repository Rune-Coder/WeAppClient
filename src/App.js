import './App.css';
import Login from './pages/login/login';

import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  const clientId = "547483676488-m68906nb3e44p2vkssu5catkfv7ltcn1.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
        <Login />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
