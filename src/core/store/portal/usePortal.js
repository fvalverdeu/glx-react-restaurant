import { useSelector } from 'react-redux';
import PortalSelector from './selector';

const usePortal = () => useSelector(PortalSelector)

export default usePortal