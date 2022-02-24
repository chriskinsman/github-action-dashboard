FROM node:16-alpine as base
LABEL org.opencontainers.image.source=https://github.com/ChrisKinsman/github-action-dashboard
WORKDIR /github-action-dashboard

# ---- Dependencies
FROM base as dependencies
RUN apk add --no-cache --virtual .gyp python3 make g++ git openssh

#
# ---- npm ci production
FROM dependencies as npm
COPY package.json package-lock.json /github-action-dashboard/
COPY node_modules /github-action-dashboard/node_modules
RUN cd /github-action-dashboard && \
    npm rebuild



# production stage & clean up
FROM base as release
ENV NODE_ENV production
COPY client/dist /github-action-dashboard/client/dist/
COPY actions.js configure.js getinstallationid.js github.js index.js routes.js runstatus.js webhooks.js ./
COPY --from=npm /github-action-dashboard/node_modules ./node_modules
