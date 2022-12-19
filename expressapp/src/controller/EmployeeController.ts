import {Request, Response} from 'express'
import EmployeeService  from "../service/EmployeeService"; // object imported

export class EmployeeController {
    async listEmployees(req:Request, res: Response) {
         const employees = await EmployeeService.getEmployees();
         res.status(200).send(employees);
    }
    
    async addEmployee(req:Request, res: Response) {
        const emp = await EmployeeService.addEmployee(req.body);
        res.status(200).send(emp);
   }

    // DELETE http://localhost:3000/employees/4
    
   async deleteEmployee(req:Request, res: Response) {
    const resp = await EmployeeService.deleteEmployee(+req.params.id);
    res.status(200).send(resp);
}
}   

export default new EmployeeController(); 