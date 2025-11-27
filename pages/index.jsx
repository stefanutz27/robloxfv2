import { useEffect, useState } from 'react';
export default function Home() {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('rbx_user');
      if (saved) setUser(JSON.parse(saved));
    } catch (e) { console.error(e); }
  }, []);

  function signIn(e) {
    e && e.preventDefault();
    if (!name.trim() || !username.trim()) return alert('Completează numele și username-ul');
    const data = { name: name.trim(), username: username.trim(), createdAt: new Date().toISOString() };
    localStorage.setItem('rbx_user', JSON.stringify(data));
    setUser(data);
    setShowModal(false);
    // redirect to Roblox official site
    window.location.href = 'https://www.roblox.com';
  }

  function signOut() {
    localStorage.removeItem('rbx_user');
    setUser(null);
    setName('');
    setUsername('');
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white font-sans">
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white/60 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 text-white text-xl font-bold rounded-sm flex items-center justify-center">R</div>
          <div>
            <h1 className="text-xl font-extrabold">PlayBox</h1>
            <p className="text-xs text-gray-500">Experiențe create de tine</p>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          {user ? (
            <>
              <div className="text-sm text-gray-600">Salut, <b>{user.name}</b></div>
              <button onClick={() => setShowModal(true)} className="px-3 py-1 bg-blue-600 text-white rounded">Profil</button>
              <button onClick={signOut} className="px-3 py-1 border rounded">Sign out</button>
            </>
          ) : (
            <button onClick={() => setShowModal(true)} className="px-4 py-2 bg-green-600 text-white rounded font-semibold">Sign in</button>
          )}
        </nav>
      </header>

      <main className="px-6 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-extrabold mb-4">Joacă. Creează. Conectează-te.</h2>
            <p className="text-gray-600 mb-6">O pagină demo inspirată vizual de platforme de gaming social.</p>

            {!user ? (
              <button onClick={() => setShowModal(true)} className="px-5 py-3 bg-indigo-600 text-white rounded-lg">Începe</button>
            ) : (
              <div>
                <p className="text-sm text-gray-700">Username: <b>{user.username}</b></p>
                <a href="https://www.roblox.com" target="_blank" rel="noreferrer" className="inline-block mt-3 px-4 py-2 bg-purple-600 text-white rounded">Deschide Roblox</a>
              </div>
            )}
          </div>

          <div className="p-6 bg-white rounded-xl shadow border">
            <h3 className="text-xl font-bold mb-3">Top experiențe</h3>
            <ul className="space-y-3">
              <li className="p-3 bg-gray-50 rounded flex justify-between">
                <div>
                  <div className="font-semibold">Aventură Urbană</div>
                  <div className="text-xs text-gray-500">Multiplayer · 12k vizite</div>
                </div>
                <button className="px-3 py-1 border rounded text-sm">Joacă</button>
              </li>
              <li className="p-3 bg-gray-50 rounded flex justify-between">
                <div>
                  <div className="font-semibold">RoboBattle</div>
                  <div className="text-xs text-gray-500">PvP · 8k vizite</div>
                </div>
                <button className="px-3 py-1 border rounded text-sm">Joacă</button>
              </li>
              <li className="p-3 bg-gray-50 rounded flex justify-between">
                <div>
                  <div className="font-semibold">Parkour Extreme</div>
                  <div className="text-xs text-gray-500">Singleplayer · 5k vizite</div>
                </div>
                <button className="px-3 py-1 border rounded text-sm">Joacă</button>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="text-center py-6 text-xs text-gray-400">Demo neoficială — fără afiliere Roblox Corporation.</footer>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white p-6 rounded-2xl shadow max-w-sm w-full relative">
            <h3 className="text-xl font-bold mb-2">Sign in</h3>
            <p className="text-sm text-gray-500 mb-4">Completează numele și username-ul. Vei fi redirecționat către Roblox.</p>

            <form onSubmit={signIn} className="space-y-3">
              <div>
                <label className="text-sm font-medium">Nume</label>
                <input className="w-full mt-1 p-2 border rounded" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium">Username</label>
                <input className="w-full mt-1 p-2 border rounded" value={username} onChange={e => setUsername(e.target.value)} />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowModal(false)} className="px-3 py-1 border rounded">Anulează</button>
                <button type="submit" className="px-3 py-1 bg-green-600 text-white rounded">Continuă</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
