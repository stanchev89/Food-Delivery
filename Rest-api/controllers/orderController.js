const {orderModel} = require('../models');
const mongoose = require("mongoose");


function getUserOrders(req, res, next) {
    const userId = mongoose.Types.ObjectId(req.params.id);
    const {sort,type, skip, limit} = req.body;
    orderModel.find({user: userId})
        .sort({sort:type})
        .skip(skip)
        .limit(limit)
        .then(data => res.status(200).json(data))
        .catch(next)

    // userModel.aggregate([
    //     {
    //         $match: {_id: userId}
    //     },
    //     {
    //         $project: {
    //             'orders': 1,
    //             'length': {$cond: {if: {$isArray: "$orders"}, then: {$size: "$orders"}, else: "NA"}},
    //             // 'sortedOrders': {$sort: {"$orders": {"date": -1}}, $slice:[skip,limit]}
    //         }
    //     }]).then(count => {
    //     userModel.find({_id: userId},{orders: {$slice: [skip, limit]}})
    //         // userModel.find({_id: userId},{orders: { $push: {"date": { $each: [], $sort: -1}} ,$slice: [skip, limit]}})
    //         // .sort(sort)
    //         .then(data => {
    //             res.status(200).json({data, count});
    //         })
    // }).catch(next);

};

function postNewOrder(req,res,next){
    const order = req.body;
    const userId = mongoose.Types.ObjectId(req.user._id);
    order.user = userId;
    orderModel.create(order)
        .then(data => res.status(201).json(data))
        .catch(next)
}

module.exports = {
    getUserOrders,
    postNewOrder
};