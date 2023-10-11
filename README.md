# REACT TEMPLATE SITE
- Custom react app created for github pages and react router.

## PREREQUISITES
- NODE.js
- Github Account

## REQUIREMENTS
- react-router
- github-pages
- npm i react-router-dom gh-pages

## SETUP
1. CREATE PROJECT FOLDER (MUST BE ALL LOWERCASE)
2. OPEN TERMINAL IN PROJECT FOLDER
3. CREATE REACT APP : `npx create-react-app .`
4. CREATE REPOSITORY ON GITHUB NAMED "{username}.github.io" (MUST BE PUBLIC)
5. ADDING DEPLOY SCRIPTS IN PACKAGE.JSON
```
"predeploy": "npm run build",
"deploy": "gh-pages -b static -d build",
```
6. ADD HOMEPAGE URL TO PACKAGE.JSON 
```
"homepage": "http://devxnet.me",
```

   - for project 
   ```
   "homepage": "https://myusername.github.io/my-app",
   ```
1. ADD CNAME FILE TO "public/" folder with custom domain ex. devxnet.me
2. PUSH TO THE REPOSITORY:
```
git init
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/xDevxnet/xdevxnet.github.io.git
git push -u origin main
```
1. START REACT APP : `npm run deploy`
2.  Change the the branch your github page is being built from: 
    - GO TO GITHUB REPO > SETTINGS > PAGES > Branch > static

- ADD 404.HTML TO "public/" folder for custom error page
