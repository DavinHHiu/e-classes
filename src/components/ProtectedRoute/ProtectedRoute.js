import { useContext } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { UserContext } from '~/App';

function ProtectedRoute({ component: Component, layout: Layout, ...rest }) {
    const navigate = useNavigate();

    if (!useContext(UserContext)) {
        navigate('/login');
        return null;
    }

    return (
        <Route
            element={
                <Layout>
                    <Component />
                </Layout>
            }
            {...rest}
        />
    );
}

export default ProtectedRoute;
