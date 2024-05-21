import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.habitacion.createMany({
        data: [
            {
                costo_dia: 1000,
                numero_habitacion: 101,
                libre: true,
            },
            {
                costo_dia: 1200,
                numero_habitacion: 102,
                libre: false,
            },
            {
                costo_dia: 1500,
                numero_habitacion: 103,
                libre: false,
            },
            {
                costo_dia: 2000,
                numero_habitacion: 104,
                libre: true,
            }
        ],
    });
}
main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })