const Button = ({ selected, setSelected, setReqUrl }) => {
  const handleButtonClick = (url, name) => {
    setReqUrl(url);
    setSelected(name);
  };

  return (
    <nav>
      <ul className="nav-list">
        <li>
          <button
            className={selected === 'Users' ? 'nav-button selected' : 'nav-button'}
            onClick={() => handleButtonClick('users', 'Users')}
          >
            Users
          </button>
        </li>

        <li>
          <button
            className={selected === 'Posts' ? 'nav-button selected' : 'nav-button'}
            onClick={() => handleButtonClick('posts', 'Posts')}
          >
            Posts
          </button>
        </li>

        <li>
          <button
            className={selected === 'Comments' ? 'nav-button selected' : 'nav-button'}
            onClick={() => handleButtonClick('comments', 'Comments')}
          >
            Comments
          </button>
        </li>

      </ul>
    </nav>
  )
};

export default Button;
