import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute({ redirect, dependency = null }) {
	return dependency ? <Outlet /> : <Navigate to={redirect} />;
}

export function ProtectedComponent({ dependency, children }) {
	return <React.Fragment>{dependency && children}</React.Fragment>;
}
