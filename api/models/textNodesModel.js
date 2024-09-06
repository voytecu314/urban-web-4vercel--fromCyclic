import {Schema, model} from "mongoose";

const textNodeSchema = new Schema({
    numberOfOrder: {type: Number, required: true, cast: false},
    nodeAddress: {type: String, required: true, cast: false},
    textContent: {type: Map, of: String, required: true, cast: false},
    tagRoute: {type: String, required: true, cast: false},
    textBackup: {type: Map, of: [String] ,default: {}, cast: false},
    optimalLength: {type: Number, cast: false}
});

export const LACKDOKTORtxtNodesModel = model('lackdoktor_text_node', textNodeSchema);
export const URBANWEBtxtNodesModel = model('urbanweb_text_node', textNodeSchema);