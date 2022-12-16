import EmployeeModel from "../model/Employee";

class EmployeeService {
    getEmployees() {
        return EmployeeModel.find();
    }
}

export default new EmployeeService();