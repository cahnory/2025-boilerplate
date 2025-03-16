branchOption="$1"

baseBranch="$branchOption"
if [ -z $baseBranch ]
then
  baseBranch="main"
fi

targetRemote=$(git config branch.${baseBranch}.remote)

if [ -z $targetRemote ]
then
  echo -e "\033[33m⚠️  No remote configured for the base branch '${baseBranch}'.\033[0m"
  echo -e "You can specify a base branch in your package.json (config.baseBranch)."
  exit 0
fi

currentBranch=$(git rev-parse --abbrev-ref HEAD)

git fetch ${targetRemote} ${baseBranch} > /dev/null 2>&1

targetLastCommit=$(git rev-parse ${targetRemote}/${baseBranch})
lastCommonCommit=$(git merge-base ${targetRemote}/${baseBranch} HEAD)

if [ "${targetLastCommit}" = "${lastCommonCommit}" ] ;
then
  echo -e "\033[32m✅ Your branch \"${currentBranch}\" is synchronized with remote branch \"${targetRemote} ${baseBranch}\".\033[0m"
else
  echo -e "\033[31m❌ Your branch \"${currentBranch}\" is out of sync with remote branch \"${targetRemote} ${baseBranch}\".\033[0m"
  echo -e "To resolve this, run: \`git pull --rebase ${targetRemote} ${baseBranch}\`."
  echo -e "\nPlease address this before proceeding with other tasks."
  exit 1
fi