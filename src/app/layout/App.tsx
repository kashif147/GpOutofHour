import { Container } from 'semantic-ui-react';
import NavBar from './nav/NavBar';
import { useState } from 'react';
import Dashboard from '../../features/encounters/Dashboard';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container className='main'>
        <Dashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
        />
      </Container>
    </>
  );
}

export default App;
