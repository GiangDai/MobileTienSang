const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/shop_mobilephone_tiensang');
        console.log("ket noi thanh cong");
    } catch (error) {
        console.log("ket noi khong thanh cong");
    }
}

module.exports = { connect };