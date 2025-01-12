import { useParams } from 'react-router-dom'

const Profile = () => {
  const { username } = useParams()

  return (
    <div
      className='profile'
      style={{ backgroundColor: 'lightcoral', height: '100vh' }}
    >
      <h1>Profile Page</h1>
      <h2>Welcome, {username}!</h2>
    </div>
  )
}

export default Profile
