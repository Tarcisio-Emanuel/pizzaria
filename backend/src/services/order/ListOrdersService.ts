import prismaClient from "../../prisma"


class ListOrdersService {

    async execute() {

        const listOrdersService = prismaClient.order.findMany({
            where: {
                draft: false,
                status: false,
            },
            orderBy: {
                created_at: "desc"
            }
        })

        return listOrdersService;
    }
}


export { ListOrdersService }