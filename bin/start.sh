#!/bin/bash
set -x
RELD="`dirname "$0"`"
ABSD="`realpath "$RELD"/../`"

echo $ABSD
sed "s,ROOT,$ABSD," < conf/nginx.conf.template > conf/nginx.conf

exec nginx -c "$ABSD"/conf/nginx.conf
