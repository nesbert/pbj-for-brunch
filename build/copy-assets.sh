#!/bin/bash

# copy-assets.sh - Copy and vendor assets to the public directory.

SCRIPT='copy-assets.sh'
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# initialize
source $DIR/_init.sh

# copy assets/.htaccess
cp -r $APP_DIR/assets/.htaccess $PUBLIC_DIR
echo -e "${SCRIPT_OK} copied .htaccess to public..."

# copy bootstrap css files // TODO hack to I figure out what changed brunch@1.7.6
cp -r $BOWER_DIR/bootstrap/css $PUBLIC_DIR
echo -e "${SCRIPT_OK} copied Bootstrap 3 css to public..."

# copy bootstrap font files
cp -r $BOWER_DIR/bootstrap/fonts $PUBLIC_DIR
echo -e "${SCRIPT_OK} copied Bootstrap 3 fonts to public..."

exit 0