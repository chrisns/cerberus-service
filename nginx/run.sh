#!/bin/sh -

set -o errexit

# @TODO replace with envsubst

# --- Start Insert ENV to JS bundle ---
# echo "== Inserting env variables =="
for file in /usr/share/nginx/html/*.js
do
  echo "== ENV sub for $file =="
  cat $file | sed 's,REPLACE_KEYCLOAK_AUTH_URL,'${KEYCLOAK_AUTH_URL}',g' > $file
  cat $file | sed 's,REPLACE_KEYCLOAK_CLIENT_ID,'${KEYCLOAK_CLIENT_ID}',g' > $file
  cat $file | sed 's,REPLACE_KEYCLOAK_REALM,'${KEYCLOAK_REALM}',g' > $file
  cat $file | sed 's,REPLACE_FORM_API_URL,'${FORM_API_URL}',g' > $file
  cat $file | sed 's,REPLACE_REFDATA_API_URL,'${REFDATA_API_URL}',g' > $file
done
# echo "== Finished ENV sub =="