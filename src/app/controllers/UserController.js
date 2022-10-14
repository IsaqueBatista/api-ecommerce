/* Por estar usando o padrão MVC, os controllers tem esse padrão: 

    store  =>  Cadastrar / Adicionar
    index  =>  Listas vários
    show   =>  Listar apenas UM
    update =>  Atualizar
    delete =>  Deletar
*/

import { v4 } from "uuid"
import User from '../models/User'


class UserController {
    async store(request, response) {
        const { name, email, password_hash, admin } = request.body

        const user = await User.create({
            id: v4(),
            name,
            email,
            password_hash,
            admin,
        })

        return response.status(201).json({ id: user.id, name, email, admin })
    }
}

export default new UserController()