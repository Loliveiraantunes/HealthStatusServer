const response = require("../../helper/response");
const authUseCase = require("../usecase/auth");

exports.auth = async (body, res) => {
    return response.optional(res, await authUseCase.auth(body));
}