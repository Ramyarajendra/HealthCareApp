import express from 'express'
import { searchProvider, getProviders } from '../controllers/providerController'

const router: express.Router = express.Router()

router.route('/').post(searchProvider).get(getProviders)

export default router