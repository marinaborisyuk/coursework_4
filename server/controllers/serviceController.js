const uuid = require('uuid');
const path = require('path');
const {Service, ServiceInfo} = require('../models/models');
const ApiError = require('../error/ApiError');

class ServiceController {
    async create(req, res, next) {
        try {
            let {name, price, typeId, info} = req.body;
            const service = await Service.create({name, price, typeId, info});

            if (info) {
                info = JSON.parse(info);
                info.forEach(i => 
                    ServiceInfo.create({
                        title: i.title,
                        description: i.description,
                        serviceId: service.id
                    })    
                );
            }

            return res.json(service); 
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        let {typeId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let servises;
        if (!typeId) {
            servises = await Service.findAndCountAll({limit, offset});
        }
        if (typeId) {
            servises = await Service.findAndCountAll({where: {typeId}, limit, offset});
        }
        return res.json(servises);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const service = await Service.findOne(
            {
                where: {id},
                include: [{model: ServiceInfo, as: 'info'}]
            },            
        );
        return res.json(service);
    }
}

module.exports = new ServiceController;