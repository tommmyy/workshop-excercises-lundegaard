const DOMUtil = {
  render(state, render, el) {
    el.innerHTML = render(state.get());
  }
};

const createState = (defaultState) => {
    const AppState = defaultState;

    return {
      get: () => AppState,
      addUser: (user) => {
        AppState.users = [
          ...AppState.users,
          user
        ];
      }
    };
}

const createApp = () => {
  const renderUser = (users) => users.map(({ name, surname }) => `<li>${name} ${surname}</li>`)
  const renderUserList = ({ users }) => `<ul>${renderUser(users)}</ul>`;
  const render = renderUserList;

  return {
    render,
  };
};

const state = createState({
  users: [],
});

const app = createApp();

state.addUser({
  name: 'Jan',
  surname: 'Novák',
});

DOMUtil.render(
  state,
  app.render,
  document.getElementById('root')
);
