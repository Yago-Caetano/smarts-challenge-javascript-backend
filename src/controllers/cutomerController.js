const Customer = require('../models/customer');
const Moment = require('moment');

/**
 *  Controller reponsável por gerenciar as integração dos
 *    "Customers" presentes no banco dados com a API
 */

module.exports = {

    async getCustomers(req,res){

        const {page, limit,orderBy,iDate,eDate} = req.query;
        var sortQuery = {};
        var timeQuery = {};

        //verifica o tipo de listagem
        switch(orderBy){
            case "alphabetic1":
            sortQuery = {name:1};
            break;

            case "alphabetic-1":
            sortQuery = {name:-1};
            break;

            case "budget1":
            sortQuery = {budget:1};
            break;

            case "budget-1":
            sortQuery = {budget:-1};
            break;
        }

       
        try{

            //verifica se houve o envio do intervalo de tempo
            if((typeof eDate !== 'undefined') && (typeof iDate !== 'undefined'))
            {
                console.log(iDate);
                console.log(eDate);
                timeQuery = {registered:{$gt: Moment.utc(iDate), $lte: Moment.utc(eDate)}}
            }

            const anws = await Customer.find(timeQuery)
            .sort(sortQuery)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

            const totalElements = await Customer.find(timeQuery).countDocuments();
            console.log(totalElements);

            res.status(200).json({
                anws,
                totalPages: Math.ceil(totalElements/ limit),
                currentPage: page
              });
              
        }catch(err)
        {
            console.log(err);
            res.status(400).send(err);
        }
    }
}
