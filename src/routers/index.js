import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { ProtectedRoute } from '../utils/Protected';
import AdminOrderPage from '../views/screens/AdminOrder';
import AdminInfoOrderPage from '../views/screens/AdminInfoOrder';
import AdminPackPage from '../views/screens/AdminPagePack';
import AdminCreatePackPage from '../views/screens/AdminCreatePack';
import AdminProductsPage from '../views/screens/AdminProducts';
import LoginPage from '../views/screens/Login';

function Routers() {
	const { isLogged } = useSelector(state => state.auth);

	return (
		<Routes>
			{/* Route order */}
			<Route
				exact
				path="/"
				element={
					<ProtectedRoute redirect="/login" dependency={isLogged} />
				}
			>
				<Route exact path="/" element={<AdminOrderPage />}></Route>
			</Route>

			<Route
				exact
				path="/order/:id"
				element={
					<ProtectedRoute redirect="/login" dependency={isLogged} />
				}
			>
				<Route
					exact
					path="/order/:id"
					element={<AdminInfoOrderPage />}
				></Route>
			</Route>

			{/* Route products */}
			<Route
				exact
				path="/"
				element={
					<ProtectedRoute redirect="/login" dependency={isLogged} />
				}
			>
				<Route
					exact
					path="/products"
					element={<AdminProductsPage />}
				></Route>
			</Route>

			{/* Route pack */}
			<Route
				exact
				path="/page-pack"
				element={
					<ProtectedRoute redirect="/login" dependency={isLogged} />
				}
			>
				<Route
					exact
					path="/page-pack"
					element={<AdminPackPage />}
				></Route>
			</Route>

			<Route
				exact
				path="/pack/new"
				element={
					<ProtectedRoute redirect="/login" dependency={isLogged} />
				}
			>
				<Route
					exact
					path="/pack/new"
					element={<AdminCreatePackPage />}
				></Route>
			</Route>

			{/* Route auth */}
			<Route
				exact
				path="/login"
				element={<ProtectedRoute redirect="/" dependency={!isLogged} />}
			>
				<Route exact path="/login" element={<LoginPage />} />
			</Route>
		</Routes>
	);
}

export default Routers;
