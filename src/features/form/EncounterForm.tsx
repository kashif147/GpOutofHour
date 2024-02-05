import {
  Button,
  ButtonGroup,
  ButtonOr,
  Container,
  Divider,
  Form,
  Grid,
  GridColumn,
  Header,
  Segment,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TextArea,
} from 'semantic-ui-react';
import Address from '../components/Address';
import Contact from '../components/Contact';
import {
  callerRelationship,
  presentingConditions,
  priority,
  genderOptions,
  coverType,
  registrationStatus,
  gpDetails,
  gpPractices,
} from '../../app/api/masterData';

import { Encounter } from '../../app/types/encounter';
import { useState } from 'react';

type Props = {
  setFormOpen: (value: boolean) => void;
  encounters: Encounter;
};

// const encounter = encounter[0];
// const patients = encounter.patients;

export default function EncounterForm({ setFormOpen, encounters }: Props) {
  const initialValues = {
    encounterID: '1',
    callDateTime: '',
    callerIsPatient: true,
    caller: {
      callerName: '',
      callerRelationship: '',
      callerContactNo: '',
      isCallBackNumber: false,
    },
    patient: {
      patientID: '1',
      dob: '',
      dobUnKnown: false,
      age: '',
      isApproxAge: false,
      firstName: '',
      lastName: '',
      gender: '',
      callBackNumber: '',
      ppsN: '',
      email: '',
      homeLocation: {
        homeOrBuilding: '',
        street: '',
        areaOrTown: '',
        cityOrCounty: '',
        eirCode: '',
        isSetToCurrentLocation: false,
        isBillingAddress: true,
      },
      currentLocation: {
        homeOrBuilding: '',
        street: '',
        areaOrTown: '',
        cityOrCounty: '',
        eirCode: '',
        isSetToCurrentLocation: false,
        isBillingAddress: false,
        expiryDatetime: '',
      },
      homeContact: { contact: '', isCallBackNumber: false },
      mobileContact: { contact: '', isCallBackNumber: false },
      otherContact: { contact: '', isCallBackNumber: false },
      medicalCover: { coverType: '', cardNumber: '', expiryDate: '' },
      gpDetails: { registrationStatus: '', gp: '', surgery: '' },
      presentingComplaints: [{ complaint: '' }],
      additionalNotes: '',
      priority: '',
      priorityComments: '',
    },
  };

  const [encounter, setEncounter] = useState(initialValues);

  function onSubmit() {
    console.log(encounter);
  }

  function handleCallDateTimeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      callDateTime: e.target.value,
    });
  }

  function handleCallerIsPatientChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      callerIsPatient: e.target.value,
    });
  }

  function handleCallerNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      caller: {
        ...encounter.caller,
        callerName: e.target.value,
      },
    });
  }

  function handleCallerRelationshipChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setEncounter({
      ...encounter,
      caller: {
        ...encounter.caller,
        callerRelationship: e.target.value,
      },
    });
  }

  function handleCallerContactNoChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      caller: {
        ...encounter.caller,
        callerContactNo: e.target.value,
      },
    });
  }

  function handleIsCallBackNumberChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setEncounter({
      ...encounter,
      caller: {
        ...encounter.caller,
        isCallBackNumber: e.target.value,
      },
    });
  }

  function handleDobChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        dob: e.target.value,
      },
    });
  }

  function handleDobUnKnownChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        dobUnKnown: e.target.value,
      },
    });
  }

  function handleAgeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        age: e.target.value,
      },
    });
  }

  function handleIsApproxAgeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        isApproxAge: e.target.value,
      },
    });
  }

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        firstName: e.target.value,
      },
    });
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        lastName: e.target.value,
      },
    });
  }

  function handleGenderChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        gender: e.target.value,
      },
    });
  }

  function handleCallBackNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        callBackNumber: e.target.value,
      },
    });
  }

  function handlePpsNChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        ppsN: e.target.value,
      },
    });
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        email: e.target.value,
      },
    });
  }

  function handleHomeOrBuildingChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        homeLocation: {
          ...encounter.patient.homeLocation,
          homeOrBuilding: e.target.value,
        },
      },
    });
  }

  function handleStreetChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        homeLocation: {
          ...encounter.patient.homeLocation,
          street: e.target.value,
        },
      },
    });
  }

  function handleAreaOrTownChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        homeLocation: {
          ...encounter.patient.homeLocation,
          areaOrTown: e.target.value,
        },
      },
    });
  }

  function handleCityOrCountyChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        homeLocation: {
          ...encounter.patient.homeLocation,
          cityOrCounty: e.target.value,
        },
      },
    });
  }

  function handleEirCodeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        homeLocation: {
          ...encounter.patient.homeLocation,
          eirCode: e.target.value,
        },
      },
    });
  }

  function handleIsSetToCurrentLocationChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        homeLocation: {
          ...encounter.patient.homeLocation,
          isSetToCurrentLocation: e.target.value,
        },
      },
    });
  }

  function handleIsBillingAddressChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        homeLocation: {
          ...encounter.patient.homeLocation,
          isBillingAddress: e.target.value,
        },
      },
    });
  }

  //
  function handleCLHomeOrBuildingChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        currentLocation: {
          ...encounter.patient.currentLocation,
          homeOrBuilding: e.target.value,
        },
      },
    });
  }

  function handleCLStreetChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        currentLocation: {
          ...encounter.patient.currentLocation,
          street: e.target.value,
        },
      },
    });
  }

  function handleCLAreaOrTownChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        currentLocation: {
          ...encounter.patient.currentLocation,
          areaOrTown: e.target.value,
        },
      },
    });
  }

  function handleCLCityOrCountyChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        currentLocation: {
          ...encounter.patient.currentLocation,
          cityOrCounty: e.target.value,
        },
      },
    });
  }

  function handleCLEirCodeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        currentLocation: {
          ...encounter.patient.currentLocation,
          eirCode: e.target.value,
        },
      },
    });
  }

  function handleCLIsSetToCurrentLocationChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        currentLocation: {
          ...encounter.patient.currentLocation,
          isSetToCurrentLocation: e.target.value,
        },
      },
    });
  }

  function handleCLIsBillingAddressChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        currentLocation: {
          ...encounter.patient.currentLocation,
          isBillingAddress: e.target.value,
        },
      },
    });
  }

  function handleCLExpiryDatetimeChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        currentLocation: {
          ...encounter.patient.currentLocation,
          expiryDatetime: e.target.value,
        },
      },
    });
  }
  //

  function handleHomeContactNoChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        homeContact: {
          ...encounter.patient.homeContact,
          contact: e.target.value,
        },
      },
    });
  }

  function handleHomeIsCallBackNumberChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        homeContact: {
          ...encounter.patient.homeContact,
          isCallBackNumber: e.target.value,
        },
      },
    });
  }

  function handleMobileContactNoChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        mobileContact: {
          ...encounter.patient.mobileContact,
          contact: e.target.value,
        },
      },
    });
  }

  function handleMobileIsCallBackNumberChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        mobileContact: {
          ...encounter.patient.mobileContact,
          isCallBackNumber: e.target.value,
        },
      },
    });
  }

  function handleOtherContactNoChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        otherContact: {
          ...encounter.patient.otherContact,
          contact: e.target.value,
        },
      },
    });
  }

  function handleOtherIsCallBackNumberChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        otherContact: {
          ...encounter.patient.otherContact,
          isCallBackNumber: e.target.value,
        },
      },
    });
  }

  function handleCoverTypeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        medicalCover: {
          ...encounter.patient.medicalCover,
          coverType: e.target.value,
        },
      },
    });
  }

  function handleCardNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        medicalCover: {
          ...encounter.patient.medicalCover,
          cardNumber: e.target.value,
        },
      },
    });
  }

  function handleExpiryDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        medicalCover: {
          ...encounter.patient.medicalCover,
          expiryDate: e.target.value,
        },
      },
    });
  }

  function handleRegistrationStatusChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        gpDetails: {
          ...encounter.patient.gpDetails,
          registrationStatus: e.target.value,
        },
      },
    });
  }

  function handleGpChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        gpDetails: {
          ...encounter.patient.gpDetails,
          gp: e.target.value,
        },
      },
    });
  }

  function handleSurgeryChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        gpDetails: {
          ...encounter.patient.gpDetails,
          surgery: e.target.value,
        },
      },
    });
  }

  function handlePresentingComplaintsChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        presentingComplaints: {
          ...encounter.patient.presentingComplaints,
          complaint: e.target.value,
        },
      },
    });
  }

  function handleAdditionalNotesChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        additionalNotes: e.target.value,
      },
    });
  }

  function handlePriorityChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        priority: e.target.value,
      },
    });
  }

  function handlePriorityCommentsChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setEncounter({
      ...encounter,
      patient: {
        ...encounter.patient,
        priorityComments: e.target.value,
      },
    });
  }

  // function handleInputChange(e) {
  //   const { name, value } = e.target;
  //   setValues({ ...values, [name]: value });
  // }

  return (
    <Segment clearing>
      <Header content='Encounter Form' />
      <Divider></Divider>

      <Form onSubmit={onSubmit}>
        <Grid>
          <Grid.Column width={9}>
            <Header
              content='Demographics'
              color='teal'
            />

            <Form.Group>
              <Form.Input
                type='date'
                label='D.O.B'
                inline
                value={encounter.patient.dob}
                onChange={handleDobChange}></Form.Input>
              <div
                style={{
                  paddingTop: '1em',
                  paddingLeft: '0.5em',
                  paddingRight: '0.5em',
                }}>
                <Form.Checkbox
                  label='Unknown'
                  checked={encounter.patient.dobUnKnown}
                  onChange={handleDobUnKnownChange}></Form.Checkbox>
              </div>
              <Form.Input
                type='string'
                placeholder='Age (Years)'
                value={encounter.patient.age}
                onChange={handleAgeChange}></Form.Input>
              <div
                style={{
                  paddingTop: '1em',
                  paddingLeft: '0.5em',
                  paddingRight: '0.5em',
                }}>
                <Form.Checkbox
                  label='Approx.'
                  checked={encounter.patient.isApproxAge}
                  onChange={handleIsApproxAgeChange}></Form.Checkbox>
              </div>
            </Form.Group>
            <Form.Group className='three fields'>
              <Form.Input
                placeholder='First Name'
                value={encounter.patient.firstName}
                onChange={handleFirstNameChange}></Form.Input>
              <Form.Input
                placeholder='Last Name'
                value={encounter.patient.lastName}
                onChange={handleLastNameChange}></Form.Input>
              <Form.Select
                placeholder='Gender'
                options={genderOptions}
                value={encounter.patient.gender}
                onChange={handleGenderChange}></Form.Select>
            </Form.Group>
            <Form.Group className='three fields'>
              <Form.Input
                placeholder='Callback Number'
                value={encounter.patient.callBackNumber}
                onChange={handleCallBackNumberChange}></Form.Input>
              <Form.Input
                placeholder='PPS Number'
                value={encounter.patient.ppsN}
                onChange={handlePpsNChange}></Form.Input>
              <Form.Input
                placeholder='Email'
                value={encounter.patient.email}
                onChange={handleEmailChange}></Form.Input>
            </Form.Group>

            <br></br>

            <Grid>
              <GridColumn width={8}>
                <Header
                  color='teal'
                  content='Home Location'
                />
                <Address
                  homeOrBuilding={encounter.patient.homeLocation.homeOrBuilding}
                  street={encounter.patient.homeLocation.street}
                  areaOrTown={encounter.patient.homeLocation.areaOrTown}
                  cityOrCounty={encounter.patient.homeLocation.cityOrCounty}
                  eirCode={encounter.patient.homeLocation.eirCode}
                  onHomeOrBuildingChange={handleHomeOrBuildingChange}
                  onStreetChange={handleStreetChange}
                  onAreaOrTownChange={handleAreaOrTownChange}
                  onCityOrCountyChange={handleCityOrCountyChange}
                  onEirCodeChange={handleEirCodeChange}
                />
                <Form.Checkbox
                  label='Set to current Location'
                  checked={
                    encounter.patient.homeLocation.isSetToCurrentLocation
                  }
                  onChange={handleIsSetToCurrentLocationChange}></Form.Checkbox>
                <Form.Checkbox
                  label='Billing Address'
                  checked={encounter.patient.homeLocation.isBillingAddress}
                  onChange={handleIsBillingAddressChange}></Form.Checkbox>
              </GridColumn>

              <GridColumn width={8}>
                <Header
                  color='teal'
                  content='Current Location'
                />
                <Address
                  homeOrBuilding={
                    encounter.patient.currentLocation.homeOrBuilding
                  }
                  street={encounter.patient.currentLocation.street}
                  areaOrTown={encounter.patient.currentLocation.areaOrTown}
                  cityOrCounty={encounter.patient.currentLocation.cityOrCounty}
                  eirCode={encounter.patient.currentLocation.eirCode}
                  onHomeOrBuildingChange={handleCLHomeOrBuildingChange}
                  onStreetChange={handleCLStreetChange}
                  onAreaOrTownChange={handleCLAreaOrTownChange}
                  onCityOrCountyChange={handleCLCityOrCountyChange}
                  onEirCodeChange={handleCLEirCodeChange}
                />
                <Form.Group>
                  <Form.Checkbox
                    label='Set to Home Location'
                    checked={
                      encounter.patient.currentLocation.isSetToCurrentLocation
                    }
                    onChange={
                      handleCLIsSetToCurrentLocationChange
                    }></Form.Checkbox>
                  <Form.Checkbox
                    label='Billing Address'
                    checked={encounter.patient.currentLocation.isBillingAddress}
                    onChange={handleCLIsBillingAddressChange}></Form.Checkbox>
                </Form.Group>
                <Form.Input
                  type='datetime-local'
                  label='Expiry:'
                  inline
                  value={encounter.patient.currentLocation.expiryDatetime}
                  onChange={handleCLExpiryDatetimeChange}></Form.Input>
              </GridColumn>
            </Grid>
            <Grid>
              <GridColumn width={8}>
                <Header
                  content='Contact Details'
                  color='teal'
                />
                <Contact
                  contactType='Home'
                  contact={encounter.patient.homeContact.contact}
                  isCallBackNumber={
                    encounter.patient.homeContact.isCallBackNumber
                  }
                  onContactChange={handleHomeContactNoChange}
                  onIsCallBackNumberChange={handleHomeIsCallBackNumberChange}
                />
                <Contact
                  contactType='Mobile'
                  contact={encounter.patient.mobileContact.contact}
                  isCallBackNumber={
                    encounter.patient.mobileContact.isCallBackNumber
                  }
                  onContactChange={handleMobileContactNoChange}
                  onIsCallBackNumberChange={handleMobileIsCallBackNumberChange}
                />
                <Contact
                  contactType='Other'
                  contact={encounter.patient.otherContact.contact}
                  isCallBackNumber={
                    encounter.patient.otherContact.isCallBackNumber
                  }
                  onContactChange={handleOtherContactNoChange}
                  onIsCallBackNumberChange={handleOtherIsCallBackNumberChange}
                />
              </GridColumn>
              <GridColumn width={8}>
                <Header
                  content='Medical Cover Details'
                  color='teal'
                />
                <Form.Select
                  placeholder='Cover Type'
                  options={coverType}
                  value={encounter.patient.medicalCover.coverType}
                  onChange={handleCoverTypeChange}></Form.Select>
                <Form.Input
                  placeholder='Card No'
                  value={encounter.patient.medicalCover.cardNumber}
                  onChange={handleCardNumberChange}></Form.Input>
                <Form.Input
                  type='date'
                  label='Expiry'
                  inline
                  value={encounter.patient.medicalCover.expiryDate}
                  onChange={handleExpiryDateChange}></Form.Input>
              </GridColumn>
            </Grid>
            <GridColumn>
              <Header
                content='GP Details'
                color='teal'
              />
              <Form.Group>
                <Form.Select
                  placeholder='Registration Status'
                  options={registrationStatus}
                  value={encounter.patient.gpDetails.registrationStatus}
                  onChange={handleRegistrationStatusChange}></Form.Select>
                <Form.Select
                  placeholder="Patient's GP"
                  options={gpDetails}
                  value={encounter.patient.gpDetails.gp}
                  onChange={handleGpChange}></Form.Select>
                <Form.Select
                  placeholder='GP Practice'
                  options={gpPractices}
                  value={encounter.patient.gpDetails.surgery}
                  onChange={handleSurgeryChange}></Form.Select>
              </Form.Group>
            </GridColumn>
          </Grid.Column>

          <Grid.Column width={7}>
            <Header
              content='Call details'
              color='orange'
            />
            <Form.Group>
              <div
                style={{
                  paddingTop: '0.5em',
                  paddingLeft: '0.5em',
                  paddingRight: '4.2em',
                }}>
                <Form.Checkbox
                  label='Caller is a Patient'
                  checked={encounter.callerIsPatient}
                  onChange={handleCallerIsPatientChange}></Form.Checkbox>
              </div>
              <Form.Input
                type='datetime-local'
                label='Call Date:'
                inline
                value={encounter.callDateTime}
                onChange={handleCallDateTimeChange}></Form.Input>
            </Form.Group>
            <Form.Group className='two fields'>
              <Form.Input
                placeholder='Caller Name'
                type='text'
                value={encounter.caller.callerName}
                onChange={handleCallerNameChange}></Form.Input>
              <Form.Select
                placeholder='Relationship'
                options={callerRelationship}
                value={encounter.caller.callerRelationship}
                onChange={handleCallerRelationshipChange}></Form.Select>
            </Form.Group>
            <Contact
              contactType='Contact No'
              contact={encounter.caller.callerContactNo}
              isCallBackNumber={encounter.caller.isCallBackNumber}
              onContactChange={handleCallerContactNoChange}
              onIsCallBackNumberChange={handleIsCallBackNumberChange}
            />
            <div
              style={{
                paddingTop: '1.5em',
                paddingLeft: '0.5em',
                paddingRight: '0.5em',
              }}>
              <Header
                content='Reason(s) for Call'
                color='orange'
              />

              <Form.Select
                multiple
                placeholder='Presentation Conditions'
                options={presentingConditions}
                value={encounter.patient.presentingComplaints}
                onChange={handlePresentingComplaintsChange}></Form.Select>
              <TextArea
                rows={4}
                placeholder='Notes'
                value={encounter.patient.additionalNotes}
                onChange={handleAdditionalNotesChange}></TextArea>
            </div>
            <div
              style={{
                paddingTop: '.5em',
                paddingLeft: '0.5em',
                paddingRight: '0.5em',
              }}>
              <Form.Select
                placeholder='Priority'
                options={priority}
                value={encounter.patient.priority}
                onChange={handlePriorityChange}></Form.Select>
              <Form.Input
                placeholder='Priority comments'
                value={encounter.patient.priorityComments}
                onChange={handlePriorityCommentsChange}></Form.Input>
            </div>

            <div
              style={{
                paddingTop: '1.0em',
                paddingLeft: '0.5em',
                paddingRight: '0.5em',
              }}>
              <Header color='green'>Multi-Patients</Header>
              <Table celled>
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>Patient Name</TableHeaderCell>
                    <TableHeaderCell>Age</TableHeaderCell>
                    <TableHeaderCell>Gender</TableHeaderCell>
                    <TableHeaderCell>Priority</TableHeaderCell>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {encounters.map((encounter: Encounter) => (
                    <TableRow key={encounter.patient.patientID}>
                      <TableCell>
                        {encounter.patient.firstName +
                          ' ' +
                          encounter.patient.lastName}
                      </TableCell>
                      <TableCell>{encounter.patient.age}</TableCell>
                      <TableCell>{encounter.patient.gender}</TableCell>
                      <TableCell>{encounter.patient.priority}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <Container
              style={{
                paddingTop: '4.8em',
                paddingLeft: '0.5em',
                paddingRight: '0.5em',
              }}>
              <Button primary>Phone Triage</Button>
              <Button positive> Multi-Patient</Button>
              <Button
                onClick={() => setFormOpen(false)}
                negative
                // floated='right'
              >
                {' '}
                Finish Call
              </Button>
              <Button> Reset</Button>
              <div
                style={{
                  paddingTop: '1em',
                }}>
                <ButtonGroup>
                  <Button
                    // inverted
                    color='brown'
                    // floated='right'
                  >
                    {' '}
                    Waiting List
                  </Button>
                  <ButtonOr />
                  <Button
                    // inverted
                    color='purple'
                    // floated='right'
                  >
                    {' '}
                    Video Consult
                  </Button>
                  <ButtonOr />

                  <Button
                    // inverted
                    color='teal'
                    // floated='right'
                  >
                    {' '}
                    Clinic Appointment
                  </Button>
                </ButtonGroup>
              </div>
            </Container>
          </Grid.Column>
        </Grid>
      </Form>
    </Segment>
  );
}
