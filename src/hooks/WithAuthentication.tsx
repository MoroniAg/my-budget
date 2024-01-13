import React from 'react';
import Loading from '../utils/Loading';
import Cookies from 'js-cookie';

function WithAuthentication({ children }: { children: React.ReactNode }) {

    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const token = Cookies.get('token')
        const expires = Number(Cookies.get('expires') || 0)
        if (!token || expires < new Date().getTime()) {
            Cookies.remove('token')
            Cookies.remove('expires')
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