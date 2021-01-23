import { Project } from "./project.interface";

export interface Task {
    id: number,
    title: string,
    detail?: string,
    complete: boolean,
    project_id: number
}
