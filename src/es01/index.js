var DOMUtil = {
  render: function(render, el) {
    el.innerHTML = render();
  }
};

var app = (function() {
  var AppState = {
    users: [],
  };

  function addUser(user) {
    var newState = AppState.users.slice();
    newState.push(user);

    AppState.users = newState;
  }

  function render() {
    return renderUserList();
  }

  function renderUserList() {
    return '<ul>' +
      AppState.users.map(function(user) {
      return '<li>' + user.name + ' ' + user.surname + '</li>';
    }) +
      '</ul>';
  }

  return {
    addUser: addUser,
    render: render,
  };
})();

app.addUser({
  name: 'Jan',
  surname: 'Novák',
});

DOMUtil.render(
  app.render,
  document.getElementById('root')
);
