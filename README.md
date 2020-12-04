
![DotPay](https://www.cebule.pl/data/include/cms/CMS-DotPay/logo_dotpay.jpg)
## LSF Dotpay plugin
This plugin provides support for DotPay one click payments.
DotPay plugin appends new state branch to the LSF redux store:
```js
{
    ...
    dotpay: {
        form: DotpayForm,
        url: string,
        status: DotpayStatus
    }   
}
```

Plugin has access to all lsf functionality including IOC container. Dependencies
can be rebound according to plugin needs.

## Local storage
DotPay plugin stores last successfully fetched payment form object
in key `last_dotpay_plugin`

## Test plugin
Plugin must be tested in isolation. Unit tests can be performed via jest framework
in `/tests/test.ts` file.
Template includes by default mocked LocalStorage object.
