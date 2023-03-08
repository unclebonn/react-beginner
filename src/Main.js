import { render } from '@testing-library/react';
import React , {Component} from 'react';
import PlayersPresentation from './PlayersFootball/PlayersPresentation';
import { Players } from './shared/ListOfPlayers';

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            player : Players,
        };
    }

    render(){
        return(
            <PlayersPresentation player = {this.state.player}/>
        );
    }
}

