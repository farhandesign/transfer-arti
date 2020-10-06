
const getError = (errors, prop) => {
  //prop === 'email' || 'password' ||  'key'
  try {
    return errors.mapped()[prop].msg;
  } catch (err) {
    return '';
  }
};

module.exports = ({ req, errors }) => {
    return `
      <form method="POST">
          <input name="email" placeholder="email" />
          ${getError(errors, 'email')}
          <input name="password" placeholder="password" />
          ${getError(errors, 'password')}
          <input name="key" placeholder="key" />
          ${getError(errors, 'key')}
          <button>Create Account</button>
      </form>
    `;
}