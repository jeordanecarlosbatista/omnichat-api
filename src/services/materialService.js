'use strict';

const MaterialRepository = require('../repositories/materialRepository');

const { NotFoundException } = require('../exceptions');

const _mapReturn = (material) => {
    return {
        id: material.id,
        name: material.name
    };
}

module.exports = {
    find: async (params) => {
        let materialRepo = new MaterialRepository();
        const result = await materialRepo.find({
            name: params.name,
            page: params.page,
            limit: params.limit
        });
        return {
            totalCount: result.totalCount,
            totalPage: result.totalPage,
            results: result.results.map(item => _mapReturn(item))
        }
    },
    create: async (obj) => {
        let materialRepo = new MaterialRepository();
        const resourceID = await materialRepo.create({
            name: obj.name
        });
        return { id: resourceID };
    },
    findByID: async (id) => {
        let materialRepo = new MaterialRepository();
        const result = await materialRepo.findByID(id);
        if (!result) throw new NotFoundException('Raw material not found');

        const material = _mapReturn(result);
        return material;
    },
    delete: async (id) => {
        let materialRepo = new MaterialRepository();
        const result = await materialRepo.findByID(id);
        if (!result) throw new NotFoundException('Raw material not found');

        await materialRepo.delete(id);
        return 'Raw material successfully deleted';
    }
}