# Crear Servicios y Tipos

## Crear `./services/index.ts`

```ts
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000/api'
});

export const getTasks = async () => {
  return await instance.get("/tasks");
}

export const getTask = async <T>(taskId: T) => {
  return await instance.get(`/tasks/${taskId}`);
}

export const insertUser = async <T>(payload: T) => {
  return await instance.post(`/tasks`, payload);
}
  
export const updateUser = async <T,U>(taskId: T, payload: U) => {
  return instance.put(`/tasks/${taskId}`, payload);
}

export const removeTask = async <T>(taskId: T) => {  
  return instance.delete(`/tasks/${taskId}`);
}
```

## Crear `./types/index.ts`

```ts
export type Task = {
  id: number;
  title: string;
  description: string;
  done: boolean;
  deleted_at?: null;
  created_at: Date;
  updated_at: Date;
}
```
