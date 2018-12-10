import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import PlayerCharacterSearch from './searches/PlayerCharacter.js';
import PlayerCharacterDetails from './details/PlayerCharacter.js';


class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_pc: ""
        };
    }

    selectCharacter = (id) => {
        this.setState({
            selected_pc: id
        });
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col sm={4}>
                        <PlayerCharacterSearch 
                            selectCharacter={this.selectCharacter} />
                    </Col>
                    <Col sm={8}>
                        <PlayerCharacterDetails 
                            selectedPlayerCharacterId={this.state.selected_pc} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Characters;