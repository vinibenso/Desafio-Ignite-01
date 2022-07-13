import { Trash } from 'phosphor-react';
import './Tasks.css';

export function Tasks(props) {
  return (
    <div>
    
     <div className='tasksBox' >
     <p>{props.task}</p>
     <small>{props.time}</small>
           <button title="Deletar Tarefa">
             <Trash size={24} />
           </button>
    </div>
    </div>
     

  
     
  )
}