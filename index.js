const express=require('express');
const app=express();
app.use(express.json());
app.use (function(req,res,next ){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods" ,"POST");
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();
}
);

app.post(
    "/sumar",
    (req,res)=>{
        
        const numero_1=req.body.numero_1;
        const numero_2=req.body.numero_2;
        const resultado=parseFloat(numero_1)+parseFloat(numero_2);

        res.json(resultado);
        console.log("alguien esta concetando");

    }

);
app.post(
    "/resta",
    (req,res)=>{
        
        const numero_1=req.body.numero_1;
        const numero_2=req.body.numero_2;
        const resultado=parseFloat(numero_1)-parseFloat(numero_2);


        res.json(resultado);


    }
);
app.post(
    "/dividir",
    (req,res)=>{
         
        const numero_1=req.body.numero_1;
        const numero_2=req.body.numero_2;
        const resultado=parseFloat(numero_1)/parseFloat(numero_2);

        res.json(resultado);
    }


);
app.post(
    "/multiplicacion",
    (req,res)=>{
         
        const numero_1=req.body.numero_1;
        const numero_2=req.body.numero_2;
        const resultado=parseFloat(numero_1)*parseFloat(numero_2);

        res.json(resultado);
    }


);

app.listen(
    3000,
()=>{
    console.log("servidor 3000");
}
);
