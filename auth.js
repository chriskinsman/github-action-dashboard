
const passport = require('passport')
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


module.exports = passport;