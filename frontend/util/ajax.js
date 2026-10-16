// jQuery 1.x deferreds don't follow Promise semantics: a value returned from
// an error handler leaves the chain rejected. Wrapping $.ajax in a native
// Promise makes thunks' `.then(onSuccess, onError)` behave as expected.
// Rejections carry the jqXHR, so `err.responseJSON` still works.
const ajax = (options) => Promise.resolve($.ajax(options));

export default ajax;
