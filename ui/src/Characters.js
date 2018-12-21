import React from "react";
import PlayerCharacterSearch from './searches/PlayerCharacter.js';
import PlayerCharacterDetails from './details/PlayerCharacter.js';


class Characters extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col sm={4}>
                        <PlayerCharacterSearch />
                    </Col>
                    <Col sm={8}>
                        <PlayerCharacterDetails />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Characters;