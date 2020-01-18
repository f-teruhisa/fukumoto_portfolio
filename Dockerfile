FROM ubuntu:18.04
LABEL maintainer="Teruhisa Fukumoto<f-teruhisa>"
# install yarn
RUN apt-get update -qq && apt-get install -y yarn curl npm nodejs

# Do with cannot use yarn with error
RUN curl -SL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - &&\
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && apt-get update -qq && apt-get install -y yarn

# Add packages
RUN yarn add typescript @types/node @types/react @types/react-dom @types/firebase @material-ui/core
RUN npm install -g firebase-tools
RUN npm install n -g && n stable && apt purge -y nodejs npm

RUN mkdir /myapp
COPY . /myapp
WORKDIR /myapp
