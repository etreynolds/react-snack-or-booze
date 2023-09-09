### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
	- It handles routing in single-page applications.

- What is a single page application?
	- An app that updates components on a single page rather than redirecting to different pages.

- What are some differences between client side and server side routing?
	- Server side routing results in a full page refresh when the user interacts with certain elements, whereas client side does not. Client side can refresh just the content being interacted with resulting in a smoother, faster user experience.

- What are two ways of handling redirects with React Router? When would you use each?
	- Using the Redirect component and using the useHistory hook. 

- What are two different ways to handle page-not-found user experiences using React Router?
	- Using Redirect to send user to a 404 page or using Route to catch that there is not existing page.

- How do you grab URL parameters from within a component using React Router?
	- Using the useParams hook

- What is context in React? When would you use it?
	- It allows you to pass data through all components rather than having to pass props down manually at every level. Used to avoid prop drilling, lots of repetition, and is useful for global themes and shared data.

- Describe some differences between class-based components and function
  components in React.
	- Class components use `this` while function components use `use`. Function components are lighter and faster as they don't rely on class definition and lifecycle. They also tend to be more concise and easier to read.

- What are some of the problems that hooks were designed to solve?
	- Hooks allow you to use state and other features without writing a class. They let you "hook into" React state and lifecycle featuers from function components.