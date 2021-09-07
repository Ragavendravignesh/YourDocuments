const notFound = (req, res, next ) => {
    const error = new Error('Response not found');

    res.status(404);
    next(error);
}

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : err.statusCode;

    res.status(statusCode);

    res.json({
        message: err.message,
        error_stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
}

export {notFound, errorHandler}