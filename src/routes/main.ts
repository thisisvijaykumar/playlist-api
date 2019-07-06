import {Application,Request,Response} from 'express';

class MainRoute{
    public path:string;
    public Controller:any;
    public app:Application;

    public getAll(){
        this.app.get(this.path,(req:Request,res:Response)=>{
            this.Controller.getAll(req,res);
        });
    }

    public get(){
        this.app.get(this.path+"/:id",(req:Request,res:Response)=>{
            this.Controller.get(req,res);
        });
    }

    public post(){
        this.app.post(this.path,(req:Request,res:Response)=>{
            this.Controller.post(req,res);
        });
    }

    public update(){
        this.app.put(this.path+"/:id",(req:Request,res:Response)=>{
            this.Controller.update(req,res);
        });
    }

    public delete(){
        this.app.delete(this.path+"/:id",(req:Request,res:Response)=>{
            this.Controller.delete(req,res);
        });
    }
}

export default MainRoute;