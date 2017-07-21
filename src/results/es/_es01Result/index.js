const DOMUtil = {
  render(render, el) {
    el.innerHTML = render();
  }
};

const createApp = () => {
  const AppState = {
    users: [],
  };

  const addUser = (user) => {
    AppState.users = [...AppState.users, user];
  };

  const renderUser = (users) => users.map(({ name, surname }) => `<li>${name} ${surname}</li>`)
  const renderUserList = () => `<ul>${renderUser(AppState.users)}</ul>`;
  const render = renderUserList;

  return {
    addUser,
    render,
  };
};

const app = createApp();

app.addUser({
  name: 'Jan',
  surname: 'Novák',
});

DOMUtil.render(
  app.render,
  document.getElementById('root')
);
