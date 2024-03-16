
const response = require("../../helper/response");
const userUseCase = require("../usecase/user");

exports.create = async (body, res) => {
    return response.ok(res, await userUseCase.create(body));
}

exports.getById = async (id, res) => {
    return response.ok(res, await userUseCase.findById(id));
}

exports.updateById = async (id, body ,res) => {
    return response.ok(res, await userUseCase.updateById(id, body));
}

