import React from "react"
function foo(){}
export const Context = React.createContext({
    token:null,
    userId:null,
    login:foo,
    logout:foo
})