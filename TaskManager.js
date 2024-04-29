import {useState, useCallback, View, Text, Button, TextInput} from 'react'

export function Taskmanager(){
    // const [tinput, setTinput] = useState("Hello");
    // An Array to store tasks
  
    return(
    <>
    <TextInput
     placeholder="Add New Task..."
     value=""
     > HELLO
  
    </TextInput>
    </>
    );
  };
/*
 function Taskmanager(){

    // An Array to store tasks
    const[tasks, setTasks] = useState([]); 
    let tinput;
    const [task, setTask] = useState(
        {
            id: "",
            title:"",
            completed:""
        }
    )
    function addTask(){
      console.log(tinput);
    }


    return(
    <>
    <TextInput
     placeholder="Add New Task..."
     value={tinput}
     >

    </TextInput>
    <Button
     title="addTask">
     onPress{() => {addTask}}
    </Button>
    </>
    );
};

*/