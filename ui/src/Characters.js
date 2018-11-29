import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';

class Characters extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={6} md={3}>
                        Hello, world!
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Characters;