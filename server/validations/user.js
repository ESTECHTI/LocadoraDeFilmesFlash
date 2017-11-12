const q = require('q');

function validateRequired(userToValidate) {
  if (!userToValidate || !userToValidate.email || !userToValidate.password) {
    return q.reject({ status: 400, content: 'Você precisa fornecer seu e-mail e senha' });
  }

  return q.resolve(userToValidate.email);
}

function validateToInsert(user) {
  if (user) {
    return q.reject({ status: 400, content: 'Este e-mail já existe' });
  }
  return q.resolve();
}

function validateToLogin(user) {
  if (!user) {
    return q.reject({ status: 401, content: 'Usuário não encontrado' });
  }
  return q.resolve(user);
}

module.exports = {
  validateRequired,
  validateToInsert,
  validateToLogin
};
