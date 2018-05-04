// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAwx4jvwjcctqqtfb-J8WGFZt9t_SS6OEg",
    authDomain: "angular-tech.firebaseapp.com",
    databaseURL: "https://angular-tech.firebaseio.com",
    projectId: "angular-tech",
    storageBucket: "angular-tech.appspot.com",
    messagingSenderId: "885327528760"
  }
};
