import React, { useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { getProviders, searchProviders } from '../action/providerAction'

const Search: React.FC = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const submithandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(searchProviders({ name }))
    }

    const clearHandler = (e:React.MouseEvent<HTMLElement, MouseEvent>) => {
        dispatch(getProviders())
        setName('')
    }

    return (
        <>
            <Form onSubmit={submithandler} className='my-4'>
                <Form.Row>
                    <Col xs={12} md={9}>
                    <Form.Control
                        id="searchName" 
                        placeholder="Search Provider"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    </Col>
                    <Col xs={12} md={3}>
                        <Button type='submit' variant="outline-primary mx-2">Search</Button>
                        <Button onClick={clearHandler} variant="outline-primary mx-2">Clear</Button>
                    </Col>
                </Form.Row>
            </Form>
        </>
    )
}

export default Search
