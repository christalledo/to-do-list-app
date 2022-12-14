const { Schema, model, SchemaTypeOptions } = require("mongoose");

const listSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        maxlength: 100,
        minlength: 5,
    },
    assigned: {
        type: String,
    },
    important: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const List = model("List", listSchema);

module.exports = List;