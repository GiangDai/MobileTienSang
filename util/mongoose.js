

module.exports = {
    mutipleMogooseToObject: function (mongooses) {
            //dung funtion thuwog
    return (
        mongooses = mongooses.map(mongooses = function (mongooses){
                    
            return mongooses.toObject();
        
        })
    )
    //dung arow funtion
    //return mongooses.map(mongooses => mongooses.toObject());
    },
    mongoosesToObject: function (mongooses) {
        return mongooses ? mongooses.toObject() : mongooses;
        //neu co thang nay thi return toObject() con k thi return lai chinh no 
    }
}
