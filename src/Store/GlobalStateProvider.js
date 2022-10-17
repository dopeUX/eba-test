import Context from "./Context";
import useGlobalState from "./GlobalState";

const GlobalStateProvider = ({children}) =>{
    return (
        <Context.Provider value={useGlobalState()}>
           {children}
        </Context.Provider>
    )
}

export default GlobalStateProvider;