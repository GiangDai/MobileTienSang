const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');// để chuẩn hóa slug 
mongoose.plugin(slug);
const Schema = mongoose.Schema;


const mobilephones = new Schema({
  name: String,
  price:String,
  creator:String,
  img:String,
  warranty:String,
  cameraAfter:String,
  cameraBefore:String,
  ram:String,
  memory:String,
  network:String,
  SIM:String,
  battery:String,
  chargingPort:String,
  CPU:String,
  GPU:String,
  system:String,
  slug:{ type: String, slug: 'name' , unique:true } // nó sẽ tự động xóa dấu đi và dấu cách sẽ chuyển thành gạch ngang
    //còn unique : để quản lí các trường slug sẽ không bao giờ trùng nhau . nếu người dùng nhập tên trùng nhau thì thuộc tính này sẽ có tác dụng thêm kí tự
    // vào đằng sau slug để cho k bị trùng nhau
},{
  timestamps: true
});

module.exports = mongoose.model('mobilephones',mobilephones);