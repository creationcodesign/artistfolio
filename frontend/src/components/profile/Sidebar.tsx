export default function Sidebar({ selectedAction, setSelectedAction }: any) {
    const actions = ['dashboard', 'projects', 'about', 'skills', 'contact'];

    return (
        <nav className='sidebar'>
            {actions.map((action) => (
                <span
                    key={action}
                    className={`sidebar-item ${action === selectedAction ? 'active' : ''}`}
                    onClick={() => setSelectedAction(action)}
                >
                    {action}
                </span>
            ))}
        </nav>
    )
}
