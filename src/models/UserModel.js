const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name: { type: String,  },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        // xét xem bằng true là admin còn false là ng dùng
        isAdmin: { type: Boolean, default: false, required: true },
        phone: { type: String, },
        // access_token: { type: String, require: true },
        // refresh_token: { type: String, require: true },
        address: {type: String},
        avatar: {type: String},
        city: {type: String},
        otp: { type: String }, // Mã OTP tạm thời
        otpExpiry: { type: Date } // Thời gian hết hạn của mã OTP
    },
    {
        timestamps: true
    }
);
const User = mongoose.model("User", userSchema);
module.exports = User;