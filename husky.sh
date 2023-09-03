
cat <<EEE > .husky/commit-msg
#!/bin/sh
. "\$(dirname "\$0")/_/husky.sh"
npx --no -- commitlint --edit "\${1}"
EEE

cat <<EEE > .husky/pre-commit
#!/bin/sh
. "\$(dirname "\$0")/_/husky.sh"
yarn format
yarn lint
yarn type
EEE

echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

chmod a+x .husky/commit-msg
chmod a+x .husky/pre-commit