import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProviders } from '../action/providerAction'
import { Provider } from '../action/types'
import { RootStore } from '../store'

const ProviderList: React.FC = () => {
    const dispatch = useDispatch()

    const providersReducer = useSelector((state: RootStore) => state.providersReducer)
    const {providers}:{providers: Provider[]} = providersReducer

    useEffect(() => {
        dispatch(getProviders())
    }, [dispatch])

    return (
        <Row>
            {providers.map((p: Provider) => (
                <Col xs={12} className='my-2' md={4} key={p.identifier}>
                    <Card className='h-100'>
                        <Card.Body>
                            <Card.Title>{p.name}</Card.Title>
                            <Card.Subtitle>{p.specialty}</Card.Subtitle>
                            <Card.Text className='mt-3'>
                                <i className="fas fa-map-marker-alt mr-2"></i>
                                {`${p.address.street}, 
                                ${p.address.city}, 
                                ${p.address.state}, 
                                ${p.address.postal_code}`}
                            </Card.Text>
                            <Card.Text>
                                <i className="fas fa-phone mr-2"></i>
                                {p.address.telephone_number}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default ProviderList
