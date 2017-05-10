
// interface for each should be roughly:
/*
  {
    title: 'string',
    prompt: 'string',
    winCondition: computationData => bool
  }
*/
export default [
  {
    title: 'Simple Identifier',
    prompt: "First, type 'a₁'. Letters followed optionally by numbers represent variables in the lambda calculus.",
    winCondition: ({text}) => {
      return text === 'a₁';
    }
  },
  // okay the first problem I actually care about
  {
    title: 'Identity',
    prompt: "Nice! Next, we'll get you started with some basic syntax. We're gonna make the identity function. please type λa₁.a₁ or something",
    winCondition: ({ast}) => {
      return (
        // We could put conditions that we might like to use into lib/lambda when we need to.
        ast &&
        ast.type === "function" &&
        ast.body.type === "token" &&
        ast.argument === ast.body.name
      );
    }
  },
  {
    title: "Parentheses",
    prompt: "Schweet! This takes one argument a and outputs that same argument! Now go ahead and wrap the whole thing in parentheses",
    winCondition: ({text, ast}) => {
      return (
        // We could put conditions that we might like to use into lib/lambda when we need to.
        /^\s*\(.*\)\s*$/.test(text) &&
        ast &&
        ast.type === "function" &&
        ast.body.type === "token" &&
        ast.argument === ast.body.name
      );
    }
  },
  {
    title: "Baby's first β-reduction",
    prompt: "Nicely done! You can always wrap an expression inside parentheses. With that out of the way, we can apply variables to this function! note: not passable because not implemented yet...",
    winCondition: ({ast}) => {
      return (
        // We could put conditions that we might like to use into lib/lambda when we need to.
        ast &&
        ast.type === "function" &&
        ast.body.type === "token" &&
        ast.argument === ast.body.name &&
        false //because i haven't implemented this yet.
      );
    }
  }
  /*
    considering following types of problems:
    - illustrating syntactic sugar of multiple arguments, and what that means.
    - illustrating how you can always replace a variable with a function
    - illustrating alpha conversion when a naming collision applies.
    - Challenges...
  */
];
