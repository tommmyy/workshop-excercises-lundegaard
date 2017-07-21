const DOMUtil = {
  render(render, el) {
    el.innerHTML = render();
  }
};

const createState = (initialState) => {
  let state = initialState;

  return {
    getState: () => state,
    setState: (newState) => {
      state = {
        ...state,
        ...newState,
      };
    }
  }
}

const createApp = () => {
  const AppState = createState({
      users: [],
  });

  const addUser = (user) => {
    AppState.setState({
      users: [...AppState.getState().users, user]
    });
  };

  const renderUser = (users) => users.map(({ name, surname }) => `<li>${name} ${surname}</li>`)
  const renderUserList = ({ users }) => `<ul>${renderUser(users)}</ul>`;
  const render = () => renderUserList(AppState.getState());

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
