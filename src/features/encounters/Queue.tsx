/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Container,
} from 'semantic-ui-react';

// type Props = {
//   encounters: any;
// };

export default function Queue({ encounters }: any) {
  return (
    <Container style={{ margin: '-1.5em', width: 'auto' }}>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Encounter No</TableHeaderCell>
            <TableHeaderCell>Encounter Time</TableHeaderCell>
            <TableHeaderCell>Callback Number</TableHeaderCell>
            <TableHeaderCell>Caller Name</TableHeaderCell>
            <TableHeaderCell>Contact No</TableHeaderCell>
            <TableHeaderCell>First Name</TableHeaderCell>
            <TableHeaderCell>Last Name</TableHeaderCell>
            <TableHeaderCell>Patient DOB</TableHeaderCell>
            <TableHeaderCell>Gender</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {encounters.map((encounter: any) => (
            <TableRow key={encounter.encounterID}>
              <TableCell>{encounter.encounterID}</TableCell>
              <TableCell>{encounter.callDateTime}</TableCell>
              <TableCell>{encounter.patient.callBackNumber}</TableCell>
              <TableCell>{encounter.caller.callerName}</TableCell>
              <TableCell>{encounter.caller.callerContactNo}</TableCell>
              <TableCell>{encounter.patient.firstName}</TableCell>
              <TableCell>{encounter.patient.lastName}</TableCell>
              <TableCell>{encounter.patient.dob}</TableCell>
              <TableCell>{encounter.patient.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
