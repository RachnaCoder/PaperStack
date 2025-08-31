//const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

const asyncHandler = (fn) => async (req, res, next) => {
    
    try {
        await fn(req, res, next)
    }
     catch (error) {
        // res.status(error.code || 500).json({
        //     success: false,
        //     message: error.message
        // })
        console.log(error);
       const statusCode = (Number.isInteger(error.statusCode) && error.statusCode >= 100 && error.statusCode < 600) ? error.statusCode : 500;
       res.status(statusCode).json({
       success: false,
       message: error.message
});

    }
}
export {asyncHandler}



