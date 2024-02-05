import { Grid } from 'semantic-ui-react';
import EncounterForm from '../form/EncounterForm';
import { Encounter } from '../../app/types/encounter';
import { useEffect, useState } from 'react';
import { sampleData } from '../../app/api/sampleData';
import Queue from './Queue';

type Props = {
  formOpen: boolean;
  setFormOpen: (value: boolean) => void;
};
export default function Dashboard({ formOpen, setFormOpen }: Props) {
  const [encounters, setEncounters] = useState<Encounter>([]);

  useEffect(() => {
    setEncounters(sampleData);
  }, []);
  return (
    <Grid>
      <Grid.Column width={16}>
        {!formOpen && <Queue encounters={encounters} />}

        {formOpen && (
          <EncounterForm
            setFormOpen={setFormOpen}
            encounters={encounters}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
