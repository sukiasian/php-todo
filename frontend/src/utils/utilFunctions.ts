import { EventHandler } from "react";
import { HttpStatus } from "../types/enums";
import { ServerResponse } from "../types/interfaces";

export const serverResponseIsSuccessful = (response: ServerResponse): boolean => { 
	return (response.status >= HttpStatus.OK && response.status < HttpStatus.AMBIGUOUS) ?? false;
};

export const stopPropagation: EventHandler<any> = (e) => {
    e.stopPropagation();
};
