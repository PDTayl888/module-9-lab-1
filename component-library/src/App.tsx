import { useState } from 'react';
import './App.css'
import AlertBox from './components/AlertBox/AlertBox'
import ProductDisplay from './components/ProductDisplay/ProductDisplay.tsx';
import UserProfileCard from './components/UserProfileCard/UserProfileCard'
import type {User} from './types/index.ts'

function App() {

  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const product = {
  id: '1',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'High-quality wireless headphones with noise cancellation.',
  imageUrl: 'https://example.com/headphones.jpg',
  inStock: true
};

   const tempUser:User = {
        id:"1",
        name: "Bob",
        email: "bobby@gmail.com",
        role: "admin",
        avatarUrl: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F012%2F749%2F491%2Foriginal%2Fsurprised-pikachu-meme-icon-free-vector.jpg&sp=1770664084T95010a48497b490cd4473cd8683ed2907ba24507b48faff2ace6e148f5f0cbd6"
    };

     const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };
 

  return (
    <>
    {showAlert && (
      <AlertBox type='success' message='Hello World' onClose={() => setShowAlert(false)}>
        Testing
      </AlertBox>)}

      <UserProfileCard user= {tempUser} showEmail={true}>
      </UserProfileCard>

      <ProductDisplay
        product={product}
        showDescription={true}
        showStockStatus={true} 
        onAddToCart={handleAddToCart}   
      ></ProductDisplay>
    </>
  )
}

export default App