import CompanyList from '../models/company_list';
import Sequelize from 'sequelize';

module.exports = {
    fetchCompanyList(jrObj) {

        console.log("entering company ORM ");
        return CompanyList
            .findAll({
                attributes: ['companyId', 'companyName'],
                where: ['company_name ilike ?',  jrObj + '%']
            })
            .then((companyList) => {
                var companyListArr = []
                for (var i = 0; i < companyList.length; i++) {
                    companyListArr.push(companyList[i]);
                }
                return companyListArr;
            })
            .catch((error) => /* res.status(400).send(error) */console.log("error: " + error));
    }
}