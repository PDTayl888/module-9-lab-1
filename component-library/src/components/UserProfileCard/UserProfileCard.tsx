import type { UserProfileCardProps } from '../../types'

function UserProfileCard({user, showEmail,showRole, onEdit,children}: UserProfileCardProps) {
    return (
        <>
        <h1>Title</h1>
        <p>{user.name}</p>
        {showEmail && <p>Email: {user.email}</p>}
        {showRole && <p>Role: {user.role}</p>}
        {onEdit && 
            (<button onClick={() => onEdit(user.id)}>Edit Profile</button>)};
        {children}
        </>
    )
}

export default UserProfileCard; 