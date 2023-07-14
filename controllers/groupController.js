import Group from '../models/Group.js';
import Amount from '../models/Amount.js';

const all = async (req, res, next) => {
    try {
        let docs = await Group.find({})
        res.json(JSON.stringify(docs))
    } catch (error) {
        next(error)
    }
}
const errorHandler = (err, req, res, next) => {
    console.error(err); // Exibe o erro no console para fins de depuração
    
    // Verifica se a resposta já foi enviada
    if (res.headersSent) {
      return next(err);
    }
    
    // Define o status da resposta como 500 (Erro interno do servidor)
    res.status(500);
    
    // Envia uma resposta de erro JSON contendo a mensagem de erro
    res.json({
      error: 'Ocorreu um erro no servidor',
      message: err.message
    });
  };

const same = async (req, res) => {
    // let type = req.params.type;
    let group = req.params.group;
    try {
        let doc = await find({ groupIndex: group })
        res.json(JSON.stringify(doc))
    } catch (error) {
        res.send(error);
    }
}

const addGroup = async (req, res) => {
    let group = new Group(req.body)
    try {
        let doc = await group.save();
        res.send(doc);
    } catch (error) {
        res.status(404).send(error);
    }
}

const deleteGroup = async (req, res) => {
    let id = req.body.id;
    try {
        await Group.findByIdAndDelete(id);
        // await Amount.find({ group: id }).deleteMany()
        res.json(JSON.stringify(id))
        // res.status(200).send(id);

    } catch (error) {
        res.status(404).send(error)
    }
}

export default { all, same, addGroup, deleteGroup }