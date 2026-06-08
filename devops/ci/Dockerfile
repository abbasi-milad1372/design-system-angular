
FROM registry.iho.co/shared_services/shared-libraries/design-system/dss:node18-deps-cache-v1 AS build
# FROM registry.iho.co/devops/templates/node/node:18.15.0-bullseye-slim AS build

# USER root
# RUN rm -rf /var/lib/apt/lists/* && apt-get update -y && \
#     apt-get install -y --no-install-recommends \
#     ca-certificates \
#     curl \
#     iputils-ping \
#     libc6-dev \
#     libgdiplus && \
#     rm -rf /var/lib/apt/lists/*

# COPY ./devops/IHO-RootCA.crt /usr/local/share/ca-certificates
# RUN update-ca-certificates

# WORKDIR /usr/src/root

# COPY package.json ./

# ENV NODE_ENV=development
# # RUN yarn install
# RUN npm install --legacy-peer-deps --include=dev

ARG NPM_TOKEN
ENV NPM_TOKEN=$NPM_TOKEN
ARG CI_PROJECT_ID
ENV CI_PROJECT_ID=$CI_PROJECT_ID
ARG CI_COMMIT_TAG
ENV CI_COMMIT_TAG=$CI_COMMIT_TAG
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/IHO-RootCA.crt
ENV NODE_ENV=production

COPY tsconfig.json tailwind.config.js angular.json ./

COPY projects/ ./projects/

WORKDIR /usr/src/root
# RUN npm run build
RUN npx ng build design-system

WORKDIR /usr/src/root/dist/design-system

RUN echo @design_system:registry=https://gitlab.iho.co/api/v4/projects/${CI_PROJECT_ID}/packages/npm/ >> /usr/src/root/dist/design-system/.npmrc
RUN echo //gitlab.iho.co/api/v4/projects/${CI_PROJECT_ID}/packages/npm/:_authToken=${NPM_TOKEN} >> /usr/src/root/dist/design-system/.npmrc

# RUN npm version patch
RUN npm version $CI_COMMIT_TAG
RUN npm publish --registry=https://gitlab.iho.co/api/v4/projects/${CI_PROJECT_ID}/packages/npm/

WORKDIR /usr/src/root
RUN mkdir -p ./node_modules/design-system
RUN cp -r ./dist/design-system/* ./node_modules/design-system
RUN npx ng build admin-panel --configuration=production
# # RUN npx ng build admin-panel --configuration=production

FROM registry.iho.co/devops/templates/nginx/nginx:alpine
COPY --from=build /usr/src/root/dist/admin-panel /usr/share/nginx/html
COPY ./devops/ci/nginx.conf /etc/nginx/nginx.conf

