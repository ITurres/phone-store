import { CartIcon } from '../icons';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart); //? state = store

  return (
    <nav className="nav-center">
      <h3>Phone Store</h3>
      <div className="nav-container">
        <CartIcon />
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
