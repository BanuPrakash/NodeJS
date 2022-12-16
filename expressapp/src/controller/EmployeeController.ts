import {Request, Response} from 'express'
import EmployeeService  from "../service/EmployeeService"; // object imported

export class EmployeeController {
    async listEmployees(req:Request, res: Response) {
         const employees = await EmployeeService.getEmployees();
         res.status(200).send(employees);
    }
 
}

export default new EmployeeController(); 