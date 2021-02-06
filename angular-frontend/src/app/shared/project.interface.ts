import { Task } from "./task.interface";

export interface Project {
    id?: number,
    title: string,
    description?: string,
    complete: boolean
}