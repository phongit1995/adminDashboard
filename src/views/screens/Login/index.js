import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import useAPI from '../../../api/auth';
import { login } from '../../../actions/auth';
import styles from './Login.module.scss';

function LoginPage() {
	const dispatch = useDispatch();
	const [dataForm, setDataForm] = useState({});

	/********** update state date form **********/
	const handleChange = e => {
		const key = e.target.name;
		const value = e.target.value;
		setDataForm(prev => ({ ...prev, [key]: value }));
	};

	/********** submit form login **********/
	const handleSubmit = e => {
		e.preventDefault();
		console.log(dataForm);
		(async () => {
			try {
				const res = await useAPI.login(dataForm);
				dispatch(login(res.data));
			} catch (err) {
				console.log(err);
			}
		})();
	};

	return (
		<main className={styles.main}>
			<div className={styles.form}>
				<h1 className={styles.title}>Admin login</h1>
				<Form onSubmit={handleSubmit}>
					<Form.Group className="mb-3" controlId="username">
						<Form.Label>User name</Form.Label>
						<Form.Control
							type="text"
							name="username"
							placeholder="Enter user name"
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							name="password"
							onChange={handleChange}
							placeholder="Enter password"
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Login
					</Button>
				</Form>
			</div>
		</main>
	);
}

export default LoginPage;
