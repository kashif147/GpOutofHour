import { Form } from 'semantic-ui-react';

type ContactProps = {
  contactType: string;
  contact: string;
  isCallBackNumber: boolean;
  onContactChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onIsCallBackNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function contact({
  contactType,
  contact,
  isCallBackNumber,
  onContactChange,
  onIsCallBackNumberChange,
}: ContactProps) {
  // console.log(contactType);
  return (
    <Form.Group className='two fields'>
      <Form.Input
        placeholder={contactType}
        value={contact}
        onChange={onContactChange}></Form.Input>
      <div
        style={{
          paddingTop: '1em',
          paddingLeft: '0.5em',
          paddingRight: '0.5em',
        }}>
        <Form.Checkbox
          label='Set Callback'
          checked={isCallBackNumber}
          onChange={onIsCallBackNumberChange}></Form.Checkbox>
      </div>
    </Form.Group>
  );
}
