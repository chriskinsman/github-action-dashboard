
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const debug = require('debug')('action-dashboard:auth');

if (process.env.DASHBOARD_USERS) {
    let users = [];
    try {
        const b = Buffer.from(process.env.DASHBOARD_USERS, 'base64').toString('ascii')
        users = JSON.parse(b);
    } catch (error) {
        console.log("ERROR loading local Users");
        debug(error);
    }
    debug(`users`, users);

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
}


module.exports = passport;