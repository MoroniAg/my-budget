import React from 'react';
import Loading from '../utils/Loading';

function WithAuthentication({ children }: { children: React.ReactNode }) {

    const [isLoading, setIsLoading] = React.useState(true);
    
    React.useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            window.location.replace('/')
        } else {
            setIsLoading(false)
        }

    }, []);

    return (
        <>
            {isLoading ? <Loading /> : children}
        </>
    )
}

export default WithAuthentication;