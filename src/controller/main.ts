import {Request,Response} from 'express';

class MainCtrl{
    public Module:string;
    public Model:any;

    /**
     * @param Request
     * @param res
     */
    public async getAll(req:Request,res:Response){
        try{
            res.send(await this.Model.getAll());
        }catch(error){
            res.send(error);
        }
    }
    /**
     * @param Request
     * @param res
     */
    public async get(req:Request,res:Response){
        try{
            const query={_id:req.params.id};
            res.send(await this.Model.get(query));
        }catch(error){
            res.send(error);
        }
    }
    /**
     * @param Request
     * @param res
     */
    public async post(req:Request,res:Response){
        try{
            res.send(await this.Model.post(req.body));
        }catch(error){
            res.send(error);
        }
    }
    /**
     * @param Request
     * @param res
     */
    public async delete(req:Request,res:Response){
        try{
            const id=req.params.id;
            res.send(await this.Model.delete(id));
        }catch(error){
            res.send(error);
        }
    }
    /**
     * @param Request
     * @param res
     */
    public async update(req:Request,res:Response){
        try{
            const id=req.params.id;
            res.send(await this.Model.update(id,req.body));
        }catch(error){
            res.send(error);
        }
    }
}
export default MainCtrl;