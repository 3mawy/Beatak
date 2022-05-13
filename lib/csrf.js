import { nextCsrf } from "next-csrf";

const options = {
    secret: "dfchfgjcjfchnchcfhnfghcfgj6545ctxv" // Long, randomly-generated, unique, and unpredictable value
}

export const { csrf, csrfToken } = nextCsrf(options);
