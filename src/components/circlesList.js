import Circle from './circle.js'
import Button from './button.js'
import React from 'react';
import {randomColorStyle, randomNumber, generateKey} from '../utils/utilFns.js'

export class CirclesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                // {number: randomNumber(), color: randomColorStyle(), key: generateKey()},
                // {number: randomNumber(), color: randomColorStyle(), key: generateKey()},
                // {number: randomNumber(), color: randomColorStyle(), key: generateKey()},
                // {number: randomNumber(), color: randomColorStyle(), key: generateKey()},
                // {number: randomNumber(), color: randomColorStyle(), key: generateKey()},
                // {number: randomNumber(), color: randomColorStyle(), key: generateKey()}
            ]
        }
    }

    addCircle = () => {
        console.log("addCircle")
        this.setState((state) => {
            const cloneData = state.data.slice();
            cloneData.push({
                number: randomNumber(),
                color: randomColorStyle(),
                key: generateKey()
            })
            return {data:cloneData}
        })
    }
    removeClick = (deleteId) => {
        console.log("removeClick")
        this.setState(function (state) {
            return {data: state.data.filter(value => deleteId !== value.key)}
        })
    }

    render() {
        return (
            <div>
                <Button addCircle={this.addCircle}/>
                <div className='circleContainer'>
                    {this.state.data.map((circleProps) =>
                        <Circle key={circleProps.key}
                                number={circleProps.number}
                                color={circleProps.color}
                                removeClick={this.removeClick.bind(this, circleProps.key)}></Circle>
                    )}
                </div>
            </div>
        )
    }

}

