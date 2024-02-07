import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Container,
  Button,
} from 'semantic-ui-react';
import { Encounter } from '../../app/types/encounter';

type Props = {
  encounters: Encounter[];
  selectEncounter: (encounter: Encounter) => void;
  deleteEncounter: (encounterId: string) => void;
};

export default function Queue({
  encounters,
  selectEncounter,
  deleteEncounter,
}: Props) {
  return (
    <Container style={{ margin: '-1.5em', width: 'auto' }}>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell></TableHeaderCell>
            <TableHeaderCell>Encounter No</TableHeaderCell>
            <TableHeaderCell>Encounter Time</TableHeaderCell>
            <TableHeaderCell>Callback Number</TableHeaderCell>
            <TableHeaderCell>Caller Name</TableHeaderCell>
            <TableHeaderCell>Contact No</TableHeaderCell>
            <TableHeaderCell>First Name</TableHeaderCell>
            <TableHeaderCell>Last Name</TableHeaderCell>
            <TableHeaderCell>Patient DOB</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {encounters.map((encounter) => (
            <TableRow key={encounter.encounterID}>
              <TableCell>
                <Button
                  positive
                  icon='edit'
                  onClick={() => selectEncounter(encounter)}></Button>
                <Button
                  negative
                  icon='delete'
                  onClick={() =>
                    deleteEncounter(encounter.encounterID)
                  }></Button>
              </TableCell>
              <TableCell>{encounter.encounterID}</TableCell>
              <TableCell>{encounter.callDateTime}</TableCell>
              <TableCell>{encounter.patient.callBackNumber}</TableCell>
              <TableCell>{encounter.caller.callerName}</TableCell>
              <TableCell>{encounter.caller.callerContactNo}</TableCell>
              <TableCell>{encounter.patient.firstName}</TableCell>
              <TableCell>{encounter.patient.lastName}</TableCell>
              <TableCell>{encounter.patient.dob}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
