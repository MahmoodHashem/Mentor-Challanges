import { useState, useEffect, useRef } from 'react'

function UserSwitcher({ users, currentUser, onUserChange, onUserEdit }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editingUser, setEditingUser] = useState(null)
    const [newUsername, setNewUsername] = useState('')
    const [showTooltip, setShowTooltip] = useState(true)
    const fileInputRef = useRef(null)


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTooltip(false)
        }, 5000)

        return () => clearTimeout(timer)
    }, [])

    const handleEditClick = (user) => {
        setEditingUser(user)
        setNewUsername(user.username)
        setIsEditing(true)
    }

    const handleImageChange = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                onUserEdit(editingUser.username, newUsername, reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSave = () => {
        onUserEdit(editingUser.username, newUsername)
        setIsEditing(false)
    }

    return (
        <nav className="flex items-center  bg-white p-4 rounded-lg shadow mb-4">

            <div className="lgo text-black font-bold text-xl">Mahmood Hashemi</div>

            <div className="flex ml-auto  items-center gap-4">

                {users.map(user => (
                    <button
                        key={user.username}
                        onClick={() => onUserChange(user)}
                        className={`flex items-center gap-2 p-2 rounded-lg ${currentUser.username === user.username ? 'bg-moderateBlue text-white' : 'hover:bg-veryLightGray'
                            }`}
                    >
                        <img
                            src={user.image.png}
                            alt={user.username}
                            className="w-8 h-8 rounded-full"
                        />
                        <span className='hidden lg:block' >{user.username}</span>
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                handleEditClick(user)
                            }}
                            className="ml-2 text-sm text-grayishBlue hover:text-moderateBlue"
                        >
                            Edit
                        </button>

                    </button>
                ))}
            </div>
            {isEditing && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg max-w-sm">
                        <h2 className="text-darkBlue font-bold text-xl mb-4">Edit User</h2>
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={editingUser.image.png}
                                alt={editingUser.username}
                                className="w-16 h-16 rounded-full"
                            />
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="text-moderateBlue hover:text-lightGrayishBlue"
                            >
                                Change Image
                            </button>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </div>
                        <input
                            type="text"
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                            className="w-full border rounded-lg p-2 mb-4"
                        />
                        <div className="flex gap-4">
                            <button
                                onClick={() => setIsEditing(false)}
                                className="flex-1 bg-grayishBlue text-white py-2 rounded-lg hover:opacity-70"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="flex-1 bg-moderateBlue text-white py-2 rounded-lg hover:opacity-70"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className='relative'>
                <button
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className='ml-5 border bg-gray-700 text-white p-2 rounded-full w-9 h-9 content-center text-center text-sm' >?</button>
                {showTooltip && (
                    <div className="absolute -right-2 bg-darkBlue text-white px-4 py-2 w-40 rounded-lg text-sm">
                        Click on a user avatar to switch current user
                        <div className="absolute -top-2 right-0 transform -translate-x-1/2 w-4 h-4 bg-darkBlue rotate-45"></div>
                    </div>
                )}

            </div>

        </nav>
    )
}

export default UserSwitcher
