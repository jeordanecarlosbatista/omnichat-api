'use strict';

const controller = require('./base');
const constants = require('../utils/constants');
const materialService = require('../services/materialService')

module.exports = {
    getMaterials: async (req, res) => {
        try {
            const result = await materialService.find(req.query);

            res.set('X-Total-Count', result.totalCount);
            res.set('X-Total-Page', result.totalPage);

            res.status(constants.statusCode.SUCCESS.CODE).send(result.results);
        } catch (err) {
            controller.sendErrorResponse(res, err);
        }
    },
    postMaterial: async (req, res) => {
        try {
            const result = await materialService.create(req.body);

            res.status(constants.statusCode.CREATED.CODE).send(result);
        } catch (err) {
            controller.sendErrorResponse(res, err);
        }
    },
    getMaterial: async (req, res) => {
        try {
            const result = await materialService.findByID(req.params.id, req.body);

            res.status(constants.statusCode.SUCCESS.CODE).send(result);
        } catch (err) {
            controller.sendErrorResponse(res, err);
        }
    },
    deleteMaterial: async (req, res) => {
        try {
            const result = await materialService.delete(req.params.id)
                ;
            res.status(constants.statusCode.SUCCESS.CODE).send(result);
        } catch (err) {
            controller.sendErrorResponse(res, err);
        }
    },
    patchMaterialQuantity: async (req, res) => {
        try {
            const result = await materialService.updateQuantity(req.params.id, req.body);

            res.status(constants.statusCode.SUCCESS.CODE).send(result);
        } catch (err) {
            controller.sendErrorResponse(res, err);
        }
    }
}
