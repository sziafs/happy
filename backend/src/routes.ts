import { Router } from 'express';
import multer from 'multer';

// index, show, create, update, delete
import OrphanagesController from './controllers/OrphanagesController';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/', (req, res)=>{
  return res.json({"message": "api working"});
});

routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', upload.array('images'),OrphanagesController.create);  

export default  routes;