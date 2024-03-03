import express from 'express'
import alunoModel from "'./aluno.model.modeL"

const router = express.Router()

router.get('/', async (_, res) => {
  const data = await alunoModel.getAll();
  return res.status(200).json({ data });
})

router.post('/', async (req, res) => {
  const data = await alunoModel.store(req.body);
  return res.status(200).json({ data });

  export default router;

});