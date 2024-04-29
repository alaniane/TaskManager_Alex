import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState, } from 'react'
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
  */
function TaskManager(){
  const initialList =[
    {
        id: "",
        title:"",
        completed:""
    }
  ];
  // An Array to store tasks
  const[task, setTask]= useState({});
  const[tid, setId] = useState(1);
  const[taskList, setTaskList] = useState(initialList); 
  let tinput="3";
  // let updatedValue={};

  function addTask(){
    
    setId(tid + 1);
    updatedValue={
      id: tid,
      title: "Math Test" + tid,
      completed: false
    };
    const newList = () => ([...taskList, updatedValue]);
    // newList (updatedValue);
    setTaskList(newList);
    console.log(taskList);
  }


  return(
  <>
  <TextInput
   style={styles.input}
   placeholder="Add New Task..."
   value={task}
   >

  </TextInput>
  <Button
    
   title="addTask"
   defaultValue={task}
   onPress= {() => {addTask()}}>
  </Button>
  <Text>console.log(task); </Text>
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
    padding: 40
  }
});
