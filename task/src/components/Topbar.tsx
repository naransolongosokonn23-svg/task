export default function Topbar() {
  return (
    <header className="topbar">
      <input className="search" placeholder="Search" />
      <div className="topbar-right">
        <button className="btn-outline">+ Create New ⌄</button>
        <div className="user">
          <div className="avatar">R</div>
          <div>
            <strong>Reyhan Adinata</strong>
            <small>Lead Product</small>
          </div>
        </div>
      </div>
    </header>
  );
}
