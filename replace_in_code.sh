#! /usr/bin/bash
TFVARS_FILE="./infrastructure-code/terraform.tfvars"
FRONTEND_VARIABLE="FRONTEND_DNS_NAME"

frontend_replace() {
    frontend_input_name=$(cat "${TFVARS_FILE}" | grep "${FRONTEND_VARIABLE}" | grep -Eo '".*"' | grep -Eo '[^"]+')

    # Update here for more occurences of files where frontend needs to be referenced.
    sed -i "s/${FRONTEND_VARIABLE}/$(echo ${frontend_input_name})/g" "./app-code/docker-compose.yml"
}

########## BEGIN SCRIPT ##########
getopts "cdh" option
case $option in
    c)
    cp -r "app-code-template" "app-code"
    frontend_replace
    ;;

    d)
    rm -rf "app-code"
    ;;

    h)
    help
    ;;

    ?)
    cat << 'EOF'
Illegal option entered. The available options [-c|-d|-h] are:
    -c: Creating and running images and containers
    -d: Stopping and removing images and containers
    -h: Getting help for the script

In the script, we don't use getopts in a while loop, so only the first option will be recognized. That is:
    <script name> -cda : -c will be seen as the parameter
    <script name> -dca : -d will be seen as the parameter
    <script name> -acd : -a will be seen as the parameter
EOF
    ;;
esac
