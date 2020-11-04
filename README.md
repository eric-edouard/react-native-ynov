# React Native Ynov

## Environment Setup

### 1 - Download and install Node (LTS)

[Node.js](https://nodejs.org/en/)

### 2 - Download and install Yarn

[Installation | Yarn](https://classic.yarnpkg.com/en/docs/install/)

### 3 - Download and install Expo

[Installation - Expo Documentation](https://docs.expo.io/get-started/installation/)

## Start the sample project

Go to the project folder

`cd todo-app`

Download the dependencies with

`yarn`

Start the project with

`yarn start`

## Course Program

**1 - Folder structure** 

**2 - Components: How to use them**

**3 - Styles**

**4 - Components : How to create them**

> **Exercise 1**
> 
> Create a component named “`Header`”
> 
> which displays the text: “TO DO” with a font-size of 50 and a font weight of 800.
> 
> Display this component in the main screen.

**5 - Props**

> Exercise 2 
> Create a component “`TodoItem`” which takes as props :
> 
> - `title` which is a string
> - `done` which is a boolean
> 
> This component should display a indicator whether the task is done or not and it should also display the task to do.
> 
> Display this component in the main screen with values of your own choosing.

**6 - State**



> **Exercise 3**
> 
> Create a state containing an array of 3 tasks to do (you may choose what they are and if they are done or not).
> 
> Below is the type of a task:
> 
> ```typescript
> type Todo = {
>     title: string;
>     isDone: boolean
> }
> ```
> 
> Display all the tasks in the state using the ToDoItem component.


> **Exercise 4**
> 
> Allow the user to set a task to done or not done. 

> **Exercise 5**
> 
> Allow the user to create and delete a Task. 

**7 - useEffect**

> **Exercise 6**
> 
> Use the useEffect hooks to save the to do list in the async store.
> 
> When restarting the app, the tasks should have persisted and you should display them again.
