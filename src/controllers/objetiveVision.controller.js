const ObjetiveVision = require("../models/objetiveVision.models");

// Listar todos los roles
exports.getAllObjetivesVisions = async (req, res) => {
  try {
    const objetiveVision = await ObjetiveVision.findAll();
    res.status(200).json(objetiveVision);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener La informacion', error: error.message });
  }
};

exports.createObjetiveVision = async (req, res) => {
  try {
    const newObjetiveVision = await ObjetiveVision.create(req.body);
    res.status(201).json({
      message: "Información creada exitosamente",
      data: newObjetiveVision,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear la información",
      error: error.message,
    });
  }
}
// Actualizar rol
exports.updateObjetiveVision = async (req, res) => {
  try {
    const { id } = req.params;
    const { tittleLanding, tittleWelcom, text1Welcom, text2Welcom, imageLogoWelcom, tittleOffer, tittleOfferCard1, textOfferCard1, tittleOfferCard2, textOfferCard2, tittleOfferCard3, textOfferCard3,tittleOfferCard4, textOfferCard4, tittleAbout, imageAbout, text1About, text2About, text3About, tittleAboutcard1, text1Aboutcard1, text2Aboutcard1, tittleAboutcard2, text1Aboutcard2, text2Aboutcard2, tittleAboutcard3, text1Aboutcard3, text2Aboutcard3, tittleMVO, imageMVOCard1, tittleMVOCard1, textMVOCard1, imageMVOCard2, tittleMVOCard2, textMVOCard2, imageMVOCard3, tittleMVOCard3, textMVOCard3 } = req.body;
    const objetiveVision = await ObjetiveVision.findByPk(id);
    if (!objetiveVision) return res.status(404).json({ message: 'La informacion no encontrado' });

    await objetiveVision.update({ tittleLanding, tittleWelcom, text1Welcom, text2Welcom, imageLogoWelcom, tittleOffer, tittleOfferCard1, textOfferCard1, tittleOfferCard2, textOfferCard2, tittleOfferCard3, textOfferCard3,tittleOfferCard4, textOfferCard4, tittleAbout, imageAbout, text1About, text2About, text3About, tittleAboutcard1, text1Aboutcard1, text2Aboutcard1, tittleAboutcard2, text1Aboutcard2, text2Aboutcard2, tittleAboutcard3, text1Aboutcard3, text2Aboutcard3, tittleMVO, imageMVOCard1, tittleMVOCard1, textMVOCard1, imageMVOCard2, tittleMVOCard2, textMVOCard2, imageMVOCard3, tittleMVOCard3, textMVOCard3 });
    res.status(200).json({ message: 'La informacion actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la informacion', error: error.message });
  }
};

