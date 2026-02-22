import './App.css'
import AlertBox from './components/AlertBox/AlertBox'
import UserProfileCard from './components/UserProfileCard/UserProfileCard'
import type {User} from './types/index.ts'

function App() {

   const tempUser:User = {
        id:"1",
        name: "Bob",
        email: "bobby@gmail.com",
        role: "admin",
        avatarUrl: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F012%2F749%2F491%2Foriginal%2Fsurprised-pikachu-meme-icon-free-vector.jpg&sp=1770664084T95010a48497b490cd4473cd8683ed2907ba24507b48faff2ace6e148f5f0cbd6"
    };

    const x = (uid: string) =>{
      console.log(uid);
    }

  return (
    <>
      <AlertBox type='success' message='Hello World'>
        Testing
      </AlertBox>
      <AlertBox type='warning' message='Goodbye'>
          Testing123
      </AlertBox>

      <UserProfileCard user= {tempUser} showEmail={true}>
        Card1
      </UserProfileCard>
    </>
  )
}

export default App