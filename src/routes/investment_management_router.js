import express from 'express';
var router = express.Router();
//import Deal from '../orm_service/InvestmentManagementService';
import DealOrchestration from '../orchestration_service/deal_composite_service';
var cmeiData = require ('../third_party_service/cmei_service');
var profileData = require('../../cmei_json/profile_mock.json');
//var companyList = require('../../cmei_json/company.json');

console.log("entering im route");

router.get('/im/v1/profiles', function(req, res, next) {
    res.json(profileData) ;
 });

 router.get('/im/v1/companylist', function(req, res, next){
    var data = req.query.companyName;

    var companyList;
    DealOrchestration.fetchCompanyListComposite(data).then((list) => {
        companyList = list;
        res.json(companyList);
    });
    
 });

router.post('/im/v1/deals',function(req, res, next){
    //console.log(cmeiData);
    var data = req.body;
    for(var key in data){
        if(key == "companyId"){
            if(data[key] == ""){
                
                cmeiData.data.dealDetails.dealInfo.dealId = data.dealId;
                cmeiData.data.dealDetails.dealInfo.dealOwner = data.dealOwner;
                cmeiData.data.dealDetails.dealInfo.projectName = data.projectName;
                cmeiData.data.dealDetails.dealInfo.sector = data.sector;
                
                cmeiData.data.dealDetails.companyFinacialInfo = [];
                cmeiData.data.dealDetails.companyInfo = {};
                cmeiData.data.dealDetails.dealInfo.companyName = '';
                cmeiData.data.dealDetails.dealInfo.companyID = '';
                
            } else {
                
                cmeiData.data.dealDetails.dealInfo.dealId = data.dealId;
                cmeiData.data.dealDetails.dealInfo.dealOwner = data.dealOwner;
                cmeiData.data.dealDetails.dealInfo.projectName = data.projectName;
                cmeiData.data.dealDetails.dealInfo.companyID = data.companyID;
                cmeiData.data.dealDetails.dealInfo.companyName = data.companyName;
                cmeiData.data.dealDetails.companyInfo.companyName = data.companyName;
                cmeiData.data.dealDetails.dealInfo.sector = data.sector;
                
            }
        }
    }

    DealOrchestration.createDealComposite(data);
   // console.log("returning from orc");
    res.json(cmeiData);
});

export default router;