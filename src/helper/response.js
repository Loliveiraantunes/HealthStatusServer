exports.ok =  (res, data) => {
	var result = {
        status: 200,
        timestamp: new Date().getTime(),
		data: data
	};
	return res.status(200).json(result);
};

exports.not_found =  (res, data) => {
	var result = {
        status: 404,
        timestamp: new Date().getTime(),
	};
	return res.status(404).json(result);
};