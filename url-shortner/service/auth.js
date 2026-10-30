const sessionIdUsermap = new Map();

function setUser(id, user) {
  return sessionIdUsermap.set(id, user);
}

function getUser(id) {
  return sessionIdUsermap.get(id);
}

module.exports = { setUser, getUser };
