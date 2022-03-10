
# First starting with .md

https://github.com/mhmd2015/test1.git

echo "# test1" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/mhmd2015/test1.git
git push -u origin main

…or push an existing repository from the command line

git remote add origin https://github.com/mhmd2015/test1.git
git branch -M main
git push -u origin main
