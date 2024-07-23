export interface ServerResponse<T = any> {
	status?: number;
    message?: string;
    data?: T;
}

export interface Task { 
	title: string; 
	description: string; 
	done: boolean;
	id?: number;
}