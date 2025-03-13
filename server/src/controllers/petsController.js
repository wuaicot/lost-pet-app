const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Crear mascota
exports.createPet = async (req, res) => {
  try {
    const { name, type, photoUrl } = req.body;
    const qrId = Math.random().toString(36).substr(2, 9); // Generar ID único para QR

    const pet = await prisma.pet.create({
      data: {
        name,
        type,
        qrId,
        photoUrl,
        ownerId: req.user.id // Asume que el usuario está autenticado
      }
    });

    res.status(201).json(pet);
  } catch (error) {
    res.status(500).json({ error: "Error al registrar mascota" });
  }
};

// Otros métodos (actualizar, eliminar, listar)