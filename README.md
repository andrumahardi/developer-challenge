# Full Stack challenge

## Prequisites

* Backend Code preferrably build using Django + DRF 
* Frontend code preferrably build using Angular 10+

## Task

### Problem Solving

In a town, there are n people labeled from 1 to n. 
There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given a data that indicate trust where trust[i] = "ai bi" representing that the person labeled ai trusts the person labeled bi.

Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

Example 1:

```code
Input: n = 2, trust = "1 2"
Output: 2
```

Example 2:

```code
Input: n = 3, trust = "1 3, 2 3"
Output: 3
```

Example 3:

```code
Input: n = 3, trust = "1 3, 2 3, 3 1"
Output: -1
```

Example 4:


```code
Input: n = 3, trust = "1 2, 2 3"
Output: 2=-1
```

Example 5:

```code
Input: n = 4, trust = "1 3, 1 4, 2 3, 2 4, 4 3"
Output: 3
```

### Backend Application

We want to develop small web api application that allow user to login or register.
The site will have a simple catalog management feature, which comprise of a category and product that assigned to the category.

Category need to have at least title, image, parent category.
Product need to have title, image, category, price

Also a simple banner management. A banner need to have at least a title, an image and a link.

| Category    |
| ------------ | 
| Title       | 
| Image       |
| Parent      |


| Product    |
| ----------- | 
| Title       | 
| Image       |
| Category      |
| Price |

| Banner |
| ---- |
| Title |
| Image | 
| Link |

### Frontend Application

We want to display the data from the backend application, 
the homepage will display list of category 
When category is selected the list of product will be filtered 

User should be able to login / register and has access to profile page if login.

## Design

Basic design for the frontend can be accessed inside design folder.

## Evaluation

* Do you understand Python language 
* Do you understand typescript and angular development
* Can you implement the given design

