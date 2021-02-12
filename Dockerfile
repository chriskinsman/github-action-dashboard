FROM node:14-alpine as base

WORKDIR /github-action-dashboard

# ---- Dependencies
FROM base as dependencies
RUN apk add --no-cache --virtual .gyp python make g++ git openssh

#
# ---- npm ci production
FROM dependencies as npm
COPY package.json package-lock.json /github-action-dashboard/
RUN cd /github-action-dashboard && \
    npm ci --only=production

#
# ---- Build ----
FROM npm as build
COPY . .
RUN cd /github-action-dashboard/ && \
    npm ci && \
    cd /github-action-dashboard/client && \
    npm ci && \
    DOCKER_BUILD=true npm run build

# production stage & clean up
FROM base as release
COPY --from=build /github-action-dashboard/client/dist/ ./client/dist/
COPY --from=build /github-action-dashboard/configure.js /github-action-dashboard/github.js /github-action-dashboard/index.js /github-action-dashboard/routes.js  ./
COPY --from=npm /github-action-dashboard/node_modules ./node_modules
RUN NODE_ENV=production
EXPOSE 80
