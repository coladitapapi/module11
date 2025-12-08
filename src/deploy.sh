set -e
npm run build
cd dist
git init
git add -A
git commit -m "deploy"
git remote add origin https://github.com/coladitapapi/module11.git
git push -f origin main:gh-pages
cd ..
echo "DONE"

chmod +x deploy.sh
./deploy.sh
