import React from "react";
import { Route, Redirect } from "react-router-dom";
import TokenService from "../services/token-service-customer";

export default function PrivateRouteCustomer({ component, ...props }) {
  const Component = component;
  return (
    <Route
      {...props}
      render={(componentProps) => {
        return TokenService.hasAuthTokenSite() ? (
          <Component {...componentProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/s/:subdomain/login",
              state: { from: componentProps.location },
            }}
          />
        );
      }}
    />
  );
}
