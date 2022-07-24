import api from ".";

export default class OrderService {
    static async getAllOrders() {
        const response = await api.get('orders/')
        return response
    }

    static async createOrder(table_id, email) {
        const response = await api.post('orders/create/', {'table_id': table_id, email})
        return response
    }

    static async updateOrder(status, id) {
        const response = await api.put(`orders/${id}/`, {status})
        return response
    }

}