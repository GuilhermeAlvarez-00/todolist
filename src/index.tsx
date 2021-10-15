import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from 'miragejs'
import { TasksProvider } from './hooks/useTask';

createServer({
  models: {
    task: Model
  },

  seeds(server) {
    server.db.loadData({
      tasks: [
        {
          id: 1,
          title: 'Tarefa 1'
        },
        {
          id: 2,
          title: 'Tarefa 2'
        },
        {
          id: 3,
          title: 'Tarefa 3'
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('tasks', () => {
      return this.schema.all('task')
    })

    this.post('tasks', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('task', data)
    })

    this.del('tasks/:id')

    this.put('tasks/:id')
  }
})

ReactDOM.render(
  <TasksProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TasksProvider>,
  document.getElementById('root')
);
