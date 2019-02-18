const DealService = require('../orm_service/deal_orm_service');
const CompanyList = require('../orm_service/company_list_orm_service');

console.log("entering im orchestration");

export default {
    createDealComposite(jrObj,res){
        return DealService.createDeal(jrObj);        
    },

    fetchCompanyListComposite(jrObj){
        //console.log("entering company orchestration ");
        return CompanyList.fetchCompanyList(jrObj).then((companyList) => { return companyList});
    }
}
