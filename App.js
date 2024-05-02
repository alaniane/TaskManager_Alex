import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState,} from 'react'
// import TaskManager from './TaskManager.js';
/*  const [task, setTask] = useState(
      {
          id: "",
          title:"",
          completed:""
      }

        function addTask(){
    setId(tid + 1);
    updatedValue={
      id: tid,
      title: "Math Test" + tid,
      completed: false
    };

      <Button
    
   title="addTask"
   onPress= {() => {addTask()}}>
   
  </Button>
      <Text style={{padding: 10, fontSize: 42}}>
    {tname
    .split(' ')
    .map(word => word && 'hello')
    .join('')}
    </Text>
    ✔
  */
function TaskManager(){
  const initialList =[
    {
        id: "",
        title:"",
        completed:false
    }
  ]; 
  // An Array to store tasks

  // Constant for checkmark status
  const[checked, setCheck]= useState(false);

  // Constant for task setting 
  const[task, setTask]= useState({});

  // Constant for id setting
  const[tid, setId] = useState(1);

  // Constant for list of tasks
  const[taskList, setTaskList] = useState([]);
  const[tname, setTaskName] = useState(''); 
  // let tinput="3";
  //const handleChange = () => {setCheck(!checked);};

  // let updatedValue={};
  function addTask(){
    setTaskName(tname);
    setId(tid + 1);
    updatedValue={
      id: tid,
      title: tname,
      completed: false
    };
    setTask(updatedValue);
    const newList = () => ([...taskList, updatedValue]);
    // newList (updatedValue);
    // setTaskList(newList);
    setTaskList(newList);
    console.log(taskList);
  }

  function toggleTask()
  {
      //newUpdate = {...updatedTask};
      //newUpdate.completed = !updatedTask.completed;
      const toggle = (index) => {setTaskList(taskList.map((task, idx) => idx === index?task.completed = !task.completed:''))};
      console.log(taskList);
  }

  return(
  <>
  <Text>Add Tasks!</Text>
  
  <TextInput
   style={styles.input}
   onChangeText={setTaskName}
   value={tname}
   placeholder="Add New Task..."
   // clearTextOnFocus
   clearButtonMode = 'while-editing'
   >
  </TextInput>
   <Text>[{tname}]</Text>
  
  <Button
   title="addTask"
   defaultValue={task}
   onPress= {addTask}>
  </Button>

  <View style={styles.taskStyle}>
  {taskList.map((task, index) => 
  <Text
    key={index}>{task.id}: {task.title} {task.completed?"✔":"X"}
    <Button
     title="complete"
     defaultValue={setTask}
     onPress={() => toggleTask(index)}
    >
      

    </Button>
  </Text>)}
  </View>
  </>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <TaskManager /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    backgroundColor:'#FFFFFF',
    height: 20,
    width: 300,
    margin: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  },
  taskStyle:{
    margin: 50,
    alignItems:'flex-start',
    textAlign:'left'
  }
});
