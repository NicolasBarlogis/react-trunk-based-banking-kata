 ###  Create a release branche v1 from commit [71ebe48](https://github.com/NicolasBarlogis/react-trunk-based-banking-kata/commit/71ebe4862f0368bf75ef0b22d1a13c1569fae8d3)
 ```git
  git checkout -b dev/RELEASE-1 71ebe4862f0368bf75ef0b22d1a13c1569fae8d3
  git push origin dev/RELEASE-1
 ```
 In practice, release branch should not be prefixed by dev name. In this exercice it is to enable everyone to create release branches.
 
 ###  Tag it as v1.0.0
 ```git
  git checkout dev/RELEASE-1
  git tag -a -m "Releasing version 1.0.0" dev/1.0.0
  git push origin --tags
 ```
 tag name dev/1.0.0 is prefixed here so that everyone working on this repo can create a tag, but in reality it would just be 1.0.0 .
 
 ###  Create a branch v2 from commit [b0a0d5f](https://github.com/NicolasBarlogis/react-trunk-based-banking-kata/commit/b0a0d5f9f61125203734218692ab8a2ee683edbf)
 ```git
  git checkout -b dev/RELEASE-2 b0a0d5f9f61125203734218692ab8a2ee683edbf
  git push origin dev/RELEASE-2
 ```
 
 ### Tag it as v2.0.0
 ```git
  git checkout dev/RELEASE-2
  git tag -a -m "Releasing version 2.0.0" dev/2.0.0
  git push origin --tags
 ```
 
 ###  Apply the patch [bf52755](https://github.com/NicolasBarlogis/react-trunk-based-banking-kata/commit/bf527551fae1996c3372375533e1e50137271ba5) (via cherry-pic) to branch v2
 ```git
  git checkout dev/RELEASE-2
  git cherry-pick -m 1 -x bf527551fae1996c3372375533e1e50137271ba5
  git push origin dev/RELEASE-2
 ```
 The -x option is important. It adds a reference to the cherry picked commit (or commits if you pick multiples at once).
 
 ###  Tag it as v2.0.1
 ```git
  git checkout dev/RELEASE-2
  git tag -a -m "Releasing version 2.0.1" dev/2.0.1
  git push origin --tags
 ```
 
 ###  Apply the same patch [bf52755](https://github.com/NicolasBarlogis/react-trunk-based-banking-kata/commit/bf527551fae1996c3372375533e1e50137271ba5) to branch v1. This one will require more work
 ```git
  git checkout dev/RELEASE-1
  git cherry-pick -m 1 -x bf527551fae1996c3372375533e1e50137271ba5
  # there is conflit here, so merge and commit your merge
  git push origin dev/RELEASE-1
 ```
 
 ###  Tag it as v1.0.1
 ```git
  git checkout dev/RELEASE-1
  git tag -a -m "Releasing version 1.0.1" dev/1.0.1
  git push origin --tags
 ```
 