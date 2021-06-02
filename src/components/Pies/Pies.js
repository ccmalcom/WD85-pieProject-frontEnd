import React, {useState, useEffect} from 'react';
import './Pies.css';
import DisplayPies from './Pie/Pie'

const Pies = (props) =>{
    console.log(props);
    const [pies, setPies] = useState([]);

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

    return(
        <div>
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
                    <DisplayPies pie={pie}/>
                </tbody>
            </table>
        </div>
    )
}

export default Pies;