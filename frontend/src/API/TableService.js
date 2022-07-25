import api from ".";

export default class TableService {
    static async getAllTables() {
        const response = await api.get('tables/')
        return response
    }

    static async filterTables(seats, type, price_from, price_to) {
        const response = await api.post('tables/filter/', {seats, type, price_from, price_to})
        return response
    }

    static async createTable(seats, table_type, price) {
        const response = await api.post('tables/create/', {seats, table_type, price})
        return response
    }

    static async updateTable(id, is_free) {
        const response = await api.put(`tables/${id}/`, {is_free})
        return response
    }


}