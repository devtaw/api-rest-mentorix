import MentoradoModel from "../database/models/mentorado.mjs"
export class   MentoradoService{

    async getAllMentorados (){
      return MentoradoModel.findAll();
    }
    async getMentoradoById (idMentorado){
      return MentoradoModel.findByPk(idMentorado); 
    }
    async addMentorado (dadosMentorado){
      return MentoradoModel.create(dadosMentorado)  
    }
    async updateMentorado (idMentorado, dadosMentorado){
        const mentorado = await MentoradoModel.findByPk(idMentorado);

        //if (!mentorado) {
        //    return res.status(404).json({ error: 'Mentorado não encontrado.' });
       // }

        await mentorado.update(dadosMentorado);
 
    }
    async deleteMentorado (idMentorado){
        const mentorado = await MentoradoModel.findByPk(idMentorado);

       // if (!mentorado) {
        //    return res.status(404).json({ error: 'Mentorado não encontrado.' });
        //}

        return mentorado.destroy();
    }
}