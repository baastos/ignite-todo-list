import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask = {
      title: newTaskTitle,
      id: Math.floor(Math.random() * (999)),
      done: false
    }
    setTasks([...tasks, newTask])
  }

  function handleMarkTaskAsDone(id: number) {
    const taskExists = tasks.find(task => task.id === id);

    if (taskExists) {
      const updatedTasks = tasks.map(task => task.id === taskExists.id ? { ...task, done: true } : task);
      setTasks(updatedTasks);

    } else {
      return;
    }
  }

  function handleRemoveTask(id: number) {
    const updatedTasks = tasks.filter(task => task.id !== id);

    setTasks(updatedTasks);
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}