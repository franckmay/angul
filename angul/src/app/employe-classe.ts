import { Employe } from "./employe";

export class EmployeC implements Employe {

    constructor(

        public id: number,
        public nom: string,
        public competence: string,
        public superieur?: string
    ) {}



}