const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');
const _ = require('underscore');

router.get('/:date', async (req, res) => {
    const response = await fetch('https://apirecruit-gjvkhl2c6a-uc.a.run.app/compras/2019-12-01');
    const compras = await response.json();
    const {date} = req.query;

    var i = 0;
    var montoVen = 0;
    var montoGol = 0;
    var montoAmx = 0;
    var cantiNoV = 0;
    var mayorCom = 0;
    var comprTDC = [];
    var objeRest = [];

    console.log("consulta 1" + date);

    for(var compra in compras){
        if(compras[i].compro == true){
            montoVen = montoVen + compras[i].monto;
            
            if(compras[i].tdc == "amex"){
                montoAmx = montoAmx + compras[i].monto;
            }else if(compras[i].tdc == "visa gold"){
                montoGol = montoGol + compras[i].monto;
            }

            if(compras[i].monto > mayorCom){
                mayorCom = compras[i].monto;
            }

        }else{
            cantiNoV++;
        }
        i++;
    }
    comprTDC.push({ 
        "oro"    : montoGol,
        "amex"  : montoAmx
    });

    objeRest.push({ 
        "total"    : montoVen,
        "comprasPorTDC"  : comprTDC,
        "nocompraron"    : cantiNoV,
        "compraMasAlta"  : mayorCom
    });
    res.json(objeRest);
})
module.exports = router;