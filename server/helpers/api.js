

function errorResponse(statusCode, message, errorList){
    var response = {};
    response.error = {};
    response.error.code = statusCode;
    response.error.message = message;
    if(errorList !==null && errorList !==undefined) {
        response.error.errors = errorList;
    }
    return response;
}

function successResponse(data) {
    var response = {};
    response.data = data;
    return response;
}


module.exports = {
    makeErrorResponse : errorResponse,
    makeSuccessResponse : successResponse
};