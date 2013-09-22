#!/bin/sh

set -e

# common variables
APP_NAME="pbj-for-brunch"

BLUE='\033[00;34m'
CYAN='\033[00;36m'
MAGENTA='\033[00;35m'
GREEN='\033[00;32m'
RESTORE='\033[0m'
RED='\033[00;31m'

# output helpers
SCRIPT_OK="${APP_NAME} ${GREEN}ok${RESTORE}";
SCRIPT_ERROR="${APP_NAME} ${RED}error${RESTORE}"
SCRIPT_INFO="${APP_NAME} ${BLUE}info${RESTORE}"
SCRIPT_WARN="${APP_NAME} ${MAGENTA}warn${RESTORE}"

if [ -z "$SCRIPT" ]
then
  echo -e "${SCRIPT_ERROR} \$SCRIPT required"
  exit 1
fi

if [ -z "$DIR" ]
then
  echo -e "${SCRIPT_ERROR} \$DIR required"
  exit 1
fi

ROOT_DIR=$DIR/..
APP_DIR=$DIR/../app
BOWER_DIR=$DIR/../bower_components
PUBLIC_DIR=$DIR/../public

# check for public dir
if [ ! -d $PUBLIC_DIR ]
then
  mkdir -p $PUBLIC_DIR
fi
