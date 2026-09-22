import { useState } from 'react';
import './Sidebar.css';

export function Sidebar({
                            chats,
                            activeChatId,
                            onSelectChat,
                            onCreateChat,
                            onLogout,
                        }) {
    const [showForm, setShowForm] = useState(false);
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const digits = phone.replace(/\D/g, '');
        if (digits.length < 10) {
            alert('Введите номер в формате 7XXXXXXXXXX');
            return;
        }
        onCreateChat(digits, name.trim() || `+${digits}`);
        setPhone('');
        setName('');
        setShowForm(false);
    };

    return (
        <aside className="sidebar">
            <header className="sidebar__header">
                <h1 className="sidebar__title">MAX</h1>
                <button
                    className="sidebar__icon-btn"
                    title="Выйти"
                    onClick={onLogout}
                >
                    ⎋
                </button>
            </header>

            <button
                className="sidebar__new-chat"
                onClick={() => setShowForm((v) => !v)}
            >
                {showForm ? 'Отмена' : '+ Новый чат'}
            </button>

            {showForm && (
                <form className="sidebar__form" onSubmit={handleSubmit}>
                    <input
                        type="tel"
                        placeholder="Номер телефона"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        autoFocus
                    />
                    <input
                        type="text"
                        placeholder="Имя (необязательно)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit">Создать</button>
                </form>
            )}

            <nav className="sidebar__chats">
                {chats.length === 0 && (
                    <p className="sidebar__empty">Нет чатов</p>
                )}

                {chats.map((chat) => (
                    <button
                        key={chat.id}
                        className={
                            'chat-item' +
                            (chat.id === activeChatId ? ' chat-item--active' : '')
                        }
                        onClick={() => onSelectChat(chat.id)}
                    >
                        <div className="chat-item__avatar">
                            {(chat.name || '?').trim().charAt(0).toUpperCase()}
                        </div>
                        <div className="chat-item__body">
                            <span className="chat-item__name">{chat.name}</span>
                            <span className="chat-item__preview">
                {chat.lastMessage || 'Нет сообщений'}
              </span>
                        </div>
                    </button>
                ))}
            </nav>
        </aside>
    );
}