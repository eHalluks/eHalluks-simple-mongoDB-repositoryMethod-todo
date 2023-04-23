const {ObjectId} = require("mongodb");

class TodoRecord {
    constructor(obj) {
        this._id = new ObjectId(obj._id);
        this.shortDescription = obj.shortDescription;
        this.longDescription = obj.longDescription;

        this._validate();
    }
    _validate = () => {
        if (this.shortDescription.trim() < 3) {
            throw new Error("Short description must be at least 3 characters");
        }else if(this.shortDescription.trim() > 30) {
            throw new Error("Short description must be at most 30 characters");
        }else if (this.longDescription.trim() > 150) {
            throw new Error("Short description must be at most 150 characters");
        }else if (this._id === null) {
            throw new Error("Not found");
        }
    }

}

module.exports = {TodoRecord};