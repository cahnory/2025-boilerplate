branchOption="$1"

baseBranch="$branchOption"
if [ -z $baseBranch ]
then
  baseBranch="main"
fi

targetRemote=$(git config branch.${baseBranch}.remote)

if [ -z $targetRemote ]
then
  echo -e "\033[33m⚠️  No remote found for base branch '${baseBranch}'.\033[0m"
  echo -e "All commits from the current branch will be checked."
  echo -e "(You can set a base branch in package.json → config.baseBranch)"
  lastCommonCommit=$(git rev-list --max-parents=0 HEAD)
else
  lastCommonCommit=$(git merge-base ${targetRemote}/${baseBranch} HEAD)
fi

echo -e "\n\033[36m🔍 Analyzing commits...\033[0m"

if [ -z $lastCommonCommit ]
then
  echo -e "\033[31m❌ No commits found to check.\033[0m"
else  
  echo -e "\n\033[32m✅ Last common commit:\033[0m"
  git log --pretty=oneline -n 1 "$lastCommonCommit"

  echo -e "\n\033[34m📜 Commits to check:\033[0m"
  echo "──────────────────────────────────────"
  git log --pretty=oneline "$lastCommonCommit"..HEAD
  echo "──────────────────────────────────────"
  
  echo -e "\n\033[36m🧐 Checking commits...\033[0m"
  commitlint --from "$lastCommonCommit"
fi
