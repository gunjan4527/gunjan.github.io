@echo off

git add . || exit /b
git commit -m "updated portfolio" || exit /b
git push || exit /b
npm run deploy || exit /b

echo ✅ Deployment successful!
pause