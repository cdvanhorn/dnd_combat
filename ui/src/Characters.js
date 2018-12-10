import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import PlayerCharacterSearch from './searches/PlayerCharacter.js';
import PlayerCharacterDetails from './details/PlayerCharacter.js';


class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pc_selected: {}
        };
        this.updateCharacter = this.updateCharacter.bind(this);
    }

    selectCharacter = (character) => {
        this.setState({
            pc_selected: character
        });
    }

    updateCharacter = (field, value) => {
        this.setState({
            pc_selected: Object.assign(this.state.pc_selected, {[field]: value})
        })
    }

    render() {
        console.log("main render");
        return (
            <Grid fluid>
                <Row>
                    <Col sm={4}>
                        <PlayerCharacterSearch 
                            selectCharacter={this.selectCharacter} />
                    </Col>
                    <Col sm={8}>
                        <PlayerCharacterDetails 
                            selectedPlayerCharacter={this.state.pc_selected}
                            updateCharacter={this.updateCharacter}   
                        />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Characters;