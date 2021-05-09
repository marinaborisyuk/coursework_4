import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Внедение программ 1С'},
            {id: 2, name: 'Оптимизация налогообложения'}
        ]
        this._services = [
            {id: 1, name: 'Обязательный аудит', price: 1800},
            {id: 2, name: 'Инициативный аудит', price: 1800},
            {id: 3, name: 'Налоговый аудит', price: 1600},
            {id: 4, name: 'Управленческий аудит', price: 1500},
        ]
        makeAutoObservable(this);   
    }

    setTypes(types) {
        this._types = types;
    }

    setServices(services) {
        this._services = services;
    }

    get types() {
        return this._types;
    }

    get services() {
        return this._services;
    }
}