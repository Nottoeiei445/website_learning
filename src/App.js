import './App.css';
import Login from './Login';

function App() {
  return (<div 
      className="w-full h-screen bg-cover bg-center items-center flex justify-center text-white "
      style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2023/03/22/10/16/sunset-7869120_1280.jpg)' }}
    >
      <Login/>
        
    </div>
  );
}

export default App;
