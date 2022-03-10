
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


to get the raw of .md

use the following:

https://github.com/mhmd2015
converted to

https://raw.githubusercontent.com/mhmd2015/Test1/master/README.md

so the role:
1- the repository must be public.

2- and do modification to the link:
https://[row.]github[usercontent].com/mhmd2015/Test1/[branch]/[file path]


## Include Pictures:

![boy picture](../master/images/boy.png)



## Code block

just add 3 ` to use section <code></code>

``` C#
public static async Task GetAsync(String url){
    ...
}


```

