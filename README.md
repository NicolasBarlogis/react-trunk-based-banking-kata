# Trunk based development through the banking kata

The purpose of this Kata is to see the [Trunk Base Development](https://trunkbaseddevelopment.com/) git workflow in action.
This is done via the implementation of a basic Banking Kata.

For this kata, you have a dummy repository with features already developed and pushed to main (the trunk).
Your goal is to create two releases branches, an apply some corrections.
Try to understand the meaning of the branches / fixs to understands why we do the differents versions.

In this case, the features branches will be created afterward, but in reality this would have been done incrementally.

## Objectives
 * Create a release branch v1 from commit [71ebe48](https://github.com/NicolasBarlogis/react-trunk-based-banking-kata/commit/71ebe4862f0368bf75ef0b22d1a13c1569fae8d3)
 * Tag it as v1.0.0
 * Create a branch v2 from commit [b0a0d5f](https://github.com/NicolasBarlogis/react-trunk-based-banking-kata/commit/b0a0d5f9f61125203734218692ab8a2ee683edbf)
 * Tag it as v2.0.0
 * Apply the patch [bf52755](https://github.com/NicolasBarlogis/react-trunk-based-banking-kata/commit/bf527551fae1996c3372375533e1e50137271ba5) (via cherry-pic) to branch v2
 * Tag it as v2.0.1
 * Apply the same patch [bf52755](https://github.com/NicolasBarlogis/react-trunk-based-banking-kata/commit/bf527551fae1996c3372375533e1e50137271ba5) to branch v1. This one will require more work
 * Tag it as v1.0.1

 A solution is available [here](https://github.com/NicolasBarlogis/react-trunk-based-banking-kata/blob/main/SOLUTION.md), but you may do this exercice without it.

## Summary of the development
### developers
 * **NicolasBarlogis**, who is responsible of this repo, handled pull request and did the code reviews
 * **nba**, who developed deposits, account statements and fixed bugs
 * **nnb** (not nicolas barlogis, of course), who developed basic withdrawal
 
### Progression
1. **nba** created the branch ```nba/feat1-deposit``` from ```main``` , to develop basic deposits
2. **nba** pushed to ```origin nba/feat1-deposit```
3. **NicolasBarlogis** created a [pull request](https://github.com/NicolasBarlogis/react-trunk-based-banking-kata/pull/1) for this branch, reviewed the code and [merged](https://github.com/NicolasBarlogis/react-trunk-based-banking-kata/commit/71ebe4862f0368bf75ef0b22d1a13c1569fae8d3) it to ```main```
4. **nnb** created the branch ```nnb/feat1-withdraw ``` from ```main``` , to develop basic withdraws
5. **nba** created the branch ```nba/feat2-use-statement ``` from ```main``` , to integrate the concept of statement to deposits
6. **nnb** pushed to ```origin nnb/feat1-withdraw```
7. **NicolasBarlogis** created a [pull request](https://github.com/NicolasBarlogis/react-trunk-based-banking-kata/pull/2) for this branch, reviewed the code and [merged](https://github.com/NicolasBarlogis/react-trunk-based-banking-kata/commit/cdc4dc3f9f32df11775f55c3dcc51ac110c02ddf) it to ```main```
8. **nba** pushed to ```origin nba/feat2-use-statement ```
9. **NicolasBarlogis** created a [pull request](https://github.com/NicolasBarlogis/react-trunk-based-banking-kata/pull/3) for this branch, but couldn't merge because nnb pushed in between
10. **nba** rebased is branch on the updated version of ```main```, merged the modifications and repushed to ```origin nba/feat2-use-statement ```
11. **NicolasBarlogis** squash merged to ```main```
12. **NicolasBarlogis** directly removed a file from ```main```
13. **nba** created the branch ```nba/fix-float-amount``` from ```main``` , to correct a problem with float amount
14. **nba** pushed to ```origin nba/fix-float-amount ```
15. **NicolasBarlogis** created a [pull request](https://github.com/NicolasBarlogis/react-trunk-based-banking-kata/pull/4) for this branch, reviewed the code and squash [merged](https://github.com/NicolasBarlogis/react-trunk-based-banking-kata/commit/cdc4dc3f9f32df11775f55c3dcc51ac110c02ddf) it to ```main```
16. **nba** created the branch ```nba/feat2-refac``` from ```main``` , to refactor some code
17. **nba** pushed to ```origin nba/feat2-refac```
18. **NicolasBarlogis** created a [pull request](https://github.com/NicolasBarlogis/react-trunk-based-banking-kata/pull/4) for this branch, reviewed the code and [merged](https://github.com/NicolasBarlogis/react-trunk-based-banking-kata/pull/5) for this branch, reviewed the code and squash [merged](https://github.com/NicolasBarlogis/react-trunk-based-banking-kata/commit/e758911b1d436cce7ee8cc27df93d88e52882b7a) it to ```main```

### Trunk based practices used by the team
Before every branch creation, devs ensured that they used an update to date trunk
```git
git pull --rebase origin main
git checkout -b dev/feat-branch
```
or alternatively
```git
git checkout -b dev/feat-branch origin/main
```

The team used short leaved branches to develop small increments. But since everyone push to the trunk, it is not rare that developers have to rebase before merging.
```git
# ensure local trunk is up to date
git checkout main
# got to our branch
git checkout dev/feat-branch
# rebase
git rebase main
# if needed, resolve conflit, then continue
gti rebase --continue
```

Note that team merged branch with and without squashing. In your team, you may choose how to do, based on rule or case by case. A good practice would be that every commit in master is a working version of the software. But to much squash and you will loose details. Rebase may help to group big a branch with a lot of commits in a few meaningful commits. 


## Reminder: Banking kata
[Source](https://github.com/pitchart/csharp-katas-log/blob/master/BankingKata/README.md)

### Objectives
Think of your personal bank account experience
When in doubt, go for the simplest solution

### Requirements

- [x] Deposit and Withdrawal
- [x] Account statement (date, amount, balance)
- [ ] Statement printing
- [ ] Transfer
- [ ] Statement filters (just deposits, withdrawal, date)
- [ ] Account status (open, closed, frozen)

## Available Scripts (React)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.	

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
