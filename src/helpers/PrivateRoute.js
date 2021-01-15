// /* eslint-disable multiline-ternary */
// /* eslint-disable react/prop-types */
// import React from 'react'
// import { Redirect, Route } from 'react-router-dom'

// const ProvateRoute = ({ component: Component, ...rest }) => (
//    <Route
//       {...rest}
//       render={props =>
//         localStorage.getItem('authToken') ? (
//             <Component {...props} />
//         ) : (
//             <Redirect
//                to={{
//                  pathname: '/login',
//                  state: { from: props.location }
//                }}
//             />
//         )
//       }
//    />
// )

// export default ProvateRoute
