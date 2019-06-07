#!/usr/bin/env bash

if [ $debug = "true" ]; then
    # This is dev mode. todo: when not debug we need to compile and serve via nginx.
    cd testing
    npm run serve
fi
