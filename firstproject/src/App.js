
import AddComponet from './AddComponet';
import './App.css';
import MyfristComponet from './MyfristComponet';
import TaskComponet from './TaskComponet';
import Todo from './Todo';
import Todoapp from './Todoapp';

import Twocomponet from './Twocomponet';

function App() {
  let name = 'devang'
  return (
    <div className="App">
      {/* <MyfristComponet/> */}
      <Twocomponet myname={name} age="33"/>
      {/* <TaskComponet/> */}
      <Todo/>
      {/* <AddComponet/> */}
      {/* <Todoapp/> */}
    

  
    </div>
  );
}

export default App;
