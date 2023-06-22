interface EnvVariables {
  SERVER_ROUTE: string;
  API_ROUTE: string;
}

const localVariables: EnvVariables = {
  SERVER_ROUTE: "http://5.150.193.43:3000",
  API_ROUTE: "http://5.150.193.43:3000/api", // "http://veckans300.beneit.se/api";
};

const productioNvariables: EnvVariables = {
  SERVER_ROUTE: "https://veckans300.beneit.se",
  API_ROUTE: "https://veckans300.beneit.se/api",
};

export const SUPABASE_URL = "https://wtapfjyspmuwlksvhnsg.supabase.co";
export const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0YXBmanlzcG11d2xrc3ZobnNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcxMTA2MzEsImV4cCI6MjAwMjY4NjYzMX0.bEkJLfrLiXjJ6kw8yGgapPiGkzekaLllBEz9CFVJY7k";

export const SERVER_ROUTE = __DEV__
  ? localVariables.SERVER_ROUTE
  : productioNvariables.SERVER_ROUTE;
export const API_ROUTE = __DEV__
  ? localVariables.API_ROUTE
  : productioNvariables.API_ROUTE;
