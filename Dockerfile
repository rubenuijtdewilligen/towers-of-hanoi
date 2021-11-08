# Towers of Hanoi game remade in JavaScript
# Copyright (C) 2021 Ruben Uijtdewilligen

# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.

# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.

# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.

FROM library/node:14.17.3-alpine
RUN apk update && apk upgrade && apk add --no-cache git
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./package.json /usr/src/app/
RUN npm install --production && npm cache clean --force
COPY ./ /usr/src/app
ENV NODE_ENV production
ENV PORT 80
EXPOSE 80
CMD [ "npm", "start" ]