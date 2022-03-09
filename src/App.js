import { useUserContext } from './contexts/userContext';

function App() {
  const { user, loading } = useUserContext();

  if (loading) {
    return <div>Loading...</div>;
  }
  return <div className="App">Hello {user.name}</div>;
}

export default App;
