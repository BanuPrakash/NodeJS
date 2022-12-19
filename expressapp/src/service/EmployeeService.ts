import EmployeeModel, { Employee } from "../model/Employee";

class EmployeeService {
    getEmployees() {
        return EmployeeModel.find(); //select * from employees
    }

    // insert into employees values (?,?,?,?)
    addEmployee(emp:Employee) {
        EmployeeModel.create(emp, (err, resp) => {
            return resp;
        });
    }

    // delete from employees where id = ?
    deleteEmployee(id:number) {
        EmployeeModel.deleteOne({id:id}, function (err) {
            if(!err){
                 return "deleted!!!"
            } else {
                return "could not delete " + id ;
            }
        });
    }
}

export default new EmployeeService();