const BoookingModel = require('../models/booking');


class BookingController {
  async listAllBookins(req, res) {

    try {
      const allBookings = await BoookingModel.find();

      return res.status(200).json(allBookings)
    } catch (error) {
      return res.status(500).json({ message: error.message})
    }

  }

  async registerBooking(req, res) {
    const {date, service, user_name, user_phone } = req.body;

    if(!date) {
      return res.status(400).json({message: "Escolha uma data para continuar."})
    }
    
    
    if(!service) {
      return res.status(400).json({message: "Selecione um serviço para continuar."})
    }

    
    if(!user_name) {
      return res.status(400).json({message: "Insira seu nome para continuar."})
    }

    
    if(!user_phone) {
      return res.status(400).json({message: "Insira seu telefone para continuar."})
    }
    try {

      const bookingRegister = await BoookingModel.create({
        date, 
        service,
        user_name,
        user_phone
      });

      if(!bookingRegister) {
        return res.status(400).json({ message:  "Não foi possivel realizar o agendamento."})
      }

      return res.status(201).json({message:  "Agendamento realizado com sucesso!"});
    } catch (error) {
      return res.status(500).json({ message: error.message})
    }
  }

}

module.exports = new BookingController();