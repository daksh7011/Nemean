# Contributing

1. File an issue to notify the maintainers about what you're working on.
2. Fork the repo, develop and test your code changes, add docs.
3. Make sure that your commit messages clearly describe the changes.
4. Send a pull request.

# Filing an issue
Use the issue tracker to start the discussion. It is possible that someone else is 
already working on your idea, your approach is not quite right, or that the functionality 
exists already. The ticket you file in the issue tracker will be used to hash that all out.

# Code Style

* Write in UTF-8 encoding
* Always use tabs for indentation (don't use spaces)
* Always try to limit line length to 80 characters
* Function names should always be in camelCase
* Look at the existing style and adhere accordingly

# Forking the repository
Be sure to do relevant tests on layouts, styles and scripts before making the pull request. 
You should also build the docs yourself, add comments on changes you have dode and make sure they're readable.

# Making Pull Request
Once you have made all your changes, tests, make a pull request to move everything back into the main branch of the 
repository. Be sure to reference the original issue in the pull request. 

## Contributing for the first time?
Well, if you are contributing for the first time, follow these steps to get started with contribution.

**Note**: Your fork is the "origin" and the repository you forked from is the "upstream".

* Login to your gitlab account and fork the repository.

* Now you have cloned the repository under your account: gitlab.com/<your_username>/nemean

Let's assume that you cloned already your fork to your computer with a command like this:

`git clone https://gitlab.com/your_name/nemean.git`

`cd nemean`

**If that so, then you need to continue in this order:**

1. Add an upstream remote to your cloned fork:
    
    `git remote add upstream https://gitlab.com/daksh7011/nemean.git`
1. Fetch commits and branches from upstream remote:
    
    `git fetch upstream`
1. Switch to the master branch of your fork:

    `git checkout master`
1. Stash the changes of your "master" branch:

    `git stash`
1. Merge the changes from the "master" branch of the "upstream" into your the "master" branch of your "origin":

    `git merge upstream/master`
1. Resolve merge conflicts if any and commit your merge:
    
    `git commit -am "Merged from upstream`
1. Push the changes to your fork:

    `git push`
1. Get back your stashed changes:

    `git stash pop`
    
You're done! Congratulations!

**Good Luck!**

Last updated on 12/20/2018: 16:39 by [Daksh](https://gitlab.com/daksh7011)