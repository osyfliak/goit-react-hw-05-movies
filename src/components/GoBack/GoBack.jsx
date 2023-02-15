import { Link, useLocation } from 'react-router-dom';

const GoBack = () => {
  const location = useLocation();
  console.log(location.state.from);
  return <Link  className="btn btn-primary" to={location.state?.from ?? '/'}>Go back</Link>;
};

export default GoBack;
