rm -rf ./node_modules/design-system

rm -rf dist
rm -rf .angular

npx ng build design-system

mkdir -p ./node_modules/design-system
cp -r ./dist/design-system/* ./node_modules/design-system

npx ng serve admin-panel

