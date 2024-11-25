export default function Dashboard() {
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
        return null;
    }

    const user = JSON.parse(storedUser);

    return (
        <div className="dashboard">
            <h2>Welcome back</h2>
            <div className="last-login">
                <p>
                    <span>Your last login was on </span>
                    {user.lastLogin ? <span className="bold">
                        {new Date(user.lastLogin).toLocaleString()}
                    </span>
                        : <span>No login history</span>
                    }
                </p>

                <p>Browser: {user.browser.split(' ')[0]}</p>
                <p>Platform: {user.platform.replace(/^"|"$/g, '')}</p>
            </div>
            <p>{user.email}</p>
        </div>
    )
}
