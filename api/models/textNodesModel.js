import {Schema, model} from "mongoose";

const textNodeSchema = new Schema({
    numberOfOrder: {type: Number, required: true, cast: false},
    nodeAddress: {type: String, required: true, cast: false},
    textContent: {type: String, required: true, cast: false},
    optimalLength: Number
});

export const TextNodeModel = model('text_node', textNodeSchema);