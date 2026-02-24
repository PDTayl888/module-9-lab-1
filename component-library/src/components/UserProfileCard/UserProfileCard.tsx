import type { UserProfileCardProps } from '../../types'

function UserProfileCard({user, showEmail, showRole, onEdit,children}: UserProfileCardProps) {
    return (
        <div style={{border: '1px solid #fffffff',
            borderRadius: '8px', margin: '29px', backgroundColor: '#70a385',}}>
        <h4>USER PROFILE: </h4>
        <p>{user.name}</p>
        {showEmail && <p>Email: {user.email}</p>}
        {showRole && <p>Role: {user.role}</p>}
        {onEdit && 
            (<button onClick={() => onEdit(user.id)}>Edit Profile</button>)}
        {children}
        </div>
    )
}

export default UserProfileCard; 