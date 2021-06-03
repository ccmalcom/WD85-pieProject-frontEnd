import React, { useState, useEffect } from 'react';
import './Pies.css';
import DisplayPies from './Pie/Pie'
import CreatePie from './CreatePie/CreatePie';

const Pies = (props) => {
    console.log(props);
    const [pies, setPies] = useState([]);
    const [createPie, setCreatePie] = useState(false)

    const fetchPies = () => {
        let url = 'http://localhost:4000/pies/';

        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
            .then(res => res.json())
            .then(json => setPies(json))
    }

    useEffect(() => {
        fetchPies();
    }, [createPie])

    const buttonHandler = () => setCreatePie(true);
    // useEffect runs a function as soon as the component loads

    const pie = [
        {
            nameOfPie: 'pumpkin',
            baseOfPie: 'pumpkin puree',
            crust: 'pastry',
            timeToBake: 50,
            servings: 8,
            rating: 4
        },
        {
            nameOfPie: 'Apple',
            baseOfPie: 'candied apple',
            crust: 'pastry',
            timeToBake: 40,
            servings: 8,
            rating: 10
        },
        {
            nameOfPie: 'chocolate',
            baseOfPie: 'pudding',
            crust: 'pastry',
            timeToBake: 20,
            servings: 3,
            rating: 5
        },
    ]

    return (
        <>
            {createPie ? <CreatePie setCreatePie={setCreatePie} sessionToken={props.sessionToken} /> : null}
            {!createPie? <button onClick={buttonHandler}>Create Pie!</button> : null}

            <table>
                <thead>
                    <tr>
                        <th>Name of Pie</th>
                        <th>Base of Pie</th>
                        <th>Crust</th>
                        <th>Bake Time</th>
                        <th>Servings</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <DisplayPies pie={pies} />
                </tbody>
            </table>
        </>
                )
}

export default Pies;