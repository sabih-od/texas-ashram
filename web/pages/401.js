import Link from 'next/link';

const Error401 = () => {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  };

  const linkStyle = {
    fontSize: '1.2rem',
    color: 'blue',
    textDecoration: 'underline',
  };

  return (
      <div style={containerStyle}>
        <h1 style={headingStyle}>401 - You are not authorized! 🔐</h1>
        <p style={paragraphStyle}>You don&prime;t have permission to access this page. Go Home!</p>
        <Link href="/" style={linkStyle} className="text-danger">
          Go back to the homepage
        </Link>
      </div>
  );
};

export default Error401;