How did you handle optional props in your components?
    in the interface they are marked with a question mark to designate as optional. Conditional rendering was used. one example is {showRole && <p>Role: {user.role}</p>} whee i used short circuit syntax.

What considerations did you make when designing the component interfaces?
    I made sure they contained a path for all relevant data to be passed and used accordingly.

How did you ensure type safety across your components?
    The main method of type safety was the interfaces.

What challenges did you face when implementing component composition?
    The main challenge was wrapping my head around what exactly was happening when props, especially functions were being passed from level to level of compositions.