// A global file is not made otherwise anyone can change the value of the files
import React from "react";
const UserContext = React.createContext();
export default UserContext;

/*
every context is a provider that provides context 
once context is created a provider has to be given to wrap the elements
the nested components can take access of the values in the context 
provider is made in a seperate file => jsx

<userContext> ==> this is context provider
    <Login/>
    <Card>
        <Data/>
    </Card>
</userContext;>

*/
