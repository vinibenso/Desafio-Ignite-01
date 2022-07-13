import React, { useState } from 'react';
import './styles.css';
import { Tasks } from '../../components/Tasks';
import '../../styles/Input.css';
import { Logo } from '../../components/Logo';




export function Home() {

  function handleNewTasks(task) {
    console.log(task)
  }


  return (
    <div>

      <div className='header'>
        <Logo />
      </div>

      <div className='input-container'>
      <div className="container">
          <input 
          type="text" 
          placeholder='Adicionar uma nova tarefa...'
          onChange={e => handleNewTasks(e.target.value)}
          />
          <button type="button">Adicionar</button>
        </div>)

      </div>

      <div className='taskBody'>

        <div className='statusTasks'>

          <div className='createdTasks'>
            <p>Tarefas Criadas 01</p>
          </div>

          <div className='finishedTasks'>
            <p>Concluidas 05</p>
          </div>

        </div>

        <div className="taskList">

          <Tasks task="fazer hamburger" time="10:55:25" />
          <Tasks  task="Estudar mais" time= "11:51:10"/>
        

        </div>
        
      </div>

    </div>

  )
}

export default Home
