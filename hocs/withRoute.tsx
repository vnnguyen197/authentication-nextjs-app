import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Options {
  isProtected: boolean;
}

const withRoute = ( WrappedComponent: FC, { isProtected}: Options = { isProtected: true}) => {
  
  // eslint-disable-next-line react/display-name
  return () => {
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    // Set mounted status when window loaded
    useEffect(() => {
      setMounted(true);
    }, []);

    if (mounted) {
      if (typeof window !== 'undefined') {
        const accessToken = localStorage['token'];
        console.log('accessToken', accessToken);

        if (!accessToken && !isProtected) {
          return <WrappedComponent />;
        }

        if (!accessToken) {
          router.push('/login');
          return <div>Loading...</div>;
        }

        if (accessToken && !isProtected) {
          router.back();
          return <div>Loading...</div>;
        }
        return <WrappedComponent />;
      }
    }
    return null;
  }
}

export default withRoute;
