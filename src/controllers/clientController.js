const Client = require('../models/client');

exports.createClient = async (req, res) => {
  try {
    const client = new Client(req.body);
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear cliente' });
  }
};

exports.getClients = async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
};

exports.getClientById = async (req, res) => {
  const client = await Client.findById(req.params.id);
  res.json(client);
};

exports.updateClient = async (req, res) => {
  await Client.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: 'Cliente actualizado' });
};

exports.deleteClient = async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.json({ message: 'Cliente eliminado' });
};
exports.searchClient = async (req, res) => {
  const { dui, name } = req.query;

  try {
    let clients;

    if (dui) {
      clients = await Client.find({ dui });
    } else if (name) {
      clients = await Client.find({
        name: { $regex: name, $options: 'i' }
      });
    } else {
      return res.status(400).json({
        message: 'Debe enviar dui o name para buscar'
      });
    }

    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar cliente' });
  }
};
