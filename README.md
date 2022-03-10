
# First starting with .md

https://github.com/mhmd2015/test1.git
```
echo "# test1" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/mhmd2015/test1.git
git push -u origin main
```
…or push an existing repository from the command line
```
git remote add origin https://github.com/mhmd2015/test1.git
git branch -M main
git push -u origin main
```

to get the raw of .md

use the following:

https://github.com/mhmd2015
converted to

https://raw.githubusercontent.com/mhmd2015/Test1/master/README.md

so the role:
1- the repository must be public.

2- and do modification to the link:
https://[row.]github[usercontent].com/mhmd2015/Test1/[branch]/[file path]

# .md Format

## hightligh
```
# The largest heading
## The second largest heading
###### The smallest heading
```

## Text Format


|Style	|Syntax	|Keyboard |shortcut	|Example	|Output|
|Bold	|** ** or __ __	|Command+B (Mac) or Ctrl+B (Windows/Linux)	|**This is bold text**|	This is bold text|
|Italic	|* * or _ _     	|Command+I (Mac) or Ctrl+I (Windows/Linux)	*This text is italicized*	This text is italicized|
|Strikethrough	|~~ ~~		|~~This was mistaken text~~	|This was mistaken text|
|Bold and nested italic	|** ** and _ _		|**This text is _extremely_ important**|	This text is extremely important|
|All bold and italic|	*** ***		|***All this text is important***	|All this text is important|

## Links
```
This site was built using [GitHub Pages](https://pages.github.com/).
```
This site was built using [GitHub Pages](https://pages.github.com/).

## Include Pictures:
```
![boy picture](../master/images/boy.png)
```
![boy picture](../master/images/boy.png)



## Code block

just add 3 ` to use section <code></code>

``` C#
public static async Task GetAsync(String url){
    ...
}


```

## List

```
- Mohammed
- Abdullah
- Hussein

```
- Mohammed
- Abdullah
- Hussein

## Nested
```
1. First list item
   - First nested list item
     - Second nested list item
```
1. First list item
   - First nested list item
     - Second nested list item


## Tasks List
```
- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:
```
- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:


## format ref:

[md format](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

[C# code](https://github.com/search?l=C%23&q=convert+html+to+md&type=Repositories)
