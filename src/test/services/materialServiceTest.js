'use strict';

const MaterialService = require('../../services/materialService');
const Database = require('../../db');

describe('MaterialService Suit Tests', () => {
    beforeEach(async () => await Database.start());

    it.skip('getMaterials', async () => await MaterialService.getMaterials());

    it.skip('postMaterial', async () => await MaterialService.postMaterial({
        name: 'teste',
        user: 'testeteste'
    }));

    it.skip('getMaterial', async () => await MaterialService.getMaterial(5));

    it.skip('deleteMaterial', async () => await MaterialService.deleteMaterial(5));
})