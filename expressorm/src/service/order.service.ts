import {Order, Item} from '../models'; // DB table
// import {Item} from '../models/item.model';
import OrderDTO from '../dto/order.dto'; // incoming
import {connection} from '../config/connection';

class OrderService {

    async getOrders(): Promise<Order[]> {
        // let orderModels:Order[] = await Order.findAll({include:[{model: Item, nested:true}]});
        let orderModels:Order[] = await Order.findAll( { include: { all: true, nested: true }});
        console.log(orderModels);
        return orderModels;
    }

    async placeOrder(orderDto:OrderDTO): Promise<Order | undefined> {
        let tx  = connection.transaction();
        try {
            let placedOrder:Order = await Order.create({
                "orderDate": new Date().toString(),
                 "customer_fk" : orderDto.customer,
                 "total" : orderDto.total
             });
            
            orderDto.Items.forEach( async item => {
                await placedOrder.addItem(await Item.create(
                        {
                            "amount" : item.amount,
                            "qty" : item.qty,
                            "product_fk" : item.product
                        }
                ));
            });
            (await tx).commit();
            return placedOrder;
        } catch(ex) {
            console.log(ex);
            (await tx).rollback();
        }

    }
}

export default new OrderService(); // singleton

