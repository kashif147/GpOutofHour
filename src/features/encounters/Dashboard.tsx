import { Grid } from 'semantic-ui-react';
import EncounterForm from '../form/EncounterForm';
import { Encounter } from '../../app/types/encounter';
import { useEffect, useState } from 'react';
import { sampleData } from '../../app/api/sampleData';
import Queue from './Queue';

type Props = {
  formOpen: boolean;
  setFormOpen: (value: boolean) => void;
  selectEncounter: (encounter: Encounter | null) => void;
  selectedEncounter: Encounter | null;
};
export default function Dashboard({
  formOpen,
  setFormOpen,
  selectEncounter,
  selectedEncounter,
}: Props) {
  const [encounters, setEncounters] = useState<Encounter[]>([]);

  useEffect(() => {
    setEncounters(encounters);
  }, []);

  function addEncounter(encounter: Encounter) {
    setEncounters((prevState) => {
      return [...prevState, encounter];
    });
  }

  function updateEncounter(updatedEncounter: Encounter) {
    setEncounters(
      encounters.map((enc) =>
        enc.encounterID === updatedEncounter.encounterID
          ? updatedEncounter
          : enc
      )
    );
    selectEncounter(null);
  }

  function deleteEncounter(encounterId: string) {
    setEncounters(encounters.filter((enc) => enc.encounterID !== encounterId));
  }

  return (
    <Grid>
      <Grid.Column width={16}>
        {!formOpen && (
          <Queue
            encounters={encounters}
            selectEncounter={selectEncounter}
            deleteEncounter={deleteEncounter}
          />
        )}

        {formOpen && (
          <EncounterForm
            setFormOpen={setFormOpen}
            // encounters={encounters}
            addEncounter={addEncounter}
            updateEncounter={updateEncounter}
            selectedEncounter={selectedEncounter}
            key={selectedEncounter ? selectedEncounter.encounterID : 'create'}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
