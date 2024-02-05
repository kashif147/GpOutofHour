/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from 'semantic-ui-react';

type AddresstProps = {
  homeOrBuilding: string;
  street: string;
  areaOrTown: string;
  cityOrCounty: string;
  eirCode: string;
  onHomeOrBuildingChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onStreetChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAreaOrTownChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCityOrCountyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEirCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Address({
  homeOrBuilding,
  street,
  areaOrTown,
  cityOrCounty,
  eirCode,
  onHomeOrBuildingChange,
  onStreetChange,
  onAreaOrTownChange,
  onCityOrCountyChange,
  onEirCodeChange,
}: AddresstProps) {
  return (
    <>
      <Form.Input
        placeholder='Home or Building'
        value={homeOrBuilding}
        onChange={onHomeOrBuildingChange}></Form.Input>
      <Form.Input
        placeholder='Street '
        value={street}
        onChange={onStreetChange}></Form.Input>
      <Form.Input
        placeholder='Area or Town'
        value={areaOrTown}
        onChange={onAreaOrTownChange}></Form.Input>
      <Form.Input
        placeholder='City or County'
        value={cityOrCounty}
        onChange={onCityOrCountyChange}></Form.Input>
      <Form.Input
        placeholder='EirCode'
        value={eirCode}
        onChange={onEirCodeChange}></Form.Input>
    </>
  );
}
