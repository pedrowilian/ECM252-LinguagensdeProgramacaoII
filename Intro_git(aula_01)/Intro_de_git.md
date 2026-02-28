felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (master)
$ git -v
git version 2.52.0.windows.1

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (master)
$ git config --global user.name "Felipe Fazio"

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (master)
$ git config --global user.email felipefazio.costa@gmail.com

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (master)
$ git init
Initialized empty Git repository in C:/Users/felip/Desktop/GitHub/ECM252_LP2/.git/

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (master)
$ git branch -m main

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git config --global init.defaultBranch main

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git config --global core.editor "code --wait"

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git config --list

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git config --global --edit

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git config --list --show-origin

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git add .

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   Intro_git(aula_01)/Intro_de_git.md
        new file:   Intro_git(aula_01)/calculadora.py


felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git status -s
A  Intro_git(aula_01)/Intro_de_git.md
A  Intro_git(aula_01)/calculadora.py

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git commit
[main (root-commit) e10ef4a] feat(ap01-git): implementa a soma
 2 files changed, 37 insertions(+)
 create mode 100644 Intro_git(aula_01)/Intro_de_git.md
 create mode 100644 Intro_git(aula_01)/calculadora.py

 felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git log --oneline
e10ef4a (HEAD -> main) feat(ap01-git): implementa a soma

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git tag -a v1.0.0 -m "Implementação e teste da soma."

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git commit -m "feat(ap01-git): implementa a subtracao"
[main 2709278] feat(ap01-git): implementa a subtracao
 2 files changed, 5 insertions(+), 1 deletion(-)

 felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git diff

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git tag -a v1.1.0  -m "Implementação e teste da subtração"

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git tag -d v1.1.0
Deleted tag 'v1.1.0' (was df6ddb5)

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git tag -a v1.1.0 -m "Implementação e teste da subtração" 095486b

felip@PC_Felipe MINGW64 ~/Desktop/GitHub/ECM252_LP2 (main)
$ git log --oneline
ab6064d (HEAD -> main) feat(ap01-git): implementa a multiplicacao
095486b (tag: v1.1.0) test(ap01-git): testa a funcao subtracao
2709278 feat(ap01-git): implementa a subtracao
ac21fe4 (tag: v1.0.0) test(ap01-git): testa a funcao soma
e10ef4a feat(ap01-git): implementa a soma