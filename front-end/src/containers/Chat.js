import React, {Component, Fragment} from 'react';
import {Button, Card, CardText, Form, FormGroup, Input, Label} from "reactstrap";
import {getData, sendData} from "../store/actions";
import {connect} from "react-redux";

class Chat extends Component {
	state = {
		author: '',
		message: ''
	};

	componentDidMount() {
		this.props.getData();
		setInterval(this.props.getData, 2000);
	}

	valueChanged = event => {
		this.setState({[event.target.name]: event.target.value});
	};

	submitData = event => {
		event.preventDefault();

		const data = {
			author: this.state.author,
			message: this.state.message
		};

		if (this.state.author === '' || this.state.message === '') {
			alert('Author and message must be present in the request!');
		}
		this.props.sendData(data);
	};


	render() {
		return (
			<Fragment>
				<Form onSubmit={(event, data) => this.submitData(event, data)}>
					<FormGroup>
						<Label for="author">Author</Label>
						<Input
							type="text"
							name="author"
							id="author"
							placeholder="Enter author"
							value={this.state.author}
							onChange={event => this.valueChanged(event)}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="message">Message</Label>
						<Input
							type="text"
							name="message"
							id="message"
							placeholder="Enter message"
							value={this.state.message}
							onChange={event => this.valueChanged(event)}
						/>
					</FormGroup>
					<Button type="submit">Send</Button>
				</Form>
				{this.props.messages.map(message => (
					<Card key={message.id}
						  style={{marginTop: '10px', padding: '10px'}}
					>
						<CardText><strong>Author: </strong>{message.author}</CardText>
						<CardText><strong>Datetime: </strong>{message.datetime}</CardText>
						<CardText><strong>Message: </strong>"{message.message}"</CardText>
					</Card>
				))}
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	messages: state.messages,
	error: state.error
});

const mapDispatchToProps = dispatch => ({
	sendData: data => dispatch(sendData(data)),
	getData: () => dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);