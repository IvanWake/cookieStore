import Categories from '../../components/Categories/Categories';
import MobileCategories from '../../components/Mobile/MobileCategories';
import MobileFooter from '../../components/Mobile/MobileFooter';
import MobileHeader from '../../components/Mobile/MobileHeader';
import MobileProductsList from '../../components/Mobile/MobileProductsList';

const MobileHome = () => {
  return (
      <>
        <MobileHeader />
        <MobileCategories />
        <MobileProductsList />
        <MobileFooter />
      </>
  );
};

export default MobileHome;