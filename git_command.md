git branch -d 本地分支名  删除本地分支 

-d 检查该分支工作区必须没有改动才可删除

-D 不检查是否改动直接删除

git push origin --delete 远程分支名 删除远程分支

git reset HEAD 文件名  撤销add

git reset HEAD^/git reset HEAD^n/git reset --soft HEAD^ 撤销commit/n为数字,可以指定回退到n次commit提交之前, --soft（不删除工作区改动代码，撤销commit,不撤add）、--mixed（默认参数，和git reset HEAD^效果相同）、--hard(删除工作区改动代码，撤销commit，add)

git commit --amend 修改commit提交信息

游离分支时，切换现有分支即可，如有改动，提交改动，建立新的本地分支，可保存游离状态下的操作，防止代码丢失

git rest 哈希值  版本回退

git merge --abort 撤销分支合并

git revert 撤销合并 在回退到之前的某个版本时，会保留之前版本后面所有的提交记录（实现原理，在版本回退时，新建一个分支，用新建分支回退到历史版本）

git fetch origin 远程分支名 拉指定远程分支

git push origin 本地分支名:远程分支名 将本地分支推送到远端，远端没有会自动创建

git log -p 文件名  查看某个文件的更改记录

git diff commitHash1 commitHash2 --stat 查看两次提交的差异

git cherry-pick commitHash1..commitHash2 将这两次提交之间的所有提交都合并到当前分支 commitHash1必须早于commitHash2提交

git cherry-pick commitHash 将某次提交合并到当前分支  参考：https://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html，https://juejin.cn/post/6914106535173947399，https://segmentfault.com/a/1190000039339941

常用options:
  --quit                终止合并，保留冲突代码
  --continue            继续合并  
  --abort               终止合并，并且恢复到合并之前的状态
  -n, --no-commit       不自动提交(更新工作区和暂存区，不会产生新的提交记录)
  -e, --edit            编辑提交信息

当时用cherry-pick遇到合并冲突时，可以手动解决冲突或git add. 之后使用 git cherry-pick --continue继续合并 

git stash 贮藏当前改动   在需要更新代码而不想因为当前较少的改动而提交代码时，可使用此命令贮藏当前改动，然后pull最新的代码

git stash list 查看本地贮藏的所有内容

git stash apply [-- index] 根据贮藏的索引选择应用哪条贮藏，如果修改文件相同，会出现冲突，需要手动解决

nvm list available 查看所有可安装的node版本
