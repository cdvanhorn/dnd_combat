import React from "react";

import {Avatar} from "react-toolbox/lib/avatar";
import {Input} from "react-toolbox/lib/input";
import {Dropdown} from "react-toolbox/lib/dropdown";
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class CharacterHeader extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col sm={1}>
                        <Avatar title={this.props.character.name}/>
                    </Col>
                    <Col sm={11}>
                        <Input
                            type='text'
                            label='Character Name'
                            name='name'
                            value={this.props.character.name}
                            onChange={this.props.handleChange.bind(this, 'name')}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Input
                            type='number'
                            label='Level'
                            name='level'
                            value={this.props.character.level}
                            onChange={this.props.handleChange.bind(this, 'level')}
                        />
                    </Col>
                    <Col sm={4}>
                        <Dropdown
                            label="Race"
                            auto
                            source={this.props.races}
                            value={this.props.character.race_id}
                            labelKey={"name"}
                            valueKey={"id"}
                            onChange={this.props.handleChange.bind(this, 'race_id')}
                        />
                    </Col>
                    <Col sm={4}>
                        <Dropdown
                            label="Class"
                            auto
                            source={this.props.classes}
                            value={this.props.character.class_id}
                            labelKey={"name"}
                            valueKey={"id"}
                            onChange={this.props.handleChange.bind(this, 'class_id')}
                        />
                    </Col>
                </Row>
            </Grid>
        );
    }
}