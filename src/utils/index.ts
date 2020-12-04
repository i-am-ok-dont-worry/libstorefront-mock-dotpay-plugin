import { DotpayForm } from "../types";
const qs = require('querystring');

export const buildDotpayPostBody = (formData: DotpayForm) => {
    if (formData && Object.keys(formData).length > 0) {
        return qs.stringify(formData);
    }

    return null;
};

