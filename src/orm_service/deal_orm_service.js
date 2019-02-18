import Deal from '../models/deal_model';

module.exports = {
    createDeal(jrObj,res){
        return Deal
        .create({
            companyProfileId: jrObj.companyID,
            createdBy: "456456"/* ,
            ownerProfileId: jrObj.body. */
        })
        .then((deal) => res.status(201).send(deal))
        .catch((error) => /* res.status(400).send(error) */ console.log("error: "+error));
    }
}
