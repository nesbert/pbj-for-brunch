#!/bin/sh

# post-install.sh - Run any post build routines here

SCRIPT='post-install.sh'
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# initialize
source $DIR/_init.sh

# initialize bower
${ROOT_DIR}/node_modules/.bin/bower install --force-latest

# copy assets to public
${ROOT_DIR}/build/copy-assets.sh

# start web server
echo "${SCRIPT_INFO} good to go, run:\n\n    ./node_modules/.bin/brunch w -s\n"
exit 0
