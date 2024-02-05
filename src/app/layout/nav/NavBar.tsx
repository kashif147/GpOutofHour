import {
  Button,
  Checkbox,
  Container,
  Input,
  Menu,
  MenuItem,
} from 'semantic-ui-react';

type Props = {
  setFormOpen: (value: boolean) => void;
};
export default function NavBar({ setFormOpen }: Props) {
  return (
    <Menu
      inverted={true}
      fixed='top'>
      <Container>
        <MenuItem header>
          {/* <img
            className='ui tiny image circular'
            src='/maha.png'
            alt='logo'
          /> */}
          <i className='user md big icon'></i>
          GP Out of Hours
        </MenuItem>
        <MenuItem name='Encounters' />
        <MenuItem>
          <Input
            className='ui icon input focus'
            placeholder='Patient Search'
            icon={'search'}
          />
        </MenuItem>
        <MenuItem>
          <Checkbox
            // onClick={() => setFormOpen(true)}
            label='Unknown'></Checkbox>
        </MenuItem>
        <MenuItem>
          <Button
            onClick={() => setFormOpen(true)}
            floated='right'
            positive={true}
            inverted={true}
            content='Create'
          />
        </MenuItem>
        <MenuItem position='right'>
          <Button
            basic
            inverted
            content='Login'
          />
        </MenuItem>
      </Container>
    </Menu>
  );
}
