import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:3001'
})

export const databaseApi = {
	getDatabase() {
		return instance.get<any>('/database')
	}
}

export const fundsListAPI = {
	getFundsList() {
		return instance.get<any>('/fundsList')
	},
	addFund(data: any) {
		return instance.post<any>('/fundsList', data)
	},
	deleteFund(id: any) {
		return instance.delete<any>(`fundsList/${id}`)
	}
}
