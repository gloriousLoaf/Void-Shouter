import netlifyIdentity from 'netlify-identity-widget';

export const auth = netlifyIdentity;

export const init = (cb) => {
  netlifyIdentity.on('init', (user) => {
    cb(user);
  });
  netlifyIdentity.init({
    APIUrl: process.env.NEXT_PUBLIC_AUTH_ENDPOINT,
  });
};

export const authLogIn = (cb) => {
  netlifyIdentity.open();
  netlifyIdentity.on('login', (user) => {
    cb(user);
    netlifyIdentity.close();
  });
};

export const authLogOut = (cb) => {
  netlifyIdentity.logout();
  netlifyIdentity.on('logout', () => {
    cb();
  });
};
