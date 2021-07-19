import {AppBar, Toolbar} from '@material-ui/core';
import Card from './ui/Card';
import FirmItem from './firm/FirmItem';

function App() {
  return (
    <div>
      {/* <AppBar position='fixed'>
        <Toolbar>Khiem</Toolbar>
      </AppBar> */}
      Hello iNavion, Test
      <Card>
        <FirmItem title='test'/>
      </Card>
    </div>
  );
}

export default App;
