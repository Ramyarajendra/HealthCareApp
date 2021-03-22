import {Request, Response} from 'express'
import { providers } from '../providers.json'


const searchProvider = (req: Request, res: Response) => {
    const { name } = req.body
    const re = new RegExp(name, "i")
    const filteredProviders = providers.filter(p => (
        re.test(p.name) || re.test(p.address.city) || re.test(p.specialty) || re.test(p.address.postal_code) 
    ))
    res.json(filteredProviders)
}

const getProviders = (_req: Request, res: Response) => { 
    res.json(providers)
}

export {
    searchProvider,
    getProviders
}