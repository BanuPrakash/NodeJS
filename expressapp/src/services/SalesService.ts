import SalesModel from "../model/Sales";

class SalesService {
    getSales() {
        return SalesModel.find();
    }
}

export default new SalesService();