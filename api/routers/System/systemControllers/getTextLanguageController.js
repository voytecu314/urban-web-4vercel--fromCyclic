//import {TextNodesModel} from "../../../models/textNodesModel.js";

export default async (req, res, next) => {

    try {

        const { websiteName, language } = req.params;

        const {[`${websiteName.toUpperCase()}txtNodesModel`]: TextNodesModel} = await import('../models/textNodesModel.js');

        const textNodes = await TextNodesModel.find({});
        console.log({websiteName, language});
        res.json( textNodes );

    } catch (error) {
        next(error)
    }

}