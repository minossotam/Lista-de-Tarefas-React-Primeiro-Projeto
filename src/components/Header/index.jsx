import "./styles.css";

function Header() {
  return (
    <header id="header">
      <nav>
        <span className="nav-brand">
          <span>Let's</span>DoIt
        </span>

        <div className="profile">
          <img
            src="https://avatars.githubusercontent.com/u/93089995?v=4"
            alt="Tamy Minosso - Imagem de Perfil"
          />

          <div>
            <p className="name">Tamy Minosso</p>
            <p className="welcome-message">Bem-vindo(a) ao Let'sDoIt</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;