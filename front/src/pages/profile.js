import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProfileEdit from '../components/ProfileEdit';

const ProfilePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch('/api/user/1');  // 실제 사용자 ID로 변경
            const data = await res.json();
            setUser(data);
        };
        fetchUser();
    }, []);

    return (
        <div>
            {user && <ProfileEdit user={user} />}
            <Navbar />
        </div>
    );
};

export default ProfilePage;
