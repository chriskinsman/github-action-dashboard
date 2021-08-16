const path = require('path');
const runStatus = require('./runstatus');

const cookieSession = require('cookie-session')

const passport = require('passport')
// getting the local authentication type
const LocalStrategy = require('passport-local').Strategy

/*
const users = [
    {
      id: 1,
      username: "admin",
      password: "password"
    },
    {
      id: 2,
      username: "asdf",
      password: "asdf"
    }
]
*/
const b = Buffer.from('WwogIHsKICAgICJpZCI6IDEsCiAgICAidXNlcm5hbWUiOiAiYWRtaW4iLAogICAgInBhc3N3b3JkIjogInBhc3N3b3JkIgogIH0sCiAgewogICAgImlkIjogMiwKICAgICJ1c2VybmFtZSI6ICJhc2RmIiwKICAgICJwYXNzd29yZCI6ICJhc2RmIgogIH0KXQo=', 'base64').toString('ascii')
const users = JSON.parse(b);
console.log(users)
  
passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password"
      },
      (username, password, done) => {
        let user = users.find((user) => {
          return user.username === username && user.password === password
        })
  
        if (user) {
          done(null, user)
        } else {
          done(null, false, { message: 'Incorrect username or password'})
        }
      }
      /*  //DEBUGGING ONLY 
      (username, password, done) => {
          console.log(username, password)
          return done(null, { id: 1, username: "admin", password: "password" })
      }
      */
    )
  )
passport.serializeUser((user, done) => {
    done(null, user.id)
})
passport.deserializeUser((id, done) => {
    let user = users.find((user) => {
      return user.id === id
    })
  
    done(null, user)
})

// Handle when server is started from vue-cli vs root
if (path.basename(process.cwd()) === 'client') {
    require('dotenv').config({ path: path.resolve(process.cwd(), '../.env') });
}
else {
    require('dotenv').config()
}
const debug = require('debug')('action-dashboard:configure');
//debug(`environment`, process.env);

const bodyParser = require('body-parser')
const routes = require('./routes')

module.exports = {
    before: (app) => {
        app.use(cookieSession({
            name: 'mysession',
            keys: ['vueauthrandomkey'],
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        }))
        app.use(bodyParser.json());
        app.use(passport.initialize());
        app.use(passport.session());
        //app.use('/api', passport.authenticate('local'), routes);
        app.use('/api', routes);
        
        if (process.env.GITHUB_APP_WEBHOOK_SECRET) {
            debug(`Setting up webhooks path: /webhook`);
            app.use('/webhook', middleware);
        }
    },
    after: (app, server) => {
        // Attach socket.io to server
        runStatus.init(server);
    }
}

// Loads webhook support if GITHUB_APP_WEBHOOK_SECRET defined
const webhooks = require('./webhooks');
