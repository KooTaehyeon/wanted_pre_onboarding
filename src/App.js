import Toggle from './components/Toggle';
import Modal from './components/Modal';
import Tab from './components/Tab';
import Tag from './components/Tag';
import AutoComplete from './components/AutoComplete';
import ClickToEdit from './components/ClickToEdit';
import './App.css';
function App() {
  return (
    <div className='App'>
      <Toggle></Toggle>
      <Modal></Modal>
      <Tab></Tab>
      <Tag></Tag>
      <AutoComplete></AutoComplete>
      <ClickToEdit></ClickToEdit>
    </div>
  );
}

export default App;
