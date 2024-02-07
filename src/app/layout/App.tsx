import { Container } from 'semantic-ui-react';
import NavBar from './nav/NavBar';
import { useState } from 'react';
import Dashboard from '../../features/encounters/Dashboard';
import { Encounter } from '../types/encounter';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEncounter, setSelectedEncounter] = useState<Encounter | null>(
    null
  );

  function handleSelectEncounter(encounter: Encounter | null) {
    setSelectedEncounter(encounter);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEncounter(null);
    setFormOpen(true);
  }

  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className='main'>
        <Dashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectedEncounter={selectedEncounter}
          selectEncounter={handleSelectEncounter}
        />
      </Container>
    </>
  );
}

export default App;
